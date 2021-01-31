const burgerToggle = document.getElementById('burger')
const links = document.querySelector('.navbar__links')
burgerToggle.onclick = () => links.style.display === "none" || links.style.display === "" ? links.style.display = 'initial' : links.style.display = 'none'