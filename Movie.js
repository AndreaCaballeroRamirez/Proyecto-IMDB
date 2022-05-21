"use strict";
exports.__esModule = true;
exports.Movie = void 0;
var Movie = /** @class */ (function () {
    function Movie(title, releaseYear, nacionality, genre) {
        this.title = title;
        this.releaseYear = releaseYear;
        this.nacionality = nacionality;
        this.genre = genre;
    }
    Movie.prototype.mostrarDatos = function () {
        console.log(this.title + "\n" + this.releaseYear + "\n" + this.actors + "\n" + this.nacionality + "\n" + this.director + "\n" + this.writer + "\n" + this.language + "\n" + this.plataform + "\n" + this.isMCU + "\n" + this.mainCharacterName + "\n" + this.producer + "\n" + this.distributor + "\n" + this.genre);
    };
    return Movie;
}());
exports.Movie = Movie;
