import  {canvas, graella, maximPalaY, palaEsquerra, palaDreta, pilota, alçadaPala} from "./pong.js";


let context = canvas.getContext("2d");

document.addEventListener("mousemove", mouseMoveHandler, false)

function mouseMoveHandler(e){
    var mouseRelativeY = e.palaEsquerra- canvas.offsetHeight;
    if (mouseRelativeY >0 && mouseRelativeY<canvas.height) {
      palaEsquerra.y = mouseRelativeY - alçadaPala/2;

    }
}

//movimiento autonomo
palaDreta.y += ((pilota.y - (palaDreta.y + palaDreta.height / 2))) * 0.09;

function collides(obj1, obj2) {
  return (
    obj1.x < obj2.x + obj2.amplada &&
    obj1.x + obj1.amplada > obj2.x &&
    obj1.y < obj2.y + obj2.alçada &&
    obj1.y + obj1.alçada > obj2.y
  );
}

function loop() {
  requestAnimationFrame(loop);
  context.clearRect(0, 0, canvas.width, canvas.height);

  if (palaEsquerra.y < graella) {
    palaEsquerra.y = graella;
  } else if (palaEsquerra.y > maximPalaY) {
    palaEsquerra.y = maximPalaY;
  }

  if (palaDreta.y < graella) {
    palaDreta.y = graella;
  } else if (palaDreta.y > maximPalaY) {
    palaDreta.y = maximPalaY;
  }

  context.fillStyle = "white";
  context.fillRect(
    palaEsquerra.x,
    palaEsquerra.y,
    palaEsquerra.amplada,
    palaEsquerra.alçada
  );
  context.fillRect(
    palaDreta.x,
    palaDreta.y,
    palaDreta.amplada,
    palaDreta.alçada
  );

  pilota.x += pilota.dx;
  pilota.y += pilota.dy;

  if (pilota.y < graella) {
    pilota.y = graella;
    pilota.dy *= -1;
  } else if (pilota.y + graella > canvas.height - graella) {
    pilota.y = canvas.height - graella * 2;
    pilota.dy *= -1;
  }

  if ((pilota.x < 0 || pilota.x > canvas.width) && !pilota.reset) {
    pilota.reset = true;

    setTimeout(() => {
      pilota.reset = false;
      pilota.x = canvas.width / 2;
      pilota.y = canvas.height / 2;
    }, 400);
  }

  if (collides(pilota, palaEsquerra)) {
    pilota.dx *= -1;

    pilota.x = palaEsquerra.x + palaEsquerra.amplada;
  } else if (collides(pilota, palaDreta)) {
    pilota.dx *= -1;

    pilota.x = palaDreta.x - pilota.amplada;
  }

  context.fillRect(pilota.x, pilota.y, pilota.amplada, pilota.alçada);

  context.fillStyle = "lightgrey";
  context.fillRect(0, 0, canvas.width, graella);
  context.fillRect(0, canvas.height - graella, canvas.width, canvas.height);

  for (let i = graella; i < canvas.height - graella; i += graella * 2) {
    context.fillRect(canvas.width / 2 - graella / 2, i, graella, graella);
  }
}

requestAnimationFrame(loop);
