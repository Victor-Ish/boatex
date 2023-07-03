const harmburger = document.querySelector('.nav__toggler')
const navMenu = document.querySelector('.nav__menu')
const navBar = document.querySelector('.nav__content')

harmburger.addEventListener('click', function(){
    harmburger.classList.toggle('show')
    navMenu.classList.toggle('show')
})

const removeMenu = document.querySelectorAll('li')
Array.from(removeMenu).forEach((item, index) =>{
item.addEventListener('click', function (){
    harmburger.classList.remove('show')
    navMenu.classList.remove('show')
})
})
