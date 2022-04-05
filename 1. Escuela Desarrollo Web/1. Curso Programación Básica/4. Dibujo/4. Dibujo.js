// alert("Works!")

var d = document.getElementById("dibujo");
var lienzo = d.getContext("2d")

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

var lineas = 30;
var l = 0;
var yi, xf;

/* Below method is apparently more common

while (l < lineas)
{
    yi = 10 * l;
    xf = 10 * (l+1);
    dibujarLinea("white", 0, yi, xf, 300);
    console.log("Linea " + l)
    l = l + 1;
}

**/

for (l = 0; l < lineas; l++)
{
    xi = 10 * l;
    yf = 10 * (l+1);
    dibujarLinea("white", xi, 0, 300, yf);
    console.log("Linea " + l) 
}


/*
for (l = 0; l < lineas; l++)
{
    yi = 10 * l;
    xf = 10 * (l+1);
    dibujarLinea("white", 0, yi, xf, 300);
    console.log("Linea " + l) 
}
*/



console.log(lienzo)


