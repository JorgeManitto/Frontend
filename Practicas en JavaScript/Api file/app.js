window.onscroll = function () {scrollfunction()};

function scrollfunction(){
    if(document.body.scrollTop > 80 || document.documentElement.scroll >80){
    document.getElementById('navbar').style.position = "relative";        
    }else{
        document.getElementById('navbar').style.position = "fixed";   
        document.getElementById("navbar").style.padding = "10px 10px";
    document.getElementById("logo").style.fontSize = "35px";
    }

}


    const demo = document.getElementById('demo')
    
    fetch('https://reqres.in/api/users?page=2')
    .then(res => res.ok ? Promise.resolve(res):Promise.reject(res))
    .then(res => res.json())
    .then(res => { console.log(res.data)
        
        for(user of res.data){
            console.log(user.email)
            demo.innerHTML += `${user.first_name} ${user.last_name}<br>`
        }
    } )  
        
        /*for(const user of res){
        console.log(`${user.first_name}`)
        demo.innerHTML += `<a href="#">${user.first_name}</a>`
    }*/ 
    const newPost = {
        "name": "morpheus",
        "job": "leader",
        "saludo":"Hola"

    }

    fetch('https://reqres.in/api/users', {
        method: 'PUT',
        body: JSON.stringify(newPost),
        headers:{"Content-type":"application/json"}
      })
        .then((response) => response.json())
        .then((json) => {console.log(json)
        
            demo.innerHTML += `Nombre: ${json.name} <br> Trabajo:${json.job}`
        })
      

        const  form = document.getElementById('form');
        const first_name = document.getElementById('first_name');
        const option = document.getElementById('option');
        const change = document.getElementById('change');
        form.addEventListener('submit',(e)=>{
            e.preventDefault();


            localStorage.setItem(form.first_name.value, form.last_name.value)

            option.innerHTML += `<option>${form.first_name.value}</option> `

        })

        option.addEventListener('change',()=>{
            change.innerHTML = `${form.first_name.value}`
        })

        const btnobtener = document.getElementById('btnobtener');
        const obtenido = document.getElementById('obtenido');

        btnobtener.addEventListener('click',(e)=>{
            e.preventDefault();
            let dato = localStorage.getItem(32);
            obtenido.innerHTML =`${dato}`;
        })

        localStorage.removeItem("id");