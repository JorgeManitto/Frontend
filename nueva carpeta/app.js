const demo = document.getElementById('demo')
const select = document.getElementById('select')
const input = document.getElementById('input')
const contents = document.getElementsByClassName('content') 
const modal = document.getElementById('modal')

demo.innerHTML="loading..."
//tiramos datos
const nombre = async () => {
    const name = await fetch_data().then(res => res)
    demo.innerHTML=""
    for(let i = 0;i<name.length;i++){

        let div_content  = document.createElement('DIV')
        div_content.className = "content";
       
        let div_flag     = document.createElement('IMG')
        div_flag.src     = `${name[i].flag}`;
        div_flag.className = "flag";

        let country_name = document.createElement('H4')
         country_name.textContent = `${name[i].name}`
        country_name.className ='country_name';

        let li1 = document.createElement("LI")
        li1.textContent = `Population:${name[i].population}`

        let li2 = document.createElement("LI")
        li2.textContent = `Region: ${name[i].region}`
        
        let li3 = document.createElement("LI")
        li3.textContent = ` Capital: ${name[i].capital}`

        let ul = document.createElement("UL")
        ul.appendChild(li1)
        ul.appendChild(li2)
        ul.appendChild(li3)

        let div = document.createElement("DIV")
        div.className ="data_country"
        div.appendChild(ul)

        div_content.appendChild(div_flag)
        div_content.appendChild(country_name)
        div_content.appendChild(div)

        demo.appendChild(div_content)

        if(i > 7){
            contents[i].style.display = "none";
        }
    }    
    return name
}

 nombre().then(res => res)
//busqueda por pais
input.addEventListener('keyup',async()=>{
    const name = await fetch_data().then(res => res)
    let filter = input.value.toUpperCase();
    for(let i = 0; i < name.length; i++){
        
        if(name[i].name.toUpperCase().indexOf(filter) > -1){
          
          contents[i].style.display = "block";

        if(filter == ""){
            if(i>7){
                contents[i].style.display = "none";
            }         
        }
        }
        else {
            contents[i].style.display = "none";
        }   
    }
})
//seleccion por region
select.addEventListener('change',async()=>{
    const name = await fetch_data().then(res => res)

    for(let i = 0;i<name.length;i++){
        if(name[i].region == select.value){
            contents[i].style.display = "block";
        }
        else {
            contents[i].style.display = "none";
        }
    }
})  
setTimeout(()=>{
    
    for (let i = 0; i < contents.length; i++) {
        contents[i].addEventListener('click',async(e)=>{
            let nombre = e.currentTarget.children[1].innerText
            
            const name = await fetch_data().then(res => res)

            for(let i = 0;i<name.length;i++){

                if(name[i].name == nombre){
                    modal.style.display="block";
                    modal.innerHTML = '<button onclick="btn_back()" class="btn_back">Back</button>'
                    console.log(nombre)

                    let div_content = document.createElement('DIV')
                    div_content.className = "content_modal"

                    let flag       = document.createElement('IMG') 
                    flag.src       = `${name[i].flag}`
                    flag.className = "flag_modal"

                    let country_modal      = document.createElement('h2')
                    country_modal.className ="country_modal"
                    country_modal.textContent =`${name[i].name}`

                    let nativeName         = document.createElement('DIV')
                    nativeName.textContent =  `Native Name:${name[i].nativeName}`

                    let population         = document.createElement('DIV')
                    population.textContent =  `Population:${name[i].population}`

                    let region         = document.createElement('DIV')
                    region.textContent =  `Region:${name[i].region}`

                    let subregion         = document.createElement('DIV')
                    subregion.textContent =  `Sub Region:${name[i].subregion}`

                    let capital         = document.createElement('DIV')
                    capital.textContent =  `Capital:${name[i].capital}`

                    let toplevel         = document.createElement('DIV')
                    toplevel.textContent =  `Top Level Domain:${name[i].topLevelDomain[0]}`

                    let currencies         = document.createElement('DIV')
                    currencies.textContent =  `Currencies:${name[i].currencies.map(currency => currency.code)}`

                    let languages         = document.createElement('DIV')
                    languages.textContent =  `Languages:${name[i].languages.map(languages => languages.name)}`

                    let border         = document.createElement('DIV')
                    border.textContent =  `Border Countries:${name[i].borders}`
                    
                    let div       = document.createElement('DIV')
                    div.className = 'country_data_modal'

                    div.appendChild(country_modal)
                    div.appendChild(nativeName)
                    div.appendChild(population)
                    div.appendChild(region)
                    div.appendChild(subregion)
                    div.appendChild(capital)
                    div.appendChild(toplevel)
                    div.appendChild(currencies)
                    div.appendChild(languages)
                    div.appendChild(border)

                    div_content.appendChild(flag)                    
                    div_content.appendChild(div)

                    modal.appendChild(div_content)
                }
            }
        })
    }
},2000)

    function btn_back (){
        modal.style.display="none";
        console.log('click')
    }
