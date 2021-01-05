//console.log("funcionando");

document.querySelector("#button_dolar").addEventListener("click",function(){
    obtenerDatos('dolar');
})
document.querySelector("#button_uf").addEventListener("click",function(){
    obtenerDatos('uf')
})
document.querySelector("#button_euro").addEventListener("click",function(){
    obtenerDatos('euro');
})
function obtenerDatos(valor){
    //console.log("diste click");
    
   let url =`https://mindicador.cl/api/${valor}`;
   
   const xhttp= new XMLHttpRequest();

   xhttp.open("GET",url,true);
   xhttp.send();
   
   xhttp.onreadystatechange = function (){
    if(this.readyState == 4 && this.status==200){
        //console.log(this.responseText);
        
        let datosjson= JSON.parse(this.responseText);
        
        var resultado = document.getElementById('moneda');
        
        resultado.innerHTML=``;
        let j=0;
        for(let i of datosjson.serie){
            resultado.innerHTML+=`<li><b>FECHA</b>: ${i.fecha.substring(0,10)} <b>VALOR</b>: ${i.valor}</li>`;
            j++;

            if(j>9){
                break;
            }
        }


    }

   }

}
