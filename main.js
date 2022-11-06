const menu = document.getElementsByClassName('menu')[0]

const cta_open = document.getElementsByClassName('nav__menu')[0]

const cta_close = document.getElementsByClassName('menu__close')[0]

cta_open.addEventListener('click',()=>{
    menu.style.display = 'block'
})

cta_close.addEventListener('click',()=>{
    menu.style.display = 'none'
})
