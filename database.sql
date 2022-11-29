CREATE DATABASE IF NOT EXISTS Imovim;

USE Imovim;

CREATE TABLE IF NOT EXISTS Users(
	id int primary key auto_increment,
    nickname varchar(30) not null,
    email varchar(255) not null,
    password varchar(255) not null,
    birthday date not null,
    created_at datetime default now()
);

SELECT * FROM Users;