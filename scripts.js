let resultado = document.querySelector(".visor");
let calculado = true;
let saveNumber = "";

//Comandos vindos do teclado
let inputKeyboard = addEventListener("keydown", function (event) {
  let inputTeclado = event.key;
  console.log(inputTeclado);

  if (inputTeclado === "Backspace") {
    resultado.innerHTML = resultado.innerHTML.slice(0, -1);
  }
  else if (inputTeclado === "Enter") {
    let calculo = eval(resultado.innerHTML);
    resultado.innerHTML = calculo;
    console.log(calculo);
  }
  else if (inputTeclado.length < 2) {
    if (resultado.innerHTML.length < 14) {
      resultado.innerHTML = resultado.innerHTML + event.key;
    }
  }
});

//Comando vindo do Mouse
let inputClick = addEventListener("click", function (event) {
  if (event.target.innerHTML === "Clear") {
    resultado.innerHTML = 0;
    let saveButton = document.querySelector("#save");
    saveButton.innerHTML = "Save";
    saveNumber = "";
  } else if (event.target.innerHTML === "Save") {
    saveNumber = resultado.textContent;
    let saveButton = document.querySelector("#save");
    saveButton.innerHTML = "Paste";
  } else if (event.target.innerHTML === "Paste") {
    resultado.innerHTML = resultado.innerHTML.concat(saveNumber);
  } else if (event.target.innerHTML === "Backspace") {
    resultado.innerHTML = resultado.innerHTML.slice(0, -1);
  } else if (event.target.innerHTML === "=") {
    let calculo = eval(resultado.innerHTML);
    resultado.innerHTML = calculo;
    console.log(calculo);
  } else if (event.target.innerHTML.length < 2) {
    if (resultado.innerHTML.length < 14) {
      resultado.innerHTML = resultado.innerHTML + event.target.innerHTML;
    }
  }
});