// alert("Works!")

// Trigerring the Function once

// var z = aleatorio(10,20);
// document.write(z);

// Trigerring the Function in cycles

var z;

for (i = 0; i < 10; i++) {
  z = aleatorio(10, 20);
  document.write(z + ", ");
}

function aleatorio(min, max) {
  var resultado;
  resultado = Math.floor(Math.random() * (max - min + 1)) + min;
  return resultado;
}

var vp = document.getElementById("villaplatzi");
var papel = vp.getContext("2d");

// var mapa = "tile.png";

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

// Bellow is a method to give random x,y coords for animals on reload
// and adding more animal counts with for cycles
 

function dibujar() {
    if (fondo.cargaOK = true) {
        papel.drawImage(fondo.Image, 0, 0);
    }

    if (fondo.cargaOK = true && vaca.cargaOK == true) {
        for (amount = 0;  amount < aleatorio(1,5); amount++) {
            x = aleatorio(0,420);
            y = aleatorio(0,420);
            papel.drawImage(vaca.Image, x, y);
        }
        
    }

    if (fondo.cargaOK = true && cerdo.cargaOK == true) {
        for (amount = 0;  amount < aleatorio(1,5); amount++) {
            x = aleatorio(0,420);
            y = aleatorio(0,420);
            papel.drawImage(cerdo.Image, x, y);
        }
    }

    if (fondo.cargaOK = true && pollo.cargaOK == true) {
        for (amount = 0;  amount < aleatorio(1,5); amount++) {
            x = aleatorio(0,420);
            y = aleatorio(0,420);
            papel.drawImage(pollo.Image, x, y);
        }
    }
}