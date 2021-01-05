const Btnbotones=document.querySelector('#agregar_botones');
const botones=document.querySelector("#botones");
const fondo=document.getElementById('fondo');
(()=>{

Btnbotones.addEventListener("click",agregarbotones);
botones.addEventListener("click",delegacion);
})();

(()=>{

const color = localStorage.getItem('colorfondo');
if(color===null){
    fondo.style="background:white";
}else{
    fondo.style.background=color; 
}

})();



function delegacion(e){
    e.preventDefault();
    //console.log(e.target.classList[1]);
    const colorbotones=e.target.classList[1];

    switch (colorbotones) {
        case ('blue'):
           // console.log('diste click en azul');
            
            fondo.style="background:#007bff ";
            localStorage.setItem('colorfondo',"#007bff");
            break;
        case ('red'):fondo.style="background:red";
        localStorage.setItem('colorfondo',"red");
            break;
        case ('yellow'):fondo.style="background:yellow";
        localStorage.setItem('colorfondo',"yellow");
            break;
        case ('purple'):fondo.style="background:purple";
        localStorage.setItem('colorfondo',"purple");
            break;
        case ('gray'):fondo.style="background:gray";
        localStorage.setItem('colorfondo',"gray");
            break;
        case ('green'):fondo.style="background:green";
        localStorage.setItem('colorfondo',"green");
            break;               
    
        default:
            break;
    }

}

function agregarbotones(e){
    e.preventDefault();
    //console.log("diste click en cambiar el fondo");
    botones.innerHTML=` <button id="botones" class="btn blue">Azul</button>
    <button id="botones" class="btn green">Verde</button>
    <button id="botones" class="btn red">Rojo</button>
    <button id="botones" class="btn yellow">Amarillo</button>
    <button id="botones" class="btn gray">Gris</button>
    <button id="botones" class="btn purple">Violeta</button>`;
}

//const nombre='jorge';
//localStorage.setItem('nombreusuario',nombre);
//const nombrelocalstorage=localStorage.getItem('nombreusuario');
//console.log(nombrelocalstorage);

//localStorage.removeItem('nombreusuario');