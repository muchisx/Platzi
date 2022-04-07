// alert("Works!")

var d = document.getElementById("dibujo");
var lienzo = d.getContext("2d")
var d_width = d.width

/* Better method for multiple lines below 

lienzo.beginPath();
lienzo.strokeStyle = "yellow";
lienzo.moveTo(100,100);
lienzo.lineTo(200,200);
lienzo.stroke();
lienzo.closePath();

lienzo.beginPath();
lienzo.strokeStyle = "red";
lienzo.moveTo(30,10);
lienzo.lineTo(22,0);
lienzo.stroke();
lienzo.closePath();

*/

// Making a function

function dibujarLinea(color, xinicial, yinicial, xfinal, yfinal)
{
lienzo.beginPath();
lienzo.strokeStyle = color;
lienzo.moveTo(xinicial,yinicial);
lienzo.lineTo(xfinal,yfinal);
lienzo.stroke();
lienzo.closePath();
}


// Using the function

// dibujarLinea("grey", 200, 0, 300, 20);


// How to create cycles

var lineas;
var l;
var yi, xf;

/* Below method is apparently more common

while (l < lineas)
{
    yi = 10 * l;
    xf = 10 * (l+1);
    dibujarLinea("white", 0, yi, xf, 300);
    console.log("Linea " + l);
    l = l + 1;
}

**/

/* Common method for cycles

for (l = 0; l < lineas; l++)
{
    xi = 10 * l;
    yf = 10 * (l+1);
    dibujarLinea("white", xi, 0, 300, yf);
    console.log("Linea " + l); 
}

*/

/*
for (l = 0; l < lineas; l++)
{
    yi = 10 * l;
    xf = 10 * (l+1);
    dibujarLinea("white", 0, yi, xf, 300);
    console.log("Linea " + l);
}
*/

// Creating an input for the user to decide number of lines

var texto = document.getElementById("texto_lineas");
var boton = document.getElementById("boton_lineas");

boton.addEventListener("click", dibujoPorClick);

function dibujoPorClick()
{
    lienzo.clearRect(0, 0, d.width, d.height);    

    var espacio = d_width / parseInt(texto.value)
    var lineas = texto.value;

    for (l = 0; l < lineas; l++)
    {
        xi = espacio * l;
        yf = espacio * (l+1);
        dibujarLinea("white", xi, 0, d_width, yf);
        console.log("Linea " + l); 
    }
}




console.log(lienzo)


