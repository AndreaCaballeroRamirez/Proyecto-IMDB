
export class Movie{

    title:string
    releaseYear:string
    actors:string
    nacionality:string
    director:string
    writer:string
    language:string
    plataform:string
    isMCU:string
    mainCharacterName:string
    producer:string
    distributor:string
    genre:string

    constructor(title:string, releaseYear:string, nacionality:string, genre:string){
        
        this.title=title
        this.releaseYear=releaseYear
        this.nacionality=nacionality
        this.genre=genre
    }

    mostrarDatos():void{
        console.log(this.title + "\n" +this.releaseYear + "\n" + this.actors + "\n" + this.nacionality + "\n" + this.director + "\n" + this.writer + "\n" + this.language + "\n" + this.plataform + "\n" + this.isMCU + "\n" + this.mainCharacterName + "\n" + this.producer + "\n" + this.distributor + "\n" + this.genre)
    }

}