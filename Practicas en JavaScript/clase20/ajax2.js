//console.log('funcionando');

document.querySelector('#botonselec').addEventListener('click',traerdatos);

function traerdatos(){
    //console.log('funcionando desde el click');

    const xhttp=new XMLHttpRequest;

    xhttp.open('GET','json1.json',true);

    xhttp.send();

    xhttp.onreadystatechange=function(){
        if(this.readyState==4 && this.status==200){
           // console.log(this.responseText);

            let datos= JSON.parse(this.responseText);
            //console.log(datos);
            let respuesta=document.querySelector('#respuesta');
            respuesta.innerHTML='';
            
            
            for(let item of datos){

                respuesta.innerHTML +=`
                    <tr>
                        <td class="#ffe0b2 orange lighten-4"> ${item.Titulo}</td>
                        <td class="#ffe0b2 orange lighten-4"> ${item.Artista}</td>
                    </tr>
                `
            }



        }


    }


}

document.querySelector('#botondelete').addEventListener('click',sacardatos);
function sacardatos(){
    document.querySelector('#respuesta').innerHTML='';


}