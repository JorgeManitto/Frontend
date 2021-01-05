    class Pelicula {
    constructor(nombre,id){
        this.nombre=nombre;
        this.id=id;
        
    }
    reproducir(){

        return `Reproduciendo pelicula: ${this.nombre}`
    }

    }

    class Serie extends Pelicula {
        constructor(nombre,id,temporada,capitulo,descripcion){

        super(nombre,id);
        this.temporada=temporada;
        this.capitulo=capitulo;
        this.descripcion=descripcion;
        }
        reproducircap(){
            return `Serie: <a href="#"> ${this.nombre}</a> <br> Temporada:<a href="#">${this.temporada}</a>
            <br> Capitulo:<a href="#">${this.capitulo}</a> <br> Descripcion:${this.descripcion}`
        }
    }

    //const peliculauno= new Pelicula('Harry Potter',1);
    //const peliculados = new Pelicula('El Hombre Araña',2);
    const serieuno=new Serie ('The Walking Dead',3,4,10,' El grupo se encuentra con numerosos obstáculos en su búsqueda de estabilidad y seguridad. ¿Acabarán perdiendo la esperanza?');

    //console.log(peliculauno.reproducir());
    //  console.log(peliculados.reproducir());
    //console.log(serieuno.reproducircap());
    
   // document.getElementById("demo").innerHTML=peliculados.reproducir();
    document.getElementById("demo").innerHTML = ' <br>'+serieuno.reproducircap();
