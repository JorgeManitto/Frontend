const swichar = document.getElementById('swichar')
const conteiner = document.getElementById('conteiner')
const bardark = document.getElementById('bardark')
const box = document.querySelectorAll('.box')
const countfollow = document.querySelectorAll('.countsfollow')
const titulo = document.getElementById('titulo')
const int = document.getElementsByClassName('int')

swichar.addEventListener('change',()=>{
    if(swichar.checked == true){
    conteiner.classList.add("lighttheme")
    bardark.classList.add('bardark')
    titulo.classList.add('titulo')
    for(let i =0;i<box.length;i++){
        box[i].classList.add('boxdark')
    }
    for(let i =0;i<countfollow.length;i++){
       
        countfollow[i].classList.add('countsfollowdark')
    }
    for(let i =0;i<int.length;i++){
        int[i].classList.add('whiteletter')
    }
}
    else   {
        
        conteiner.classList.remove("lighttheme")
        bardark.classList.remove('bardark')
        titulo.classList.remove('titulo')
        for(let i =0;i<box.length;i++){
            box[i].classList.remove('boxdark')
           
        }
        for(let i =0;i<countfollow.length;i++){
       
            countfollow[i].classList.remove('countsfollowdark')
        }
        for(let i =0;i<int.length;i++){
       
            int[i].classList.remove('whiteletter')
        }
}
})

