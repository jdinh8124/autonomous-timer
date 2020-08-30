CREATE TABLE "user" (
	"user" varchar(255) NOT NULL,
	"password" varchar(255) NOT NULL,
	"email" varchar(255) NOT NULL,
	"createdAt" TIMESTAMP NOT NULL,
	"userId" serial NOT NULL,
	CONSTRAINT "user_pk" PRIMARY KEY ("userId")
) WITH (
  OIDS=FALSE
);



CREATE TABLE "alert" (
	"alert" varchar(255) NOT NULL,
	"userId" integer NOT NULL
) WITH (
  OIDS=FALSE
);



CREATE TABLE "interval" (
	"stand" integer NOT NULL,
	"sit" integer NOT NULL,
	"break" integer NOT NULL,
	"userid" integer NOT NULL
) WITH (
  OIDS=FALSE
);




ALTER TABLE "alert" ADD CONSTRAINT "alert_fk0" FOREIGN KEY ("userId") REFERENCES "user"("userId");

ALTER TABLE "interval" ADD CONSTRAINT "interval_fk0" FOREIGN KEY ("userid") REFERENCES "user"("userId");
