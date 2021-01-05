var slideIndex= 0;

showSlide();

function showSlide(){
    var i;
    var slides = document.getElementsByClassName('imagessider');
    for(i=0;i<slides.length;i++){
        slides[i].style.display='none';     // seteo en none el display de todos los sides
        // console.log(i)
    }
    slideIndex++;                           //sumo para poder tener el index de todos los siders
    if(slideIndex > slides.length){slideIndex = 1}  // cuando se pase de tres lo seteo en 1 de vuelta
    slides[slideIndex-1].style.display="block"; // seteo el display en block(con el index)
    setTimeout(showSlide,3000);                 // cada 3 seg se vulve a llamar
}
const next = document.getElementById('right')
const prev = document.getElementById('left')
let slideIndexS=1;

next.addEventListener('click',()=>{
    plusSlides(1)
})
prev.addEventListener('click',()=>{
    plusSlides(-1)
})

function plusSlides(n){
    showSlides(slideIndexS += n)
}
function  showSlides(n){
    const content = document.getElementsByClassName('content1')
    let i;
    if(n>content.length){slideIndexS=1}
  
    if(n<1){slideIndexS=content.length}
    
    for(i = 0;i<content.length;i++){
        content[i].style.display="none"
       
    }
     content[slideIndexS-1].style.display="block";
}