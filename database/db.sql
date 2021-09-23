CREATE DATABASE firstbase;

CREATE table users(
    id serial primary key,
    name varchar(255),
    email text
);

insert into users (name, email) values ('Andres', 'andres@ibm.com'), ('pepito', 'pepitp@ibm.com')