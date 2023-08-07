// Variáveis da aplicação
const screen1 = document.querySelector(".screen1");
const screen2 = document.querySelector(".screen2");
const btnTry = document.querySelector("#btnTry");
const btnReset = document.querySelector("#btnReset");
let randomNumber = Math.round(Math.random() * 10);
let xAttempts = 1;

// Eventos
btnTry.addEventListener('click', handleTryClick);
btnReset.addEventListener('click', handleResetClick);
document.addEventListener('keydown', keyEnter);

// Função callback
function handleTryClick(event) {
  event.preventDefault(); // não faça o padrão

  const inputNumber = document.querySelector("#inputNumber");

  if(Number(inputNumber.value) == randomNumber) {
    toggleScreen();

    document.querySelector(".screen2 h2").innerText = `acertou em ${xAttempts} tentativas`;
  }

  if(Number(inputNumber.value) > 10 || Number(inputNumber.value) < 0) {
    alert("Número inválido, digite somente números entre 0 e 10!");
  }

  if(inputNumber.value != "") {
    xAttempts++;
  }

  inputNumber.value = "";
}

function handleResetClick() {
  toggleScreen(); 
  xAttempts = 1;
  randomNumber = Math.round(Math.random() * 10);
}

function toggleScreen() {
  screen1.classList.toggle("hide");
  screen2.classList.toggle("hide");  
}

function keyEnter(e) {
  if(e.key == 'Enter' && screen1.classList.contains('hide')) {
    handleResetClick();
  }
}