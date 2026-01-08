create table user(
    userid varchar(40) primary key,
    username varchar(30) unique,
    email varchar(40) not null,
    password varchar(40) not null
);
show tables;
