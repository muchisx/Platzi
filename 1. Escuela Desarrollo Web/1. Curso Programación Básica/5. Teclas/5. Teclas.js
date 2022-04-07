// alert("Works!")

// ------------------------------------------------------------

const teclas = {
  UP: 38,
  DOWN: 40,
  LEFT: 37,
  RIGHT: 39,
};

console.log(teclas);

// ------------------------------------------------------------

function dibujarLinea(color, xinicial, yinicial, xfinal, yfinal, lienzo) {
  lienzo.beginPath();
  lienzo.strokeStyle = color;
  lienzo.lineWidth = 3;
  lienzo.moveTo(xinicial, yinicial);
  lienzo.lineTo(xfinal, yfinal);
  lienzo.stroke();
  lienzo.closePath();
}

// ------------------------------------------------------------

document.addEventListener("keyup", dibujarTeclado);

var cuadrito = document.getElementById("area_de_dibujo");
var papel = cuadrito.getContext("2d");
var x = 150;
var y = 150;

// dibujarLinea("red", 100, 100, 200, 200, papel)

// ------------------------------------------------------------

function dibujarTeclado(evento) {
  var colorcito = "blue";
  var movimiento = 10;

  /* This is all replacable by using --switch--

    if (evento.keyCode == teclas.UP) {
        console.log("Key pressed")
        console.log(evento)
    }

    if (evento.keyCode == teclas.DOWN) {
        console.log("Key pressed")
        console.log(evento)
    }

    if (evento.keyCode == teclas.LEFT) {
        console.log("Key pressed")
        console.log(evento)
    }

    if (evento.keyCode == teclas.RIGHT) {
        console.log("Key pressed")
        console.log(evento)
    }

    */

  // ------------------------------------------------------------

  switch (evento.keyCode) {
    case teclas.UP:
      console.log("UP pressed");
      dibujarLinea(colorcito, x, y, x, y - movimiento, papel);
      y = y - movimiento;
      break;

    case teclas.DOWN:
      console.log("DOWN pressed");
      dibujarLinea(colorcito, x, y, x, y + movimiento, papel);
      y = y + movimiento;
      break;

    case teclas.LEFT:
      console.log("LEFT pressed");
      dibujarLinea(colorcito, x, y, x - movimiento, y, papel);
      x = x - movimiento;
      break;

    case teclas.RIGHT:
      console.log("RIGHT pressed");
      dibujarLinea(colorcito, x, y, x + movimiento, y, papel);
      x = x + movimiento;
      break;

    default:
      console.log("OTHER pressed");
      break;
  }
}

// ------------------------------------------------------------

var under_area_mouse = document.getElementById("area_de_dibujo_mouse");
var area_mouse = under_area_mouse.getContext("2d");

var xi_mouse = 150;
var yi_mouse = 150;
var mouse_action;

under_area_mouse.addEventListener("mousedown", function () {
  mouse_action = true;
  under_area_mouse.addEventListener("mousemove", dibujarMouse);
});

under_area_mouse.addEventListener("mouseup", function () {
  mouse_action = false;
  under_area_mouse.removeEventListener("mousemove", dibujarMouse);
});

function dibujarMouse(e) {
  if (mouse_action) {
    var colorcito = "yellow";
    var xi_mouse = e.offsetX;
    var yi_mouse = e.offsetY;
    var xf_mouse = xi_mouse + 1;
    var yf_mouse = yi_mouse + 1;

    dibujarLinea(
      colorcito,
      xi_mouse,
      yi_mouse,
      xf_mouse,
      yf_mouse /*+ movimiento*/,
      area_mouse
    );
  }
  // console.log(e);
}

// console.log(dibujarMouse)

function printMousePos(event) {
  under_area_mouse.textContent =
    "clientX: " + event.clientX + " - clientY: " + event.clientY;
}

under_area_mouse.addEventListener("click", printMousePos);

function resetCanvas(canvasID) {
  const canvas = document.getElementById(canvasID);
  canvas.getContext("2d").clearRect(0, 0, canvas.width, canvas.height);
  if (canvasID == "area_de_dibujo") {
    x = 150;
    y = 150;
  }
  // area_mouse.clearRect(0, 0, under_area_mouse.width, under_area_mouse.height);
  console.log(canvasID);
}
