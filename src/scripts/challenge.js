const toggle = document.getElementById('challengeToggle')
const challengBlock = document.querySelector('.challenge')
let show = false

toggle.onclick = (e) => {
  e.preventDefault()
  show ? show = false : show = true
  challengBlock.style.display = show ? 'flex' : 'none'
}
