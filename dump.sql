CREATE TABLE "public.tb_users" (
	"id_users" serial NOT NULL,
	"name_users" varchar(80) NOT NULL,
	"email_users" varchar(80) NOT NULL,
	"password_user" varchar NOT NULL,
	CONSTRAINT "tb_users_pk" PRIMARY KEY ("id_users")
) WITH (
  OIDS=FALSE
);



CREATE TABLE "public.tb_courses" (
	"id_course" serial NOT NULL,
	"name_course" varchar(60) NOT NULL,
	"teacher_course" varchar(80) NOT NULL,
	"category_course" varchar(50) NOT NULL,
	"description_course" varchar(150) NOT NULL,
	"image_course" varchar NOT NULL,
	CONSTRAINT "tb_courses_pk" PRIMARY KEY ("id_course")
) WITH (
  OIDS=FALSE
);







