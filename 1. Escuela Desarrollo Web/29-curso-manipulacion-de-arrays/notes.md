# **Manipulación de Arrays en JS**

## **Mutability**


En JS los datos asignados a una variable pueden ser de dos tipos:

Primitive type (undefined, null, boolean, number, string, symbol), Reference type (objects, arrays , functions).

Una de las diferencia entre estas dos, está en la forma como se almacenan estos datos en memoria, para ser más claro un ejemplo.

        let name = 'Javier';

        let name2 = name;

        let person = {name: 'javier'};

        let person2 = person;

Cuando creamos name js crea un espacio en memoria y guarda su valor, ahora cuando creamos name2 js continúa crea un nuevo espacio en memoria y asigna el mismo valor de la varible name de esta forma el valor de la variable name2 es totalmente independiente a name.

Ahora si creamos la variable person como un objeto que contiene un name, y si luego creamos otra variable person2 y le asignamos el mismo objeto person, aquí es donde la cosa cambia con respectos a los datos primitivos, en este caso js guardara el objeto person2 como una referencia o apuntador al objeto person, es decir que ambas variables apuntan al mismo objeto en memoria.


Ahora si entendamos Mutable o Inmutable.

Mutable: es algo que se puede cambiar o agregar.

Inmutable: es algo que no puede cambiar ni agregar.

Los valores primitivos en js son algo agregado donde solo se pueden reasignar y por lo tanto, todos estos valores son inmutables. Entendamos con un ejemplo.

        console.log(name); //javier
        console.log(name2); //javier

        name2 = 'platzi';

        console.log(name); //javier
        console.log(name2); //platzi''

Si imprimimos name y name2, ambas nos dan javier, pero si reasignamos un valor de name2 y volvemos a imprimir ocurre que solo cambia el valor de name2, lo que demuestra que js guardas estás variables de forma separada, aun cuando el valor de name2 se copio de name. Por eso los valores primitivos son inmutables.

ahora hagamos lo mismo con los objetos.

        console.log(person); //{name: 'javier'}
        console.log(person2); //{name: 'javier'}

        person2.name = 'platzi';

        console.log(person); //{name: 'platzi'}
        console.log(person2); //{name: 'platzi'}

Al inicio obtenemos las mismas propiedades, ahora cambiemos una de las valores de las propiedades y veremos que js cambio el valor tanto de person y peron2, esto debido a que person2 se creo haciendo referencia al objeto person, con reference type js crea una referencia al mismo objeto y el objeto permanece mutable.

ya que el mismo objeto es mutable se puede cambiar o se pueden agregar nuevas propiedades al mismo objeto.

En es6 se creo un operador de propagación que permirte copias un objeto de forma segura sin hacer referencia al mismo objeto y sería así.

**let person2 = {...person}**

--

Mutable es un tipo de variable que se puede cambiar. En JavaScript, solo los objetos (objects) y las matrices (arrays) son mutables, no valores primitivos.

(Puedes hacer que el nombre de una variable apunte a un nuevo valor, pero el valor anterior todavía se mantiene en la memoria. De ahí la necesidad de la recolección de basura).

Un objeto mutable es un objeto cuyo estado puede modificarse después de su creación.

Los inmutables son los objetos cuyo estado no se puede cambiar una vez creado el objeto.

Las cadenas y los números son inmutables. Entendamos esto con un ejemplo:

        var immutableString = “Hola”;

// En el código anterior, se crea un nuevo objeto con valor de cadena.

        immutableString = immutableString + “Mundo”;

// Ahora agregamos “Mundo” al valor existente.

Al agregar “immutableString” con un valor de cadena, ocurren los siguientes eventos:

Se recupera el valor existente de "immutableString"
"World" se agrega al valor existente de "immutableString"
El valor resultante luego se asigna a un nuevo bloque de memoria
El objeto "immutableString" ahora apunta al espacio de memoria recién creado
El espacio de memoria creado anteriormente ahora está disponible para la recolección de basura.

<br>

## **MAP**

¿Qué hace el .map()? TRANSFORMAR.

.map() es INMUTABLE por lo tanto no modifica el array original, sino que crea uno nuevo con la “transformación” aplicada.


Además, mantienes el mismo length que el array original, te devuelve en el nuevo array la misma cantidad que el array que le aplicaste el método.


Código de la clase:

        const products = [
                    { title: 'Burger', price: 121 },
                    { title: 'Pizza', price: 202 },
                ];
                const app = document.getElementById('app');
                const list = products.map(product => {
                    return `<li>${product.title} - ${product.price}</li>`;
                })

                app.innerHTML = list.join('');


