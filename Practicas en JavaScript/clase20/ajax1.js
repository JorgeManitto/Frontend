//console.log('activo');


document.querySelector('#boton').addEventListener('click',traerdatos);

function traerdatos() {
//console.log('funcion activada');
const xhttp= new XMLHttpRequest();

xhttp.open('GET','texto.txt',true);

xhttp.send();

xhttp.onreadystatechange= function (){

    if(this.readyState==4 && this.status==200){
        //console.log(this.responseText);
        document.querySelector('#respuesta').innerHTML=this.responseText;
    }

}

}

document.querySelector('#boton2').addEventListener('click',sacardatos);

function sacardatos(){
    document.querySelector('#respuesta').innerHTML='';
}
