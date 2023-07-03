CREATE DATABASE sgirs

CREATE TABLE prueba(
    id SERIAL PRIMARY KEY,
    title VARCHAR(255) UNIQUE,
    description VARCHAR(255)
);

CREATE TABLE users(
    id SERIAL PRIMARY KEY,
    nit INTEGER UNIQUE,
    idsector VARCHAR,
    nomestablecimiento VARCHAR UNIQUE,
    direccion VARCHAR,
    comuna INTEGER,
    barrio VARCHAR,
    email VARCHAR UNIQUE,
    nomresponsable VARCHAR,
    numero INTEGER,
    password VARCHAR,
);


CREATE TABLE sectores(
    id SERIAL PRIMARY KEY,
    nombre VARCHAR (30) UNIQUE
);

INSERT INTO sectores (nombre) VALUES ('Comercial y servicios'), ('Organicos'), ('Instituciones educativas'), ('Eventos masivos'), ('Entidades publicas'), ('Desarrollos multifamiliares')