# **Curso de ECMAScript 6+**

## **Qué es ECMAScript**

<br>

https://www.ecma-international.org/publications/standards/Ecma-262.htm
https://programacionymas.com/blog/diferencia-entre-javascript-y-ecmascript

ECMAScript es la especificación del lenguaje JavaScript propuesto por ECMA Internacional, que es la institución encargada de los estándares, y JavaScript, es el lenguaje de programación que utiliza las especificaciones propuestas, que van siendo añadidas cada año a partir del 2015, cuando fue lanzado ES6.

Resumen: ECMA es una institución que dicta estándares o funcionalidades que deben adaptarse o añadirse a los engines de Js. Puesto que Js es un lenguaje interpretado y con muchos motores que lo interpretan/compilan, se vió la necesidad de hacer un estándar que todos esos motores siguieran, para tener consistencia en nuestros desarrollo a lo largo de todos los navegadores.

Esto nos ha permitido no solo tener funcionalidades nuevas, si no también que funcione de la misma manera en donde sea que corramos nuestro proyecto. Aunque también es importante decir, que por ser un estándar y no una empresa que está detrás del desarrollo del motor de js en sí, se suele tardar meses incluso años en ver reflejadas las nuevas características en los motores, o ver que esas características llegan primero a uno y luego a otros. Como el caso de Node.js, que incluso 5 años después de ECMAScript 2015 (ES6), aún no podemos usar ECMA import/export en él de manera normal.

Por su crecimiento:

En el 2014 JavaScript fue premiado como el lenguaje con mayor crecimiento, hoy se encuentra dentro de uno de los lenguajes más populares, solo por debajo de los ancestrales C y Java. Sin duda por sus características, se apodera cada día más de la web, algunos expertos auguran que se convertirá en el standard de la web dentro de algunos años.

Por sus mejoras en sintaxis:

Algunos programadores saben mucho más sobre frameworks de JavaScript que del propio lenguaje en sí. El mercado está lleno de ofertas laborales en las que se piden conocimientos en Angular, jQuery y Backbone, y por supuesto existen desarrolladores que aprenden directamente estos frameworks sin aprender el lenguaje debido a algunas críticas, como la forma que se trabaja una clase. Por suerte, con la nueva versión del estándar ECMAScript y sus novedades se tomará mucho más en serio a JavaScript, pues con las mejoras en la sintaxis, se eliminan todos esos puntos que alguna vez fueron objeto de crítica.

<br>

## **Default Params y Concatenación**

<br>

https://tc39.es/

## **Clases, Módulos y Generadores**

https://latteandcode.medium.com/javascript-todo-lo-que-necesitas-saber-sobre-generadores-5f2a6d42afc4

Veo un pequeño error en la parte de módulos, Óscar exportó el módulo usando un export default y lo importó como un export nombrado.

También quiero aclarar que si a algunos no les funciona tal vez sea porque es una sintaxis que no está aún soportada por las últimas versiones de Node y para ese caso tocaría usar la sintaxis antigua.

ES6
<h3>export default</h3>
Con export default podemos exportar una variable, o función por defecto de un archivo así:

function hello() {
	return 'Hello!'
}

export default hello
Para importarla no necesitamos hacerlo con su nombre, podemos usar cualquier nombre y por defecto nos traerá la única variable o función que exportó así:

import myHello from './module'

console.log(myHello())
<h3>export nombrado</h3>
A diferencia del export default en esta ocasión podemos exportar más de una variable o función que se encuentre en nuestro archivo, pero para importarlas debemos hacerlo con el nombre exacto de esa variable entre llaves.

Para exportar lo hacemos así:

export function hello() {
	return 'Hello!'
}

export const bye = 'Bye!'
Podemos importar solo lo que necesitemos así:

import { hello } from './module'

console.log(hello())
También podemos importar más de un elemento nombrando cada uno

import { hello, bye } from './module'

console.log(hello())
console.log(bye)
Podemos cambiarles los nombres

import { hello, bye as byeGreeting } from './module'

