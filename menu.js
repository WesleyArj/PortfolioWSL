
let btnMenu = document.getElementById('btn-menu')
let menu = document.getElementById('menu-mobile')
let overlay = document.getElementById('ovelay-menu-mobile')


// abre o menu quando o botão é clicado
btnMenu.addEventListener('click', ()=>{
    menu.classList.add('open-mennu')
})
// fecha o menu quando o menu é clicado
menu.addEventListener('click', ()=>{
    menu.classList.remove('open-mennu')
})
overlay.addEventListener('click', ()=>{
    menu.classList.remove('open-mennu')
})

