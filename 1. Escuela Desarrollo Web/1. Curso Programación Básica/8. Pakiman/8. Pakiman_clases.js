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