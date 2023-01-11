CREATE DATABASE IF NOT EXISTS imovim;

# DROP DATABASE imovim;

USE imovim;

CREATE TABLE IF NOT EXISTS Users(
	id int primary key auto_increment,
    nickname varchar(100) not null,
    email varchar(255) not null unique,
    phoneNumber varchar(30),
    password varchar(255) not null,
    birthday date not null,
    created_at datetime default now()
);

CREATE TABLE IF NOT EXISTS Profile(
	id int primary key auto_increment,
    user_id int not null unique,
    profileImage varchar(255),
    profileBackground varchar(255),
    description text,
    localization varchar(100),
    
    constraint user_ID_tblProfile foreign key(user_id) references Users(id)
);

CREATE TABLE IF NOT EXISTS UserFollowing(
	id int primary key auto_increment,
    user_id int not null,
    follower_id int not null,
    created_at datetime default now(),
    
    constraint user_ID_tblUserFollowing foreign key(user_id) references Users(id),
    constraint follower_ID_tblUserFollowing foreign key(follower_id) references Users(id)
);

CREATE TABLE IF NOT EXISTS Posts(
	id int primary key auto_increment,
    user_id int not null,
	caption text,
	created_at datetime default now() not null,
	image varchar(255),
    updated boolean default false,
    
    constraint user_ID_tblPosts foreign key(user_id) references Users(id)
);

CREATE TABLE IF NOT EXISTS UserLikesPost(
	id int primary key auto_increment,
    user_id int not null,
    post_id int not null,
    created_at datetime default now(),
	
    constraint user_ID_tblUserLikes foreign key(user_id) references Users(id),
    constraint post_ID_tblUserLikes foreign key(post_id) references Posts(id)
);

CREATE TABLE IF NOT EXISTS Comments(
	id int primary key auto_increment,
    post_id int not null,
    user_id int not null,
    comment text not null,
    created_at datetime default now(),
    updated boolean default false,
    
    constraint post_id_tblComments foreign key(post_id) references Posts(id),
    constraint user_id_tblComments foreign key(user_id) references Users(id)
);
