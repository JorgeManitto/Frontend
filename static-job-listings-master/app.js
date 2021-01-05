const demo = document.getElementById('demo');

fetch('data.json') 
 .then(res => res.ok ? Promise.resolve(res): Promise.reject(res)) 
 .then(res => res.json()) 
 .then(res => {for(const user of res){
   
    demo.innerHTML +=`
    
     <div class="content ${user.role} ${user.id} ${user.level}">
     <div class="img"><img src="${user.logo}"></div>
     <div class="app">
        ${user.company}
     </div>
     <div class="new ${user.new}">
        <div class="news">
        
        ${user.new ? "NEW!": "old"}
        
        </div>
     </div>

     <div class="featured ${user.featured}">
        <div class="Featureds">
            ${user.featured ? "featured":"ordinary"}
        </div>
     </div>   
     <div class="dev">
     ${user.position}
     </div>

     <div class="time">
        ${user.postedAt}
     </div>  

     <div class="typework">
        ${user.contract}
     </div>
     
     <div class="country">
     ${user.location}
     </div>

     <div class="features1 feat${user.role}"> 
        ${user.role}
     </div>

     <div class="features2 level${user.level}">
       ${user.level}
     </div>

     <div class="features3">
        ${user.languages[0]}
     </div>

     <div class="features4"> 
        ${user.languages[1]}
     </div>

     <div class="features5">
        ${user.languages[2]}
     </div>


     </div>
    
    `
    
}})

