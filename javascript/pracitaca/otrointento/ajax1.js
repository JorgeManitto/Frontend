//console.log('funciona');

document.querySelector('#boton_ajax').addEventListener('click',traerdatos);

function   traerdatos (){

   // console.log('diste click');

    var xhttp= new XMLHttpRequest();
    xhttp.onreadystatechange= function(){
        if(this.readyState== 4 && this.status==200){
            document.getElementById("section").innerHTML=this.responseText;
        }
    };
    xhttp.open("GET","archivo.txt",true);
    xhttp.send();

}