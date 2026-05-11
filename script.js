const closeNav = document.getElementById(`closeNav`);

closeNav.addEventListener("click", ()=>{
    document.getElementById(`navOverlay`).classList.add(`notActive`);
})