El método join() une todos los elementos de una matriz (o un objeto similar a una matriz) en una cadena y devuelve esta cadena.

        const elements = ['Fire', 'Air', 'Water'];

        console.log(elements.join());
        // expected "Fire,Air,Water"

        console.log(elements.join(''));
        // expected  "FireAirWater"

        console.log(elements.join('-'));
        // expected "Fire-Air-Water"



--

Importante: Array.map siempre necesita que se devuelva algo en la función.
En una arrow function si no se usan paréntesis se conoce como un return implícito, en otras palabras, devuelve automáticamente el resultado de la operación Esto solo funciona con cosas sencillas.
Si necesitas usar más de una línea de código para devolver el resultado es mejor que uses { código } y return () para que no tengas problemas.

--

Diferencia práctica entre .forEach() y .map()
Por si llegan a preguntárselo, si, éstos métodos son muy parecidos, ya que ejecutan una función sobre cada elemento de un array, pero hay una diferencia fundamental: .forEach() no crea o devuelve, por defecto, un nuevo array con los elementos modificados, en cambio .map() si.

--

Mala Practica en React con map


Usar el index del map


👉Representa varios elementos en React con el array.map() . Las claves deben ser únicas para que React pueda manejar el seguimiento adecuado de ese elemento o componente. Si tuviera que utilizar el índice como clave, esa clave puede ser un duplicado en algunos casos, lo que debe evitarse.
Imagine tener una matriz de elementos a través de los cuales va a representar .map y usar el índice como claves. Además, imagine agregar al medio o eliminar un elemento del medio de la matriz. La clave terminará siendo la misma que antes, y React asumirá que es el mismo elemento / componente idéntico que antes.
😡Esto podría provocar efectos no deseados y debe evitarse.

--

Usos comunes o clásicos de map() sobre los arrays:

