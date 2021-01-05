class Pelicula{
    constructor(id,nombre){
        this.id=id;
        this.nombre=nombre;
    }
    reproducir(){
        return `Reproduciendo pelicula:${this.nombre}`;
    }
}
class Series extends Pelicula{
    reproducir(){
        return `Reproduciendo capitolo:${this.nombre}`;
    }
}
const peliculauno=new Pelicula(1,'Harry El Sucio Potter');
console.log(peliculauno.reproducir());
const peliculados=new Pelicula(2,'Nose');
console.log(peliculados.reproducir());
const peliculatres=new Pelicula(3,'Algo');
console.log(peliculatres.reproducir());
const SerieUno=new Series(3,'alguna serie');
console.log(SerieUno.reproducir());