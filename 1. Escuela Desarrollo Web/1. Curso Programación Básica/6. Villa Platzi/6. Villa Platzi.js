// alert("Works!")

// ------------------------------------------------------------


// Trigerring the Function once

// var z = aleatorio(10,20);
// document.write(z);

// Trigerring the Function in cycles

/* Creating Random Values
var z;

for (i = 0; i < 10; i++) {
  z = aleatorio(10, 20);
  document.write(z + ", ");
}

*/

// ------------------------------------------------------------

function aleatorio(min, max) {
  var resultado;
  resultado = Math.floor(Math.random() * (max - min + 1)) + min;
  return resultado;
}

var vp = document.getElementById("villaplatzi");
var papel = vp.getContext("2d");

// ------------------------------------------------------------

// var mapa = "tile.png";

// ------------------------------------------------------------

// Variables with a default false loaded state for each image file

var fondo = {
    URL: "tile.png",
    cargaOK: false
}

var vaca = {
    URL: "vaca.png",
    cargaOK: false
}

var cerdo = {
    URL: "cerdo.png",
    cargaOK: false
}

var pollo = {
    URL: "pollo.png",
    cargaOK: false
}

var chaerim = {
    URL: "chaerim.png",
    cargaOK: false
}

// ------------------------------------------------------------

fondo.Image = new Image();
fondo.Image.src = fondo.URL;
fondo.Image.addEventListener("load", cargarFondo);

vaca.Image = new Image();
vaca.Image.src = vaca.URL;
vaca.Image.addEventListener("load", cargarVacas);

cerdo.Image = new Image();
cerdo.Image.src = cerdo.URL;
cerdo.Image.addEventListener("load", cargarCerdos);

pollo.Image = new Image();
pollo.Image.src = pollo.URL;
pollo.Image.addEventListener("load", cargarPollos);

chaerim.Image = new Image();
chaerim.Image.src = chaerim.URL;
chaerim.Image.addEventListener("load", cargarChaerim);

// ------------------------------------------------------------

function cargarFondo() {
    fondo.cargaOK = true
    // dibujarFondo(); -----Not needed when compacting the function
    dibujar();
}

function cargarVacas() {
    vaca.cargaOK = true
    // dibujarVacas(); -----Not needed when compacting the function
    dibujar();
}

function cargarCerdos() {
    cerdo.cargaOK = true
    // dibujarCerdos(); -----Not needed when compacting the function
    dibujar();
}

function cargarPollos() {
    pollo.cargaOK = true
    // dibujarPollos(); -----Not needed when compacting the function
    dibujar();
}

function cargarChaerim() {
    chaerim.cargaOK = true
    // dibujarPollos(); -----Not needed when compacting the function
    dibujar();
}


// ------------------------------------------------------------

/* Assigning a specific x,y coords to the animals in the canvas.

function dibujar() {
    if (fondo.cargaOK = true) {
        papel.drawImage(fondo.Image, 0, 0);
    }

    if (fondo.cargaOK = true && vaca.cargaOK == true) {
        papel.drawImage(vaca.Image, 120, 200);
    }

    if (fondo.cargaOK = true && cerdo.cargaOK == true) {
        papel.drawImage(cerdo.Image, 80, 20);
    }

    if (fondo.cargaOK = true && pollo.cargaOK == true) {
        papel.drawImage(pollo.Image, 200, 360);
    }
}

// ------------------------------------------------------------

/*  All the bellow functions fit in one single function above

function dibujarVacas() {
    if (fondo.cargaOK = true && vaca.cargaOK == true) {
        papel.drawImage(vaca.Image, 120, 200);
    }
}

function dibujarCerdos() {
    if (fondo.cargaOK = true && cerdo.cargaOK == true) {
        papel.drawImage(cerdo.Image, 80, 20);
    }
}

function dibujarPollos() {
    if (fondo.cargaOK = true && pollo.cargaOK == true) {
        papel.drawImage(pollo.Image, 200, 360);
    }
}

*/

// ------------------------------------------------------------

// Bellow is a method to give random x,y coords for animals on reload
// and adding more animal counts with for cycles
 
var amountv;
var positionvx;
var positionvy;

var amountc;
var positioncx;
var positioncy;

var amountp;
var positionpx;
var positionpy;