console.log(hello())
console.log(byeGreeting)
Y podemos importar todas las funciones de una sola vez

import * as allGreetings from './module'

console.log(allGreetings.hello())
console.log(allGreetings.bye)
Anterior sintaxis
Cuando no nos funcione esta sintaxis porque no la tengamos soportada podemos usar la anterior

Para exportar lo hacemos así:

function hello() {
	return 'Hello!'
}

module.exports = hello
Para importar así:

const hello = require('./module')

console.log(hello())
Con la sintaxis antigua también podemos exportar más de una variable o función pasándolas como un objeto.


ES7

https://www.campusmvp.es/recursos/post/JavaScript-ECMAScript-ES6-Existe-ES7-Aclarando-las-diferentes-versiones-del-lenguaje.aspx

El problema con el nombre “ECMAScript 7” o "ES7"
ECMAScriptLa actual versión de ECMAScript es la número 7 (aunque sea la 6ª que sale realmente). El problema es que cuando en la Web buscas información sobre ES7 o ECMAScript 7 realmente de lo que están hablando no es de esta versión.

Se suponía que para esta última versión que acaba de salir se iban a incluir muchas nuevas funcionalidades en el lenguaje. Sin embargo no dio tiempo material y se ha lanzado una actualización muy descafeinada, con solo un par de cositas. La verdadera versión “grande” con enormes cambios fue la del año pasado, ES6 o ES2015. La más reciente, ES2016, es una actualización muy floja.

Así que cuando en Internet leas algo sobre ES7 en realidad están hablando de algo que no existe todavía y que de momento no se sabe cuándo va a estar disponible. Es posible que muchas de las nuevas características estén ya en ECMAScript 2017 (que sería realmente ES8), pero puede que tarden mucho más y sea finalmente en 2019 o 2020 cuando veamos algunas de ellas. Así que mucho cuidado con lo que te digan sobre ES7: probablemente no estén hablando de lo que tú crees.

ECMAScript en los navegadores
Además cada navegador tiene su propia implementación de ECMAScript, es decir, su propio motor de JavaScript. Como todos se han creado siguiendo lo que indica ECMA, en principio son 100% compatibles, pero podemos encontrar pequeñas diferencias entre implementaciones, en especial en aquellas partes del estándar que no dejan 100% claro cómo se debe actuar. Del mismo modo, diferentes implementaciones del motor del lenguaje pueden estar más o menos optimizadas.

Estos son los principales motores de JavaScript en los navegadores y qué versión de ECMAScript implementan a día de hoy (julio de 2016):

Navegador Motor/Implementación Versión de ECMAScript
Google Chrome V8 6
Firefox SpiderMonkey 5.1 con muchas cosas de 6 y 7
Edge Chakra 5.1 con muchas cosas de 6 y 7
Safari JavaScriptCore - Webkit 5.1 con muchas cosas de 6 y 7
Internet Explorer Jscript 9.0 5.1

He incluido enlaces a las versiones Open Source de los motores (excepto el de IE, que no es de código abierto). Por cierto, V8 es el motor que está debajo también de NodeJS.

Como vemos, cada motor implementa el estándar de manera diferente y en el caso concreto de ECMAScript 6 y 7, no todos implementan todo ni de la misma manera. Dado que todos excepto IE son navegadores “Evergreen”, es decir, que se actualizan solos de manera automática, a menudo salen nuevas pequeñas actualizaciones que van añadiendo cada vez más soporte para las últimas versiones de ECMAScript. De hecho se puede afirmar que todos los navegadores modernos soportan ECMAScript 6 casi por completo, y en breve también ES7.


ES8

Es importante tener en cuenta la diferencia entre las promesas y async await. Porque se encargan de lo mismo, la asíncronia, pero de distinta manera. Por ello te dejo un recurso que te puede ayudar para entender esto. Las promesas y async await, lógicamente, no son iguales

--
Descripción desde MDN. Me ayudó a entender y reforzar lo del video.

