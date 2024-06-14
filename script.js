let containerStart = document.querySelector('.container-start')
let containerWork = document.querySelector('.container-work')
let containerSkills = document.querySelector('.container-skills')
let containerAbout = document.querySelector('.container-about')

let inicio = document.getElementById('inicio')
let trabalhos = document.getElementById('trabalhos')
let habilidades = document.getElementById('habilidades')
let sobre = document.getElementById('sobre')
let resumo = document.getElementById('resumo')

inicio.addEventListener('click', ()=>{
    containerStart.style.display = 'flex'
    
    containerStart.classList.add('show')
    containerStart.classList.add('fadeIn')

    containerWork.style.display = 'none'
    containerSkills.style.display = 'none'
    containerAbout.style.display = 'none'
    
    inicio.style.color = '#ffffff'
    trabalhos.style.color = '#a3aebe'
    habilidades.style.color = '#a3aebe'
    sobre.style.color = '#a3aebe'
})

window.addEventListener('load', function() {
    const container = document.querySelector('.container-start');
    container.classList.add('show');
});

trabalhos.addEventListener('click', ()=>{
    containerStart.style.display = 'none'
    containerWork.classList.add('fadeIn')
    containerWork.style.display = 'flex'
    containerSkills.style.display = 'none'
    containerAbout.style.display = 'none'

    inicio.style.color = '#a3aebe'
    trabalhos.style.color = '#ffffff'
    habilidades.style.color = '#a3aebe'
    sobre.style.color = '#a3aebe'
})

habilidades.addEventListener('click', ()=>{
    containerStart.style.display = 'none'
    containerWork.style.display = 'none'
    containerSkills.classList.add('fadeIn')
    containerSkills.style.display = 'flex'
    containerAbout.style.display = 'none'

    inicio.style.color = '#a3aebe'
    trabalhos.style.color = '#a3aebe'
    habilidades.style.color = '#ffffff'
    sobre.style.color = '#a3aebe'
})

sobre.addEventListener('click', ()=>{
    containerStart.style.display = 'none'
    containerWork.style.display = 'none'
    containerSkills.style.display = 'none'
    containerAbout.classList.add('fadeIn')
    containerAbout.style.display = 'block'

    inicio.style.color = '#a3aebe'
    trabalhos.style.color = '#a3aebe'
    habilidades.style.color = '#a3aebe'
    sobre.style.color = '#ffffff'
})

let menuMobile = document.querySelector('.menu-mobile')
let btnMenu = document.getElementById('btnMenu')
btnMenu.addEventListener('change', function() {
    if (this.checked) {
        menuMobile.style.left = '0px'
    } else {
        menuMobile.style.left = '-200px'
    }
})

let inicioMobile = document.getElementById('inicio-mobile')
let trabalhosMobile = document.getElementById('trabalhos-mobile')
let habilidadesMobile = document.getElementById('habilidades-mobile')
let sobreMobile = document.getElementById('sobre-mobile')

inicioMobile.addEventListener('click', () => {
    btnMenu.checked = false
    menuMobile.style.left = '-200px'
    containerStart.style.display = 'flex'
    
    containerStart.classList.add('show')
    containerStart.classList.add('fadeIn')

    containerWork.style.display = 'none'
    containerSkills.style.display = 'none'
    containerAbout.style.display = 'none'
    
    inicioMobile.style.color = '#ffffff'
    trabalhosMobile.style.color = '#a3aebe'
    habilidadesMobile.style.color = '#a3aebe'
    sobreMobile.style.color = '#a3aebe'
})

trabalhosMobile.addEventListener('click', () => {
    btnMenu.checked = false
    menuMobile.style.left = '-200px'

    containerStart.style.display = 'none'
    containerWork.classList.add('fadeIn')
    containerWork.style.display = 'flex'
    containerSkills.style.display = 'none'
    containerAbout.style.display = 'none'

    inicioMobile.style.color = '#a3aebe'
    trabalhosMobile.style.color = '#ffffff'
    habilidadesMobile.style.color = '#a3aebe'
    sobreMobile.style.color = '#a3aebe'
})

habilidadesMobile.addEventListener('click', () => {
    btnMenu.checked = false
    menuMobile.style.left = '-200px'

    containerStart.style.display = 'none'
    containerWork.style.display = 'none'
    containerSkills.classList.add('fadeIn')
    containerSkills.style.display = 'flex'
    containerAbout.style.display = 'none'

    inicioMobile.style.color = '#a3aebe'
    trabalhosMobile.style.color = '#a3aebe'
    habilidadesMobile.style.color = '#ffffff'
    sobreMobile.style.color = '#a3aebe'
})

sobreMobile.addEventListener('click', () => {
    btnMenu.checked = false
    menuMobile.style.left = '-200px'

    containerStart.style.display = 'none'
    containerWork.style.display = 'none'
    containerSkills.style.display = 'none'
    containerAbout.classList.add('fadeIn')
    containerAbout.style.display = 'block'

    inicioMobile.style.color = '#a3aebe'
    trabalhosMobile.style.color = '#a3aebe'
    habilidadesMobile.style.color = '#a3aebe'
    sobreMobile.style.color = '#ffffff'
})

resumo.addEventListener('click', () => {
    btnMenu.checked = false
    menuMobile.style.left = '-200px'

    containerStart.style.display = 'none'
    containerWork.style.display = 'none'
    containerSkills.style.display = 'none'
    containerAbout.classList.add('fadeIn')
    containerAbout.style.display = 'block'

    inicioMobile.style.color = '#a3aebe'
    trabalhosMobile.style.color = '#a3aebe'
    habilidadesMobile.style.color = '#a3aebe'
    sobreMobile.style.color = '#ffffff'

    inicio.style.color = '#a3aebe'
    trabalhos.style.color = '#a3aebe'
    habilidades.style.color = '#a3aebe'
    sobre.style.color = '#ffffff'
})