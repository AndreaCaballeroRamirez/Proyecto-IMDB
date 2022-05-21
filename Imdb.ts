import { Movie } from "./Movie";

export class Imdb{

    peliculas:Movie[]

    constructor(peliculas:Movie[]){

        this.peliculas=peliculas
    }

    mostrarSoloTitulo(){
        for (let i=0; i<this.peliculas.length; i++)
        console.log(this.peliculas[i].title)
    }
}