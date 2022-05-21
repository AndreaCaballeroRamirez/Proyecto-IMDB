"use strict";
exports.__esModule = true;
var Movie_1 = require("./Movie");
var Imdb_1 = require("./Imdb");
var pelicula2 = new Movie_1.Movie("Gladiator", "2000", "Americana", "acción");
var pelicula3 = new Movie_1.Movie("Braveheart", "2002", "Americana", "acción");
var pelicula4 = new Movie_1.Movie("Como Dios", "2013", "Americana", "comedia");
var pelicula5 = new Movie_1.Movie("Ejecutivo agresivo", "2010", "Americana", "comedia");
var Imdb1 = new Imdb_1.Imdb([pelicula2, pelicula3, pelicula4, pelicula5]);
console.log(Imdb1.mostrarSoloTitulo());

// console.log(JSON.stringify(Imdb1))

JSON.stringify(pelicula2)

