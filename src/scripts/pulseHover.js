const pulseBox = document.querySelector('.pulse')
pulseBox.insertAdjacentHTML('beforeend', `<div class="pulse__line"></div><div class="pulse__line l2"></div><div class="pulse__line l3"></div><div class="pulse__line l4"></div><div class="pulse__line"></div><div class="pulse__line"></div><div class="pulse__line"></div><div class="pulse__line l2"></div><div class="pulse__line l3"></div><div class="pulse__line l4"></div><div class="pulse__line"></div><div class="pulse__line"></div><div class="pulse__line"></div><div class="pulse__line l2"></div><div class="pulse__line l3"></div><div class="pulse__line l4"></div><div class="pulse__line"></div><div class="pulse__line"></div><div class="pulse__line"></div><div class="pulse__line l2"></div><div class="pulse__line l3"></div><div class="pulse__line l4"></div><div class="pulse__line"></div><div class="pulse__line"></div><div class="pulse__line"></div><div class="pulse__line l2"></div><div class="pulse__line l3"></div><div class="pulse__line l4"></div><div class="pulse__line"></div>
<div class="pulse__line"></div><div class="pulse__line"></div><div class="pulse__line l2"></div><div class="pulse__line l3"></div><div class="pulse__line l4"></div><div class="pulse__line"></div><div class="pulse__line"></div><div class="pulse__line"></div><div class="pulse__line l2"></div><div class="pulse__line l3"></div><div class="pulse__line l4"></div><div class="pulse__line"></div><div class="pulse__line"></div><div class="pulse__line"></div><div class="pulse__line l2"></div><div class="pulse__line l3"></div><div class="pulse__line l4"></div><div class="pulse__line"></div><div class="pulse__line"></div><div class="pulse__line"></div><div class="pulse__line l2"></div><div class="pulse__line l3"></div><div class="pulse__line l4"></div><div class="pulse__line"></div><div class="pulse__line"></div><div class="pulse__line"></div><div class="pulse__line l2"></div><div class="pulse__line l3"></div><div class="pulse__line l4"></div><div class="pulse__line"></div><div class="pulse__line"></div><div class="pulse__line"></div><div class="pulse__line l2"></div><div class="pulse__line l3"></div><div class="pulse__line l4"></div><div class="pulse__line"></div><div class="pulse__line"></div><div class="pulse__line"></div><div class="pulse__line l2"></div><div class="pulse__line l3"></div><div class="pulse__line l4"></div><div class="pulse__line"></div>`);
const lines = document.querySelectorAll('.pulse__line')
const links = document.querySelectorAll('#rout-link');

[...links].forEach((link, index) => {
  link.onmouseenter = () => {
    let start, end;
    if (index === 0) { start = 0; end = 8 }
    if (index === 1) { start = 12; end = Math.floor(link.offsetWidth / 2.3) }
    if (index === 2) { start = 33; end = 49 }
    if (index === 3) { start = 52; end = 71 }

    let opacity = 0
    let center = Math.floor((start + end) / 2)
    for (let i = start; i <= end; i++) {
      if (lines[i]) {
        if (i <= center) lines[i].style.opacity = opacity = opacity + 0.2
        if (i > center) lines[i].style.opacity = opacity = opacity - 0.2
      }
    }
  }
  link.onmouseout = e => [...lines].forEach(line => line.style.opacity = 0);
})