const pendingtaks = document.getElementById('pendingtask');
const finishtaks = document.getElementById('finishtask');

pendingtaks.addEventListener('dragstart',(e)=>{
    //datatransfer
    //setdata:establece la info que queremos compartir
    //getdata:establece la info que queremos obtener
    e.dataTransfer.setData('text/plain',e.target.id)
   // console.log(e.dataTransfer.getData('text'))
    
})

pendingtaks.addEventListener('drag',(e)=>{
    e.target.classList.add('active')

})

pendingtaks.addEventListener('dragend',(e)=>{
    e.target.classList.remove('active')
})

finishtaks.addEventListener('dragover',(e)=>{
    e.preventDefault()                          //OBLIGATORIO; le indica al navegador donde debe soltar el archivo
})
finishtaks.addEventListener('drop',(e)=>{
    e.preventDefault()
    const element = document.getElementById(e.dataTransfer.getData('text'))
    element.classList.remove('active')
    finishtaks.appendChild(pendingtaks.removeChild(element))
})

finishtaks.addEventListener('dragstart',(e)=>{
    e.dataTransfer.setData('text/plain',e.target.id)
    //console.log(e.dataTransfer.getData('text'))
})
finishtaks.addEventListener('drag',(e)=>{
    e.target.classList.add('active')
})
finishtaks.addEventListener('dragend',(e)=>{
    e.target.classList.remove('active')
})
pendingtaks.addEventListener('dragover',(e)=>{
    e.preventDefault()
})
pendingtaks.addEventListener('drop',(e)=>{
    e.preventDefault()
    const element = document.getElementById(e.dataTransfer.getData('text'))
    element.classList.remove('active')
    pendingtaks.appendChild(finishtaks.removeChild(element))
})