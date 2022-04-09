// alert("Works!");

class Billete {
    constructor(v, c) {
        this.valor = v;
        this.cantidad = c;
    }
}

var caja = [];
var dinero = 0;
var entregado = [];
var papeles = 0;
var div = 0;

caja.push(new Billete(100, 5));
caja.push(new Billete(50, 5));
caja.push(new Billete(20, 5));
caja.push(new Billete(10, 5));
caja.push(new Billete(5, 5));

var resultado = document.getElementById("resultado");
var b = document.getElementById("extraer");
b.addEventListener("click", entregarDinero);

function entregarDinero() {

    var t = document.getElementById("dinero")
    dinero = parseInt(t.value);

    for(var bi of caja){

        if(dinero > 0){
            div = Math.floor(dinero / bi.valor);
             // console.log(div);

                if (div > bi.cantidad) {
                    papeles = bi.cantidad
                }
                else {
                    papeles = div;
                  }

            entregado.push(new Billete(bi.valor, papeles));
        //  dinero = dinero - (bi.valor * papeles);
        //  The bellow "-=" substracts the value of the element after the =
            dinero -= (bi.valor * papeles);
        }
    }

    if(dinero > 0) {
        resultado.innerHTML = "Not enough money :("
    }
    else
    {
        for(var e of entregado) {
            if (e.cantidad > 0) {
             // resultado.innerHTML = resultado.innerHTML + e.cantidad + " billetes de $" + e.valor + "<br />";
             // The bellow "+=" sums the value of the element after the =
                resultado.innerHTML += e.cantidad + " billetes de $" + e.valor + "<br />";
            }
        }
    }
   
}