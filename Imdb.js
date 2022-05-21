"use strict";
exports.__esModule = true;
exports.Imdb = void 0;
var Imdb = /** @class */ (function () {
    function Imdb(peliculas) {
        this.peliculas = peliculas;
    }
    Imdb.prototype.mostrarSoloTitulo = function () {
        for (var i = 0; i < this.peliculas.length; i++)
            console.log(this.peliculas[i].title);
    };
    return Imdb;
}());
exports.Imdb = Imdb;


