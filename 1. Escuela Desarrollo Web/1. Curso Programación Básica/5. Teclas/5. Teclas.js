// alert("Works!")

// ------------------------------------------------------------

const teclas = {
    UP: 38,
    DOWN: 40,
    LEFT: 37,
    RIGHT: 39
};

console.log(teclas)


// ------------------------------------------------------------


function dibujarLinea(color, xinicial, yinicial, xfinal, yfinal, lienzo)
{
lienzo.beginPath();
lienzo.strokeStyle = color;
lienzo.lineWidth = 3;
lienzo.moveTo(xinicial,yinicial);
lienzo.lineTo(xfinal,yfinal);
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

function dibujarTeclado(evento)
{
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

    switch (evento.keyCode)
    {
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


document.addEventListener("click", dibujarMouse);


function dibujarMouse()
{
    var colorcito = "blue";
    var movimiento = 10;

    dibujarLinea(colorcito, x, y, x, y + movimiento, area_mouse);
    y = y + movimiento; 
 
}

console.log(dibujarMouse)

function printMousePos(event) {
    document.body.textContent =
      "clientX: " + event.clientX +
      " - clientY: " + event.clientY;
  }
  
document.addEventListener("click", printMousePos);