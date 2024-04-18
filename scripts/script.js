const hamburger = document.querySelector('.hamburger')
const navline = hamburger.querySelectorAll('span')
const navbar = document.querySelector('.navbar')
const slide = document.querySelectorAll('.slide')
const productimage = document.querySelectorAll('.card-image')


hamburger.addEventListener('click',() =>{
    navline.forEach((e) =>{
        e.classList.toggle('navline');
    })
    setTimeout(() =>{navbar.classList.toggle('navbar1');},100);
    //navbar.classList.toggle('display')
})
slide.forEach((e,i) =>{
    e.style.left = `${i * 100}%`;
})

awal = 0

const sliding = () => {
    awal++
    if (awal >= slide.length) {
        awal = 0;}
    slide.forEach((el,i) => {
        el.style.transform = `translateX(-${awal * 100 }%)`
    })}
    
 const interval = setInterval(sliding,2000)    

 productimage.forEach((e) =>{
     e.addEventListener('unload',() =>{
         e.classList.add('skeleton')
     })
         
 })   
    