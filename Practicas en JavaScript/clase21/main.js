const btnbotones= document.querySelector('#btnbotones');
const botones=document.querySelector('#botones');
const fondo=document.querySelector('#fondo');

(()=>{
btnbotones.addEventListener('click',agregarbotones);
botones.addEventListener('click',delegacion);
})();

function delegacion(e){
    e.preventDefault();
   const colorboton=e.target.classList[1];
   switch(colorboton){
         case ('btn-primary'):
        fondo.className='bg-primary';
        break;
        case ('btn-success'):
            fondo.className='bg-success';
        break;   
        case ('btn-warning'):
        fondo.className='bg-warning';
        break;
        case ('btn-danger'):
        fondo.className='bg-danger';
        break;
        case ('btn-secondary'):
        fondo.className='bg-secondary';
        break; 
        case ('btn-info'):
        fondo.className='bg-info';
        break; 
        case ('btn-light'):
        fondo.className='bg-light';
        break;  
         
   }
}
function agregarbotones(e){
e.preventDefault();
    //console.log('diste click capo');
    botones.innerHTML= `<button class="btn btn-primary">Primary</button>
    <button class="btn btn-secondary">Secondary</button>
    <button class="btn btn-warning">Warning</button>
    <button class="btn btn-success">Success</button>
    <button class="btn btn-danger">Danger</button>
    <button class="btn btn-info">Info</button>
    <button class="btn btn-light">Light</button>
    `
}