function dibujar() {
    if (fondo.cargaOK == true) {
        papel.drawImage(fondo.Image, 0, 0);
    }

    if (fondo.cargaOK == true && vaca.cargaOK == true) {
        amountv = aleatorio(1,5);
        positionvx = Array(amountv);
        positionvy = Array(amountv);

        for (amount = 0;  amount < amountv; amount++) {
            xv = aleatorio(0,420);
            yv = aleatorio(0,420);
            papel.drawImage(vaca.Image, xv, yv);
            positionvx[amount] = xv;
            positionvy[amount] = yv;
        }
        
       console.log(amountv + " Cows");
       console.log(positionvx + " Cows x coords");
       console.log(positionvy + " Cows y coords");
    }

    if (fondo.cargaOK == true && cerdo.cargaOK == true) {
        amountc = aleatorio(1,5);
        positioncx = Array(amountc);
        positioncy = Array(amountc);

        for (amount = 0;  amount < amountc; amount++) {
            xc = aleatorio(0,420);
            yc = aleatorio(0,420);
            papel.drawImage(cerdo.Image, xc, yc);
            positioncx[amount] = xc;
            positioncy[amount] = yc;
        }
    }

    if (fondo.cargaOK == true && pollo.cargaOK == true) {
        amountp = aleatorio(1,5);
        positionpx = Array(amountp);
        positionpy = Array(amountp);

        for (amount = 0;  amount < amountp; amount++) {
            xp = aleatorio(0,420);
            yp = aleatorio(0,420);
            papel.drawImage(pollo.Image, xp, yp);
            positionpx[amount] = xp;
            positionpy[amount] = yp;
        }
    }

    if (fondo.cargaOK == true && chaerim.cargaOK == true) {
        xch = aleatorio(0,420);
        ych = aleatorio(0,420);
        papel.drawImage(chaerim.Image, xch, ych); 
    }
}

// ------------------------------------------------------------

function resetAnimals() {
    papel.clearRect(0, 0, vp.width, vp.height);
    dibujar();
}

// ------------------------------------------------------------

const teclas = {
    UP: 38,
    DOWN: 40,
    LEFT: 37,
    RIGHT: 39,
};

// ------------------------------------------------------------

function moveChaerim(image,x,y) {
    papel.drawImage(image,x,y); 
}


document.addEventListener("keyup", moveChaerimKeys);

function redrawAnimals() {
    for (amount = 0;  amount < amountv; amount++) {
        xv = positionvx[amount]
        yv = positionvy[amount]
        papel.drawImage(vaca.Image, xv, yv);
    }
    for (amount = 0;  amount < amountc; amount++) {
        xc = positioncx[amount]
        yc = positioncy[amount]
        papel.drawImage(cerdo.Image, xc, yc);
    }

    for (amount = 0;  amount < amountp; amount++) {
        xp = positionpx[amount]
        yp = positionpy[amount]
        papel.drawImage(pollo.Image, xp, yp);
    } 
}

function moveChaerimKeys(evento) {

    var movimiento = 20;
    
    switch (evento.keyCode) {

    case teclas.UP:
    papel.clearRect(0, 0, vp.width, vp.height);
    papel.drawImage(fondo.Image, 0, 0);
    redrawAnimals();
  
    moveChaerim(chaerim.Image, xch, ych - movimiento);
    ych = ych-movimiento;
    console.log(evento);
    break;

    case teclas.DOWN:
    papel.clearRect(0, 0, vp.width, vp.height);
    papel.drawImage(fondo.Image, 0, 0);
    redrawAnimals();


    moveChaerim(chaerim.Image, xch, ych + movimiento);
    ych = ych + movimiento;
    console.log(evento); 
    break;

    case teclas.LEFT:
    papel.clearRect(0, 0, vp.width, vp.height);
    papel.drawImage(fondo.Image, 0, 0);
    redrawAnimals();


    moveChaerim(chaerim.Image, xch - movimiento, ych);
    xch = xch - movimiento;
    console.log(evento); 
    break;

    case teclas.RIGHT:
    papel.clearRect(0, 0, vp.width, vp.height);
    papel.drawImage(fondo.Image, 0, 0);
    redrawAnimals();


    moveChaerim(chaerim.Image, xch + movimiento, ych);
    xch = xch + movimiento;
    console.log(evento); 
    break;

    default:
    console.log("OTHER pressed");
    break;
  }
}



// var numbers = Array.from({length: 4}, () => Math.floor(Math.random() * 4));
// from({length: amountv}, () => Math.floor(Math.random() * amountv)); 