// alert("Works!")

var imagenes = [];
imagenes["Cauchin"] = "vaca.png";
imagenes["Pokacho"] = "pollo.png";
imagenes["Tocinauro"] = "cerdo.png";

console.log(imagenes);

// It's a good practice to do classes on another file.
/*

class Pakiman {
    constructor(n, t, v, a) {
        this.nombre = n;
        this.tipo = t;
        this.vida = v;
        this.ataque = a;
        this.imagen = new Image();
        this.imagen.src = imagenes[this.nombre];
    }
    hablar() {
        alert(this.nombre)
    }
    mostrar() {
        document.body.appendChild(this.imagen);
        document.write("<p>");
        document.write("<strong>" + this.nombre + "</strong> <br />");
        document.write("Tipo: " + this.tipo + "<br />");
        document.write("Vida: " + this.vida + "<br />");
        document.write("Ataque: " + this.ataque + "<br />");
        document.write("</p>" + "<hr />");
    }
}

*/

var cauchin = new Pakiman("Cauchin","Tierra",200,35);
var pokacho = new Pakiman("Pokacho","Rayo",250,30);
var tocinauro = new Pakiman("Tocinauro","Normal",300,25);

console.log(cauchin,pokacho,tocinauro);

pokacho.mostrar();
cauchin.mostrar();
tocinauro.mostrar();

var coleccion = [];
coleccion.push(cauchin);
coleccion.push(pokacho);
coleccion.push(tocinauro);

console.log(coleccion);

// for (-anyvariable- of --array--) does a cycle for a number of elements in the array

for(let i of coleccion) {
console.log(i);
}

