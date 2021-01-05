const btnrojo = document.getElementById('btn-1');
const btnazul = document.getElementById('btn-2');
const btnverde = document.getElementById('btn-3');
const demo= document.getElementById('demo');


btnrojo.addEventListener('click',()=>{
    demo.style.backgroundColor="red";    
});
btnazul.addEventListener('click',()=>{
    demo.style.backgroundColor="blue";    
});
btnverde.addEventListener('click',()=>{
    demo.style.backgroundColor="green";    
});