setTimeout(() => {

const front = document.getElementsByClassName('featFrontend');
const back = document.getElementsByClassName('featBackend');
const full = document.getElementsByClassName('featFullStack');
const senior = document.getElementsByClassName('levelSenior')
const junior = document.getElementsByClassName('levelJunior')
const midweight = document.getElementsByClassName('levelMidweight')
const content = document.getElementsByClassName("content")
             //Frontend
            for(let i=0;i<front.length;i++){
                  front[i].addEventListener('click',hello=()=>{
                     
                     const back = document.getElementsByClassName('featBackend');
                     const full = document.getElementsByClassName('featFullStack');
                     const frontend = document.getElementsByClassName("Frontend")
                     const modal = document.getElementById('modal')
                     const modalfront = document.getElementById('modalfront')
                     modal.style.display="grid";
                     modalfront.style.display="block"
                     console.log("hello")
                     let envista= true;
                     for(let j=0;j<frontend.length;j++){


                        for(let z=0;z<back.length;z++){

                        const backend = document.getElementsByClassName("Backend")   
                        backend[z].style.display="none";
                           }

                        for(let z=0;z<full.length;z++){

                              const fullstack = document.getElementsByClassName("FullStack")   
                              fullstack[z].style.display="none";
                              }                           
                     }    
                  })           
               }
            //backend  
            for(let i=0;i<back.length;i++){
               back[i].addEventListener('click',()=>{
                  const front = document.getElementsByClassName('featFrontend');
                  const full = document.getElementsByClassName('featFullStack');
                  const backend = document.getElementsByClassName("Backend")
                  const modal = document.getElementById('modal')
                  const modalback = document.getElementById('modalback')
                  modal.style.display="grid";
                  modalback.style.display="block"
                  for(let j=0;j<backend.length;j++){

                     for(let z=0;z<front.length;z++){

                     const frontend = document.getElementsByClassName("Frontend")   
                        frontend[z].style.display="none";
                        }
                     for(let z=0;z<full.length;z++){

                           const fullstack = document.getElementsByClassName("FullStack")   
                           fullstack[z].style.display="none";
                           }                
                  }
               })
            }
            //fullstatck  
            for(let i=0;i<full.length;i++){
               full[i].addEventListener('click',()=>{
                  const front = document.getElementsByClassName('featFrontend');
                  const back = document.getElementsByClassName('featBackend');
                  const fullstack = document.getElementsByClassName("FullStack")
                  const modal = document.getElementById('modal')
                  const modalfull = document.getElementById('modalfull')
                  modal.style.display="grid";
                  modalfull.style.display="block"
                  for(let j=0;j<fullstack.length;j++){
      
                     for(let z=0;z<front.length;z++){
      
                     const frontend = document.getElementsByClassName("Frontend")   
                        frontend[z].style.display="none";
                        }
         
                      for(let z=0;z<back.length;z++){
      
                           const backend = document.getElementsByClassName("Backend")   
                           backend[z].style.display="none";
                           }                
                  }      
               })        
            }
            //SEnior
            for(let i=0;i<senior.length;i++){
               senior[i].addEventListener('click',()=>{
                  const midweight = document.getElementsByClassName('levelMidweight');
                  const junior = document.getElementsByClassName('levelJunior');
                  const Senior = document.getElementsByClassName("Senior")
                  const modal = document.getElementById('modal')
                  const modalsenior = document.getElementById('modalsenior')
                  modal.style.display="grid";
                  modalsenior.style.display="block"
                  for(let j=0;j<Senior.length;j++){
   
                     for(let z=0;z<junior.length;z++){
   
                     const Junior = document.getElementsByClassName("Junior")   
                       Junior[z].style.display="none";
                        }
   
                      for(let z=0;z<midweight.length;z++){
   
                           const Midweight = document.getElementsByClassName("Midweight")   
                           Midweight[z].style.display="none";
                           }             
                  }
               })         
            }
            //junior
            for(let i=0;i<junior.length;i++){
               junior[i].addEventListener('click',()=>{
                  const midweight = document.getElementsByClassName('levelMidweight');
                  const senior = document.getElementsByClassName('levelSenior');
                  const Junior = document.getElementsByClassName("Junior")
                  for(let j=0;j<Junior.length;j++){
   
                     for(let z=0;z<senior.length;z++){
   
                     const Senior = document.getElementsByClassName("Senior")   
                       Senior[z].style.display="none";
                        }
                      for(let z=0;z<midweight.length;z++){
   
                           const Midweight = document.getElementsByClassName("Midweight")   
                           Midweight[z].style.display="none";
                           }                      
                  }    
               })        
            }
            //Midweight
            for(let i=0;i<midweight.length;i++){
               midweight[i].addEventListener('click',()=>{
                  const junior = document.getElementsByClassName('levelJunior');
                  const senior = document.getElementsByClassName('levelSenior');
                  const Midweight = document.getElementsByClassName("Midweight")
                  for(let j=0;j<Midweight.length;j++){   
   
                     for(let z=0;z<senior.length;z++){
   
                     const Senior = document.getElementsByClassName("Senior")   
                       Senior[z].style.display="none";
                        }
     
                      for(let z=0;z<junior.length;z++){
   
                           const Junior = document.getElementsByClassName("Junior")   
                           Junior[z].style.display="none";
                           }       
                  }    
               })         
            }
            //clear
            const clear = document.getElementById('clear')
            clear.addEventListener('click',(e)=>{
               e.preventDefault();
               const FullStack = document.getElementsByClassName("FullStack")
               const modal = document.getElementById('modal')
               const modalfront = document.getElementById('modalfront')
               const modalback = document.getElementById('modalback')
               const modalfull = document.getElementById('modalfull')
               const modalsenior = document.getElementById('modalsenior')
               modal.style.display="none";
               modalfront.style.display="none"
               modalback.style.display="none"
               modalfull.style.display="none"
               modalsenior.style.display="none"

               for(let j=0;j<FullStack.length;j++){
                  FullStack[j].style.display="grid";                        
               }
               const Backend = document.getElementsByClassName("Backend")
               for(let j=0;j<Backend.length;j++){
                  Backend[j].style.display="grid";                        
               }
               const Frontend = document.getElementsByClassName("Frontend")
               for(let j=0;j<Frontend.length;j++){
                  Frontend[j].style.display="grid";                        
               }
            })
            //Icon Frontend
            const iconfront = document.getElementById('iconfront')
            iconfront.addEventListener('click',()=>{
               const modal = document.getElementById('modal')
               const modalfront = document.getElementById('modalfront')
               let envista= false;
               modal.style.display="none";
               modalfront.style.display="none"
               const Frontend = document.getElementsByClassName('Frontend')
               for(let j=0;j<Frontend.length;j++){
                  Frontend[j].style.display="grid";                        
            }
            const FullStack = document.getElementsByClassName('FullStack')
               for(let j=0;j<FullStack.length;j++){
                  FullStack[j].style.display="grid";                        
            }
            const Backend = document.getElementsByClassName("Backend")
            for(let j=0;j<Backend.length;j++){
               Backend[j].style.display="grid";                        
            }

            })
            //icon backend
            const iconback = document.getElementById('iconback')
            iconback.addEventListener('click',()=>{
               const modal = document.getElementById('modal')
               const modalback= document.getElementById('modalback')
               modal.style.display="none";
               modalback.style.display="none"
               const Frontend = document.getElementsByClassName('Frontend')
               for(let j=0;j<Frontend.length;j++){
                  Frontend[j].style.display="grid";                        
            }
            const FullStack = document.getElementsByClassName('FullStack')
               for(let j=0;j<FullStack.length;j++){
                  FullStack[j].style.display="grid";                        
            }
            const Backend = document.getElementsByClassName("Backend")
            for(let j=0;j<Backend.length;j++){
               Backend[j].style.display="grid";                        
            }

            })
            //icon fullstack
            const iconfull = document.getElementById('iconfull')
            iconfull.addEventListener('click',()=>{
               const modal = document.getElementById('modal')
               const modalfull= document.getElementById('modalfull')
               modal.style.display="none";
               modalfull.style.display="none"
               const Frontend = document.getElementsByClassName('Frontend')
               for(let j=0;j<Frontend.length;j++){
                  Frontend[j].style.display="grid";                        
            }
               const FullStack = document.getElementsByClassName('FullStack')
                  for(let j=0;j<FullStack.length;j++){
                     FullStack[j].style.display="grid";                        
               }
               const Backend = document.getElementsByClassName("Backend")
               for(let j=0;j<Backend.length;j++){
                  Backend[j].style.display="grid";                        
               }
            })
           // senior
            const iconsenior = document.getElementById('iconsenior')
            iconsenior.addEventListener('click',(e)=>{
               e.preventDefault()
               const modal = document.getElementById('modal')
               const modalsenior= document.getElementById('modalsenior')
               if(!window.envista){
                  modalsenior.style.display="none"
                  hello()
               }else{
                  modal.style.display="none";
               }
               
               
               const Senior = document.getElementsByClassName('Senior')
               for(let j=0;j<Senior.length;j++){
                  Senior[j].style.display="grid";  
                  
            }
            const Junior = document.getElementsByClassName('Junior')
               for(let j=0;j<Junior.length;j++){
                  Junior[j].style.display="grid";
                                         
            }
            const Midweight = document.getElementsByClassName("Midweight")
            for(let j=0;j<Midweight.length;j++){
               Midweight[j].style.display="grid";                        
            }

            })

}, 100);


