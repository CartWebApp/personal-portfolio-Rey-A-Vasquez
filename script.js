const closeNav = document.getElementById(`closeNav`);
const openNavs = document.querySelectorAll(`.openNav`);
const navLinks = document.querySelectorAll(`nav a`);

closeNav.addEventListener("click", ()=>{
    document.getElementById(`navOverlay`).classList.add(`notActive`);
    document.documentElement.classList.remove(`noScroll`)
})

openNavs.forEach( nav =>{
    nav.addEventListener(`click`, ()=>{
        document.getElementById(`navOverlay`).classList.remove(`notActive`);
        document.documentElement.classList.add(`noScroll`);
    })
})

navLinks.forEach(link =>{
    link.addEventListener(`click`, ()=>{
        document.getElementById(`navOverlay`).classList.add(`notActive`);
        document.documentElement.classList.remove(`noScroll`)
    })
})