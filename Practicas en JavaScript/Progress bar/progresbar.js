const fileInput = document.getElementById('file')           //las mismas llamodas de siempre
const progress = document.getElementById('progress')

// fileInput.addEventListener('change',(e)=>{                   //evento 'change' cuando cambia la wea

//     const file = e.target.files[0]                           // targeteo el archivo
//     const fileReader = new FileReader()                      //nueva instancia de FileReader pa que funcione
//     fileReader.readAsDataURL(file)                           //le paso el archivo

//     fileReader.addEventListener('progress',(e)=>{            //event 'progress' e.loaded: muestra cuanto tarda en subirse, e.total muestra el peso
//         progress.style.width = Number.parseInt(e.loaded * 100/e.total )+'%'      // regla de tres para para calcular
//         // console.log(e.loaded * 100/e.total);
//         // console.log(e.total)
//     })
//     fileReader.addEventListener('loadend',()=>{              //evento Loadend muestra el final de la carga del arhivo
//         console.log('100%')
//         progress.style.width = 100 + '%'                             
//     })

// })



//con este metodo no utulizo directamente el style; sino que seteo la propiedad mediante el uso del roots
const root = document.documentElement
fileInput.addEventListener('change',(e)=>{

    const file = e.target.files[0]
    const fileReader = new FileReader()
    fileReader.readAsDataURL(file)

    fileReader.addEventListener('progress',(e)=>{
        root.style.setProperty('--bar-width',Number.parseInt(e.loaded * 100/e.total )+'%')
    })
    fileReader.addEventListener('loadend',()=>{
        root.style.setProperty('--bar-width','100%')
    })

})