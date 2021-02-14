const mainTitle = document.getElementById('mainTitle')
const greetings = ['أهلا وسهلا', 'Καλώς ορίσατε', 'ようこそ', 'Марухабаа', 'Benvenuti!', '欢迎!', 'Мерхаба', 'Willkommen!', '歓迎!', 'Bienvenue!', 'Welcom!']

let x = 0;
setInterval(() => {
  console.log(x);
  if (x <= greetings.length-1) {
    mainTitle.innerHTML = '';
    greetings[x].split('').forEach( (letter, idx) => mainTitle.insertAdjacentHTML('beforeend', `<span class="${idx%2 === 0 ? "letterIn" : "letterOut"}">${letter}</span>`));
  }
  x++;
  if (x > greetings.length - 1) {
    x = 0
  }
}, 4000)
