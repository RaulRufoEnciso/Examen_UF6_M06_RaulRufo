export {canvas, graella, maximPalaY, palaEsquerra, palaDreta, pilota, alçadaPala};
let canvas = document.getElementById("joc");
let graella = 15;
let alçadaPala = graella * 5;
let maximPalaY = canvas.height - graella - alçadaPala;
const paddleWidth = 10;
const paddleHeight = 100;

// var paddleSpeed = 6;
var velocitatPilota = 5;

let palaEsquerra = {
    x: graella * 2,
    y: canvas.height / 2 - alçadaPala / 2,
    height: paddleHeight,
    with:paddleWidth,
    amplada: graella,
    alçada: alçadaPala,
  };
  
  let palaDreta = {
    x: canvas.width - graella * 3,
    y: canvas.height / 2 - alçadaPala / 2,
    height: paddleHeight,
    with:paddleWidth,
    amplada: graella,
    alçada: alçadaPala,
  };
  
  let pilota = {
    x: canvas.width / 2,
    y: canvas.height / 2,
    amplada: graella,
    alçada: graella,
  
    reset: false,
  
    dx: velocitatPilota,
    dy: -velocitatPilota,
  };

  
