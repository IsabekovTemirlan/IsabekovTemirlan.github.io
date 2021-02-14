const burgerToggle = document.getElementById('burger')
const links = document.querySelector('.navbar__links')

if (document.body.clientWidth <= 560) {
  burgerToggle.onclick = () => links.style.display === "none" || links.style.display === "" ? links.style.display = 'initial' : links.style.display = 'none'
  links.onclick = e => links.style.display = "none"
}