La expresión await provoca que la ejecución de una función async sea pausada hasta que una Promise sea terminada o rechazada, y regresa a la ejecución de la función async después del término. Al regreso de la ejecución, el valor de la expresión await es la regresada por una promesa terminada.

Si la Promise es rechazada, el valor de la expresión await tendrá el valor de rechazo.

Si el valor de la expresión seguida del operador await no es una promesa, será convertido a una resolved Promise.
https://developer.mozilla.org/es/docs/Web/JavaScript/Referencia/Operadores/await


ES9

🌟 Otra de las nuevas características de ES9 en la captura de grupos es nombrar nuestros grupos para encontrarlos de una forma más fácil. El código que hace el profe Oscar al final podría resumirse en lo siguiente:

				const regexData = /(?<year>[0-9]{4})-(?<month>[0-9]{2})-(?<day>[0-9]{2})/
				constmatch = regexData.exec('2018-04-20');
				const { year, month, day } = match.groups;

				console.log(year, month, day);

Para hacer uso de esto, debemos anteponer un ?<nombre> en el grupo que queremos nombrar de nuestro RegEx. Todos los grupos nombrados los podremos acceder en un objeto que estaŕa en la llave groups del resultado de match.

--

Un pequeño aporte: finally no recibe ningún parámetro a diferencia de then y catch. Además también puede ser usado en la estructura try/catch cuando implementemos async/await.

--

Para agregar algo a la clase, una forma mucho mas limpia de trabajar con regex es hacer destructuring a los que nos regresa .exec() de esta forma

--

Si la promesa NO se resuelve .finally igualmente se dispara (siempre se ejecutará, no importa si la promesa se cumple o no)
documentación:
https://developer.mozilla.org/es/docs/Web/JavaScript/Referencia/Objetos_globales/Promise/finally


ES10


Array.prototype.flat(nivel_de_profundidad): un nuevo método que nos permite aplanar arreglos.
Array.prototype.flatMap() lo mismo que flat con el beneficio de que primero manipular la data para luego poder aplanar.
String.prototype.trimStart() | String.prototype.trimEnd() permite quitar los espacios al inicio o al final dependiendo de la funciona.
try/catch: ahora puedes utilizarlo sin necesidad de especificaro como catch(error) sino directamente usarlo en el scope del catch.
Object.fromEntries() lo inverso a Object.entries(), es decir podemos convertir un objeto en una matriz clave/valor con Object.entries(), y hace lo inverso es decir de una matriz clave/valor a un objeto con Object.fromEntries().
Symbol.prototype.description: permite regresar el descripcion opcional del Symbol
https://developer.mozilla.org/es/docs/Web/JavaScript/Reference/Global_Objects/Symbol/description
--

No sé si sea de ES10, que no creo pero como aporte es bueno hablar de trim() que limpia los espacios en blando tanto al inicio como al final de un string

--
Para profundizar más con flat() se pueden ir encadenando o si no sabemos el número de arreglos que tenemos, se puede usar Infinity.
.

const edades = [8, 10, 9, 20, [13, 18, 12, [20, 9, 25, 9]]];
console.log(edades.flat().flat());

// [8, 10, 9, 20, 13, 18, 12, 20, 9, 25, 9]

const edades = [8, 10, 9, 20, [13, 18, 12, [20, 9, 25, 9]]];
edades.flat(Infinity);

// [8, 10, 9, 20, 13, 18, 12, 20, 9, 25, 9]

-- 
Algo adicional: .flat() tambien puede recibir el valor numerico Infinity


ES11 - 2020

Genial🔥 Esto absolutamente podría aumentar el rendimiento del tiempo de carga en caso de que el módulo no sea necesario para la carga, sino solo después de que ocurra algún evento e incluso hasta un condicional.

				if (true) {
				import('./module.js').then((module) => {
					module.myFunction();
				});
				}


Dynamic import ( importación dinámica)

Permite llamar nuestro código cuando lo necesitemos.

El archivo no se va a cargar de manera automatica.

Con esto podremos dividir nuestro codigo y evitar que la app sea muy grande.

Por todo lo anterior, mejora la performance.


ES12 - 2021