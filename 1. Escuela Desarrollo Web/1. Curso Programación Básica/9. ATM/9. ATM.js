// alert("Works!");

class Billete {
    constructor(v, c, i) {
        this.valor = v;
        this.cantidad = c;
        this.imagen = i;
    }
}

var caja = [];
var dinero = 0;
var entregado = [];
var papeles = 0;
var div = 0;
var disponible = 0;

const bill_5 = new Image();
bill_5.src = "bill_5.png";
const bill_10 = new Image();
bill_10.src = "bill_10.png";
const bill_20 = new Image();
bill_20.src = "bill_20.png";
const bill_50 = new Image();
bill_50.src = "bill_50.png";
const bill_100 = new Image();
bill_100.src = "bill_100.png";



caja.push(new Billete(100, 5, bill_100));
caja.push(new Billete(50, 5, bill_50));
caja.push(new Billete(20, 5, bill_20));
caja.push(new Billete(10, 5, bill_10));
caja.push(new Billete(5, 5, bill_5));


function disponibleStart() {
    for (let dis in caja) {
        disponible = disponible + (caja[dis].cantidad * caja[dis].valor);
        
    }
}

disponibleStart();



var disponible_display = document.getElementById("disponible_display");
var resultado = document.getElementById("resultado");
var b = document.getElementById("extraer");
b.addEventListener("click", entregarDinero);

function entregarDinero() {

    var t = document.getElementById("dinero")
    dinero = parseInt(t.value);

    if (disponible >= dinero) {

        for(let bi of caja){

            if(dinero > 0){
                div = Math.floor(dinero / bi.valor);
                 // console.log(div);
    
                    if (div > bi.cantidad) {
                        papeles = bi.cantidad
                    }
                    else {
                        papeles = div;
                    }
    
                entregado.push(new Billete(bi.valor, papeles, bi.imagen));
            //  dinero = dinero - (bi.valor * papeles);
            //  The bellow "-=" substracts the value of the element after the =
                dinero -= (bi.valor * papeles);
                disponible = disponible - (bi.valor * papeles);
            }
        }       
    }


    if(dinero > 0) {
        resultado.innerHTML = "Recap of your transaction: <br />"
        for(let e of entregado) {
            if (e.cantidad > 0) {
             // resultado.innerHTML = resultado.innerHTML + e.cantidad + " billetes de $" + e.valor + "<br />";
             // The bellow "+=" sums the value of the element after the =
                resultado.innerHTML += "<image src="+ e.imagen.src +" </image>" + e.cantidad + " billetes de $" + e.valor + "<br />";
            }   
        }
        resultado.innerHTML += "We're sorry, the following amount was not withdrawn: $" + dinero
    }
    else
    {
        resultado.innerHTML = "Recap of your transaction: <br />"
        for(let e of entregado) {
            if (e.cantidad > 0) {
             // resultado.innerHTML = resultado.innerHTML + e.cantidad + " billetes de $" + e.valor + "<br />";
             // The bellow "+=" sums the value of the element after the =
                resultado.innerHTML += "<image src="+ e.imagen.src +" </image>" + e.cantidad + " billetes de $" + e.valor + "<br />";
            }
        }
    }
   disponible_display.innerHTML = "Cantidad disponible en cajero: $" + disponible 
}

disponible_display.innerHTML = "Cantidad disponible en cajero: $" + disponible 