Limpiar datos, seleccionar datos dentro de un array y devolverlos para su utilización en futuras acciones.
Añadir un nuevo elemento, modificar agregando un nuevo dato al objeto pero sin modificar el array original.
.
Tener en cuenta que cuando trabajamos con objetos y map() y retornamos el mismo objeto estamos copiando la referencia en memoria que tiene el objeto original que le aplicamos el map() (esto lo vimos en la clase de mutable vs inmutable, te dejo una lectura: https://platzi.com/tutoriales/1642-javascript-profesional/4559-estructuras-de-datos-inmutables/). Esto provoca que como estamos modificando la referencia en memoria, el array original también sea modificado. Entonces en conclusión, por más que map() sea inmutable en este punto estamos copiando la referencia en memoria y por eso hace el cambio en el original.

// Estamos retornando el objeto
// por ende se copia la refencia en memoria

        const rta = orders.map(item => {
            item.tax = .19
            return item;
        })

Para evitarlo, y poder realizar una copia y evitar la referencia en memoria, utilizamos el spread operator de ES6 (https://developer.mozilla.org/es/docs/Web/JavaScript/Reference/Operators/Spread_syntax), donde generamos un nuevo objeto con los valores del objeto original y luego agregamos el nuevo valor que nos interesa.

        const rta = orders.map(item => {
            // retornamos un nuevo objeto 
            //pero evitamos hacer ref. en memoria
            return {
                ...item,
                tax: .19,
            }
        })

## **Filter**

Resumen
.
filter() lo que hace es filtrar el array original en base a una condición, los que la cumplan estaran en el nuevo array creado.
.
Por lo tanto filter() es inmutable y el nuevo array creado solamente puede contener:

cero coincidencias
todas coincidencias
algunas coincidencias
Pero nunca más coincidencias que el tamaño del array original.

        const words = ["spray", "limit", "elite", "exuberant"];

        // con for
        const newArray = [];
        for (let index = 0; index < words.length; index++) {
        const element = words[index];
        if (element.length >= 6) {
            newArray.push(element);
        }
        }

        // VS

        // con filter

                const rta = words.filter((element) => element.length >= 6);

        // en ambos casos, el resultado:
        > [ 'exuberant' ]
.
offtopic: el método includes() determina si una matriz incluye un determinado elemento, devuelve true o false según corresponda.

        const array1 = [1, 2, 3];

        console.log(array1.includes(2));
        // expected truee

        const pets = ['cat', 'dog', 'bat'];

        console.log(pets.includes('cat'));
        // expected true

        console.log(pets.includes('at'));
        // expected false


--


Es importante remarcar que al igual que el metodo anterior, en este metodo cuando trabajamos con objetos, el nuevo array sera un array de referencias, por lo tanto al modificar el nuevo, tambien veremos modificado el orignal.


## Reduce

Resumen
.
Este método REDUCE, efectivamente hace eso. Solo reduce a un solo valor y no devuelve otro array, simplemente un valor.
.
Se utiliza muchísimo para hacer cálculos a partir de la información de un array.
.
En su composición, a primeras, tiene como argumentos de la función del primer parámetro, al acumulador y como segundo parámetro al elemento por el que va iterando el loop. Y como segundo argumento del reduce(), se pasa el valor inicial del acumulador.

        const totals = [1,2,3,4];
        // primer argumento de la f() es el acumulador
        // segundo argumento de la f() es el elemento
        // segundo parámetro de la f() es el estado inicial del acumulador
        const rta = totals.reduce((sum, element) => sum + element, 0);
        console.log(rta)

--

Reduce
Reduce un array a un único valor (puede ser un valor primitivo como también un array u objeto).

        array.reduce(función, valor inicial)

Reduce necesita dos parámetros, el primero es la función y el segundo el valor inicial. A su vez, esta función necesita dos argumentos.

        array.reduce((acc, el) => ..., valor inicial)

El acumulador (acc) en la primera iteración toma el valor inicial, y en las siguientes toma el valor retornado.
El elemento (el) corresponde a un valor del array; arrray[0], array[1], array[2]… hasta llegar al final.
.
La nueva variable a la que asignemos el array reducido const reducido = array.reduce(...) tendrá el valor del acumulador al terminar las iteraciones.


-- 

Reduce
El método reduce() puede ser usado en cualquier array de elementos.
Cuando se llama, reduce() ejecuta una función reductora (proporcionada por ti) en cada elemento del array, resultando en un solo valor de salida, el acumulador.
_

Ejemplo de uso #1 (ES6+) - Sumar
Cuando quieres sumar todos los elementos que contiene un array.

![alt text](https://static.platzi.com/media/user_upload/reduce%20%281%29-adbad43c-cb24-45f2-9019-7e1de3909511.jpg)

La función reduce() recorrerá cada elemento del array y lo sumará al acumulador.
_

Ejemplo de uso # 2 - Para contar coincidencias
Si quieres saber cuántas veces se repite un elemento dentro de un array.
![alt text](https://static.platzi.com/media/user_upload/reduce2%20%282%29-8bee6367-8a61-4855-8fb4-4289a6aee6a6.jpg)


Para contar el número de veces que se repite un valor, nuestro valor inicial tiene que ser un objeto, de esta manera podemos retornar los pares key-value como el resultado.
reduce() en este ejemplo inicializa cada elemento encontrado con el valor 1, después, si lo encuentra de nuevo, ese valor se incrementa y el resultado se asigna al objeto key.
_

Ejemplo de uso #3 - Aplanamiento
Cuando quieres aplanar arrays del interior de un objeto.

![alt text](https://static.platzi.com/media/user_upload/reduce3%20%281%29-cca77850-e925-4d6a-8e0b-fcecc38d403b.jpg)


Los datos a menudo se anidan de maneras complicadas. Lo que hace reduce en este ejemplo es recorrer cada instancia de colors desde la matriz y hace un push de cada valor encontrado al acumulador, lo que resultará en un array aplanado que contiene todos los colores que se encuentran dentro del objeto.
_

Tips Útiles ✅
Tip #1
Si no se le pasa un valor inicial a la función reduce(), automáticamente asumirá que el primer elemento en el array es el valor inicial. Esto funcionó en el ejemplo 1, porque solo sumamos una lista de números, pero en los otros dos ejemplos si lo necesitamos porque queremos recorrer el array con un valor inicial vacío e ir agregando los valores después, para construir el resultado.
_

Tip #2
No olvidar retornar el total (el acumulador). Siempre revisar que estás retornando el valor que necesitas.
_

Tip #3
Recuerda, la función reduce() puede tomar 2 parámetros:

El callback (función para recorrer cada elemento del array)
El valor inicial (valor a usar la primera vez que se ejecute el callback)
_
Tip #4
El callback también requiere dos parámetros:

El acumulador.
El valor actual.


## **Some**


Resumen
.
Este método nos devuelve true o false sí al menos 1 elemento de nuestro array cumple con la condición.

        const array = [1, 2, 3, 4, 5];

        const even = (element) => element % 2 === 0;

        console.log(array.some(even));
        // resultado true


Al día de hoy (21/9/21), la librería de fechas date-fns esta en la versión 2.24.0 y funciona correctamente el ejercicio. Sí vienes del futuro, recuerda instalar la versión que usa el profe para evitar incompatibilidades si es que la sintaxis o algo de la misma librería ha sido modificada.

--

https://date-fns.org/v2.24.0/docs/areIntervalsOverlapping

--

 ## **Every**

 ## **Find**

 Resumen
.
El método find() devuelve el primer elemento del array que cumpla con la condición dada o no devuelve undefined si es que no encuentra ningún elemento que cumpla los requisitos pedidos.
.

        const array1 = [5, 12, 8, 130, 44];

        const found = array1.find(element => element > 10);
        console.log(found);
        // expected output: 12
En cambio el método findIndex() es una variante que te devuelve el index o posición donde esta ese primer elemento que encuentra con las características de la condición dada. De no encontrar ninguno devuelve -1 como respuesta del return del método.

        const array1 = [5, 12, 8, 130, 44];

        const isLargeNumber = (element) => element > 13;
        console.log(array1.findIndex(isLargeNumber));
        // expected output: 3


--

No olviden tener en cuenta que el método find retorna la referencia al objeto lo que lo haría mutable, por ejemplo si modificamos rta3 y le cambiamos el nombre por ejemplo, entonces el arreglo original será modificado.


## **Includes**

Resumen
.
El método includes() determina si una array incluye un determinado elemento, devuelve true o false según corresponda.

        const array1 = [1, 2, 3];

        console.log(array1.includes(2));
        // expected output: true

        const pets = ['cat', 'dog', 'bat'];

        console.log(pets.includes('cat'));
        // expected output: true

        console.log(pets.includes('at'));
        // expected output: false

También posee un segundo parámetro que es el fromIndex, que es la posición donde comenzar a buscar el valor en el array.

        [1, 2, 3].includes(2);     // true
        [1, 2, 3].includes(4);     // false
        [1, 2, 3].includes(3, 3);  // false
        [1, 2, 3].includes(3, -1); // true
        [1, 2, NaN].includes(NaN); // true

Este fromIndex sí es igual o mayor que el tamaño del array, devuelve false automaticamente sin buscar en el vector. Sí el fromIndex es negativo busca en todo el array. Y para los casos 0, -0, +0 lo toma como cero y también lee todo el array.

## **Join and Split**

El método join() une todos los elementos de un array en una cadena y devuelve esta cadena. Podemos pasarle cualquier elemento como separador que deseemos.

        const elements = ['Fire', 'Air', 'Water'];

        console.log( elements.join() );
        // expected output "Fire,Air,Water"

        console.log(elements.join(''));
        // expected output "FireAirWater"

        console.log(elements.join('-'));
        // expected output "Fire-Air-Water"

Y el método split() divide un objeto de tipo String en un array de cadenas mediante la separación de la cadena en sub-cadenas. Acá esta muy bien explicado y con muchos ejemplos: https://developer.mozilla.org/es/docs/Web/JavaScript/Reference/Global_Objects/String/split


--


Otro ejemplo muy común del método join en el ejercicio del palíndromo (Básicamente una palabra que se escribe igual de derecha a izquierda y viceversa

        const word = 'Arepera'

        const palindrome = (word) => {
        // Lo que hace dividir, voltear y luego unirlo con el join...
        return word.split('').reverse().join('').toLocaleLowerCase()

        };

        console.log(palindrome(word))

Es cool 😄

--

Para quitar la tilde, por ejemplo, dejo esta función bastante sencilla e interesante que he encontrado en stackoverflow.

        const removeAccents = (str) =>
        str.normalize('NFD').replace(/[\u0300-\u036f]/g, '');

        const title = removeAccents('Curso de Manipulación de Arrays');

        const urlFinal = title.split(' ').join('-').toLocaleLowerCase();
        console.log('urlFinal', urlFinal);


## **Concat**

Si estas trabajando con un arrays de Objs igual una forma de copiar cada elemento sin la referencia podría ser:

        const newArray = myArray.map(a => ({…a}));

--

Recordar que al ser inmutable, los arrays (tanto el nuevo como el viejo) quedaran referenciados por memoria, por lo tanto sí modificamos alguno de los dos, los cambios se verán reflejados en ambos.

        const array1 = ['a', 'b', 'c'];
        const array2 = ['d', 'e', 'f'];
        const array3 = array1.concat(array2);

        console.log(array3);
        // expected output: Array ["a", "b", "c", "d", "e", "f"]

--

La sintaxis de propagación (…) (Spread) permite que un iterable, como una expresión de matriz o una cadena, se expanda en lugares donde se esperan cero o más argumentos (para llamadas a funciones) o elementos (para literales de matriz), o que se expanda una expresión de objeto en lugares donde se esperan cero o más pares clave-valor (para objetos literales).

--

Método concat: fusiona arrays. Es inmutable (no modifica el array original).

        const elements = [1, 2, 3, 4];
        const otherElements = [5, 6, 7, 8];

        const concatMetod = elements.concat(otherElements);
        console.log('Concat:', concatMetod);


## **Flat**