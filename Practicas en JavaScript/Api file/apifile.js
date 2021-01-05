const fileInput = document.getElementById('file')
const img = document.getElementById('img')
const text = document.getElementById('text')
const images = document.getElementById('images')
// fileInput.addEventListener('change',(e)=>{
//     const file = e.target.files[0]
//     const filesReader = new FileReader()
//     filesReader.readAsText(file)
//     filesReader.addEventListener('load',(e)=>{
//         console.log(e.target.result)
//         text.textContent = e.target.result
//     })
// })
//subir una imagen
// fileInput.addEventListener('change',(e)=>{
//     const file = e.target.files[0]
//     const filesReader = new FileReader()
//     filesReader.readAsDataURL(file)
//     filesReader.addEventListener('load',(e)=>{
//         img.setAttribute('src',e.target.result)
//         text.innerHTML = `<button>Subir</button> <button>Cancelar</button>`
//     })
// })
 //subir multiple img
 fileInput.addEventListener('change', (e) => {                  //empiezo la eschucha, metodo change
    const files = e.target.files                                //targeteo el content de las imagenes
    const fragment = document.createDocumentFragment()          //creo el fragmento para al macenar las images
    for (const file of files) {                                 // bucle para la leer todas la imagenes
        const fileReader = new FileReader()                     //debo instanciar fileReader con new FileReader()
        const img = document.createElement('IMG')               
        fileReader.readAsDataURL(file)                          //paso la imagen al method para que el nav entienda la wea de la img
        fileReader.addEventListener('load', (e) => {            // cuando se carga la img se agrega un atributo 'srs'
            img.setAttribute('src', e.target.result)
        })
        fragment.appendChild(img)                               //la wea del fragment todavia no la pillo, eso pasa por no ver todos del DOM(mas o menos lo entendemos(o sea se lo que esta pasando))     
    }
    text.innerHTML = `<button>subir</button>`                   
    images.appendChild(fragment)                                //aca le paso todo lo del fragment al div del dom y muestra todas(en caso de que las halla) las img
})

// const demo = document.getElementById('demo')
// const fragment = document.createDocumentFragment()
// const text = document.createElement('H2')

// text.textContent = "titulo";

// fragment.appendChild(text)

// demo.appendChild(fragment)