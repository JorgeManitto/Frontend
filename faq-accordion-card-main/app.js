const btn = document.getElementsByClassName('accordion');
const ans = document.getElementsByClassName('panel')
const arrow_up= document.getElementsByClassName('arrow')

    for (let i = 0; i < btn.length; i++) {
       btn[i].addEventListener('click', function () {
           ans[i].classList.toggle('pad')
           btn[i].classList.toggle('mr')
           arrow_up[i].classList.toggle('arrow-up')
       })
       }