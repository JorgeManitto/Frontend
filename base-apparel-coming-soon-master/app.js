const inputMsg = document.getElementById('inputMsg')
const error = document.getElementById('error')
const email = document.getElementById('email')
const form = document.getElementById('form')
const btnerror = document.getElementById('btnerror')

form.addEventListener('submit',(e)=>{
    e.preventDefault()

    const emailval = email.value
    
   
    if(!validateEmail(emailval)){
        
        email.classList.remove("inputok");
        btnerror.classList.remove("btnok")
      
        inputMsg.style.display ="inline-block";
        error.style.display ="inline-block";
       
        email.classList.add("inputjv");
        btnerror.classList.add("btnerror")

    }else{
        btnerror.classList.remove("btnerror")
       
        btnerror.classList.add("btnok")
        email.classList.add("inputok");
        
        inputMsg.style.display ="none";
        error.style.display ="none";
        
    }
    
    
})


function validateEmail(email) {
    var re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    return re.test(String(email).toLowerCase());
  }