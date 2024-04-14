let bar=document.getElementById('bar');
let navbar=document.getElementById('navbar')

let close=document.getElementById('close')


if(bar)
{
    bar.addEventListener('click',()=>{
        navbar.classList.add('active');
    })
}

if(close)
{
    close.addEventListener('click',()=>{
        navbar.classList.remove('active');
    })
}










let mainimg=document.getElementById('mainimg');
let smallimg=document.getElementsByClassName('smallimgcol');

smallimg[0].addEventListener('click',()=>{
    mainimg.src = smallimg[0].src;
})

smallimg[1].addEventListener('click',()=>{
    mainimg.src = smallimg[1].src;
})
smallimg[2].addEventListener('click',()=>{
    mainimg.src = smallimg[2].src;
})
smallimg[3].addEventListener('click',()=>{
    mainimg.src = smallimg[3].src;
})
