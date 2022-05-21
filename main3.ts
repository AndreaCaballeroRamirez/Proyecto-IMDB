
import { Movie } from "./Movie";
import { Imdb } from "./Imdb";


let pelicula2:Movie= new Movie("Gladiator", "2000", "Americana", "acción")
let pelicula3:Movie= new Movie("Braveheart", "2002", "Americana", "acción")
let pelicula4:Movie= new Movie("Como Dios", "2013", "Americana", "comedia")
let pelicula5:Movie= new Movie("Ejecutivo agresivo", "2010", "Americana", "comedia")

let Imdb1:Imdb = new Imdb([pelicula2, pelicula3, pelicula4, pelicula5])

console.log(Imdb1.mostrarSoloTitulo())


//Poque cuando ejecuto esto, me sale al final un undefined???

