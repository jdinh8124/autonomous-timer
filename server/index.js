require('dotenv/config');
const express = require('express');
const db = require('./database');
const ClientError = require('./client-error');
const staticMiddleware = require('./static-middleware');
const sessionMiddleware = require('./session-middleware');
const bcrypt = require('bcrypt');

const app = express();

app.use(staticMiddleware);
app.use(sessionMiddleware);

app.use(express.json());

app.get('/api/health-check', (req, res, next) => {
  db.query('select \'successfully connected\' as "message"')
    .then(result => res.json(result.rows[0]))
    .catch(err => next(err));
});

app.post('/api/auth/signup', (req, res, next) => {
  bcrypt.hash(req.body.userPwd, 10, function (err, hash) {
    console.error(err);
    const sql = `
    insert into "user"("userName", "email", "userPwd")
    values ($1, $2, $3)
    returning "userName";
    `;

    const userValues = [req.body.userName, req.body.email, hash];
    db.query(sql, userValues)
      .then(result => res.status(201).json(result.rows[0]))
      .catch(err => {
        if (err.code === '23505') {
          res.status(400).json('Username exists');
        } next(err)
        ;
      }
      );
  });

});

app.post('/api/auth/login', (req, res, next) => {
  const userSql = `
    select "userPwd"
      from "user"
     where "userName" = $1;
    `;
  const getUserIdSql = `
    select "userId"
      from "user"
     where "userName" = $1;
  `;
  const userValues = [req.body.userName];
  db.query(userSql, userValues)
    .then(result => {
      bcrypt.compare(req.body.userPwd, result.rows[0].userPwd, (err, comResult) => {
        console.error(err);
        if (comResult) {
          db.query(getUserIdSql, userValues)
            .then(idResult => res.status(200).json(idResult.rows[0].userId))
            .catch(err => next(err));
        } else res.status(401).json();
      });
    })
    .catch(err => next(err));
});

app.use('/api', (req, res, next) => {
  next(new ClientError(`cannot ${req.method} ${req.originalUrl}`, 404));
});

app.use((err, req, res, next) => {
  if (err instanceof ClientError) {
    res.status(err.status).json({ error: err.message });
  } else {
    console.error(err);
    res.status(500).json({
      error: 'an unexpected error occurred'
    });
  }
});

app.listen(process.env.PORT, () => {
  // eslint-disable-next-line no-console
  console.log('Listening on port', process.env.PORT);
});
