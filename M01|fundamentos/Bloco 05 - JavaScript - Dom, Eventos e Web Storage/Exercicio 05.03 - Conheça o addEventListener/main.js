const firstLi = document.getElementById('first-li');
const secondLi = document.getElementById('second-li');
const thirdLi = document.getElementById('third-li');
const input = document.getElementById('input');
const myWebpage = document.getElementById('my-spotrybefy');
const container = document.getElementsByClassName ('container');
let arrayOfLi = [firstLi, secondLi, thirdLi];

// 1. Copie esse arquivo e edite apenas ele;
// 1.1. Antes de começar os exercícios, use o LiveServer para dar uma olhada em como está a página no navegador.
// 1.2. Note que uma das caixas está um pouco acima das outras. Por que isso ocorre?

// 2. Crie uma função que adicione a classe 'tech' ao elemento `li` quando for clicado.
// 2.1. Deve existir apenas um elemento com a classe 'tech'. Como você faz isso?

for(let i = 0; i < arrayOfLi.length; i += 1) {
  arrayOfLi[i].addEventListener('click', (event) => {
    for(let i = 0; i < arrayOfLi.length; i += 1) {
      arrayOfLi[i].classList.remove('tech');
    }
    event.target.classList.add('tech');

    if (arrayOfLi[i] === firstLi) {
      input.placeholder = 'Alterar a primeira tecnologia';
    } else if (arrayOfLi[i] === secondLi) {
      input.placeholder = 'Alterar a segunda tecnologia';
    } else {
      input.placeholder = 'Alterar a terceira tecnologia';
    }
  });
}

// 3. Crie uma função que, ao digitar na caixa de texto, altere o texto do elemento
// com a classe 'tech';

input.addEventListener('keypress', (event) => {
  if(event.key === 'Enter') {
    let valueOfInput = input.value;
  for(let i = 0; i < arrayOfLi.length; i += 1) {
    if (arrayOfLi[i].classList.contains('tech')) {
      arrayOfLi[i].innerHTML = "";
      arrayOfLi[i].innerText = valueOfInput;
    }
  }

  input.value = '';
  input.placeholder;
  }
});

// 4. Crie uma função que, ao clicar duas vezes em 'Meu top 3 do Spotrybefy', ele
// redirecione para alguma página;
// 4.1. Que tal redirecionar para seu portfólio?

myWebpage.addEventListener('dblclick', () => {
  window.open('https://marianagondin.github.io/','_blank');
});

// 5. Crie uma função que, ao passar o mouse sobre 'Meu top 3 do Spotrybefy', altere
// a cor do mesmo;

myWebpage.addEventListener('mouseover', () => {
  myWebpage.style.cursor = 'pointer';
  myWebpage.style.color = '#e5e5e5';
  myWebpage.style.textDecoration = 'underline';
});

myWebpage.addEventListener('mouseout', () =>{
  myWebpage.style.color = 'white';
  myWebpage.style.textDecoration = 'none';
});
