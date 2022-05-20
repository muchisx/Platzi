# **Curso de JavaScript Engine (V8) y el Navegador**

## **Historia de JavaScript**

https://www.vizzuality.com/project/evolution-of-the-web/

https://www.marvel.com/captainmarvel/

http://www.homerswebpage.com/

http://www.savewalterwhite.com/

https://www.spacejam.com/1996/

https://web.archive.org/


Historia de JavaScript

¿Cómo nace este lenguaje de Programación?

En la página de evolution of the web, podrás observar en que año nacen ciertas tecnologías y en que año mueren también.

1991 - Nace HTTP como protocolo

1992 - Nace HTML1

1995 - Nace JavaScript

JavaScript nace por la necesidad de evolucionar la web por Brendan Eich, antes de eso las páginas eran muy simples y carecían de estilo.

Antes de JavaScript creo un lenguaje de programación llamado Mocha para el navegador de Netscape. Este tuvo muchas areas de oportunidad y fue evolucionando.

Llegó a un estado final llamado JavaScript, este nombre fue dado más por motivos de marketing (para popularizar el lenguaje) ya que en ese año, estaba teniendo mucho impacto el lenguaje de Java.
⠀⠀⠀

JScript

Después Microsoft en este mismo año, tomó la tecnología a la inversa para crear un lenguaje de programación para su propio navegador (Internet Explorer).

En 1997 un grupo llamado ECMA decide poner un orden a los lenguajes de estaban surgiendo, ya que tener tantos lenguajes era peligroso. Ellos estandarizaron el lenguaje de Javascript como el lenguaje único del Navegador.


V8

Es un Engine de Javascript que corre en el navegador

2009 - Nace Node.js

2010 - Nacen los primeros Frameworks

2015 - Nace ECMA Script 2015 (ES6)


--

## **¿Cómo funciona el JavaScript Engine?**

<br>

https://dev.to/lydiahallie/javascript-visualized-the-javascript-engine-4cdf


![js](https://res.cloudinary.com/practicaldev/image/fetch/s--Xs5OQmGX--/c_limit%2Cf_auto%2Cfl_progressive%2Cq_66%2Cw_880/https://thepracticaldev.s3.amazonaws.com/i/pv4y4w0doztvmp8ei0ki.gif)

![js](https://res.cloudinary.com/practicaldev/image/fetch/s--ID8wDIAy--/c_limit%2Cf_auto%2Cfl_progressive%2Cq_66%2Cw_880/https://thepracticaldev.s3.amazonaws.com/i/bic727jhzu0i8uep8v0k.gif)

![js](https://res.cloudinary.com/practicaldev/image/fetch/s--6IHw1BUH--/c_limit%2Cf_auto%2Cfl_progressive%2Cq_66%2Cw_880/https://thepracticaldev.s3.amazonaws.com/i/sgr7ih6t7zm2ek28rtg6.gif)

![js](https://res.cloudinary.com/practicaldev/image/fetch/s--HlXdsZRx--/c_limit%2Cf_auto%2Cfl_progressive%2Cq_66%2Cw_880/https://thepracticaldev.s3.amazonaws.com/i/i5f0vmcjnkhireehicyn.gif)

JavaScript Engine: Es el motor de JS, siempre corre en el navegador.
Su función es interpretar el código JavaScript y convertirlo a Machine Code para que la máquina pueda entenderlo.

Just in time compiler: Es la compilación en tiempo real que sucede en el proceso del Engine.

--

V8 es el motor que utiliza Chrome. Todo navegador tiene su motor. Les recomiendo éste artículo, es bueno 

https://www.campusmvp.es/recursos/post/fundamentos-de-javascript-por-que-deberias-saber-como-funciona-el-motor.aspx

--

El motor JS V8

https://www.youtube.com/watch?v=7GeDNQRQy0Y

Una vez que Chrome recibe el código o los scripts javascript en la página web, el motor JS V8 comienza a analizarlo. Primero, analizará parcialmente el código comprobando errores de sintaxis. Si no encuentra ninguno, comienza a leer el código de arriba a abajo. Su objetivo final es convertir el código javascript en código de máquina que la computadora pueda entender. Pero antes de comprender qué hace exactamente con el código, debemos comprender el entorno en el que se analiza.

Event Loop

Tarea asignada para mover del Tas Queue al Stack, Solo si el Stack esta vacío

Memory Heap (STACK)

Donde se almacena los valores de las variables y las funciones
Se destina un espacio en memoria para las variables.
La información en el memory heap, No se guarda de manera lineal

EL STACK

El primer contenedor en el entorno, que también forma parte del motor V8 JS Engine, se denomina 'STACK de memoria”. A medida que el motor JS V8 encuentra variables y declaraciones de funciones en el código, las almacena en el STACK .

Call Stack (Pila) FIFO FIRST IN FIRST OUT = El ultimo que entra es el primero en salir

Como se mandan a llamar las variables y las funciones
Las tareas en el callstack se apilan de abajo hacia arriba.
Se llaman de la última que mandamos a llamar hacia abajo
En la base de la pila reposa el Global Object
Si una función llama a otra, la pone encima de la pila.
Se ejecuta una tarea a la vez (sincronía)
Una vez que se van ejecutando las tareas se van retirando de la pila
Al ejecutar todas las tareas se retira el Global object.
LA PILA

El segundo contenedor en el entorno se denomina “pila de llamadas”. También es parte del motor JS V8. Cuando JS Engine encuentra un elemento procesable, como una llamada a función, lo agrega a la pila .

Task Queue (Cola) = El primer que entra es el primero en salir
Cola de tareas, se maneja la concurrencia, se agregan las tareas que ya están listas para pasar el stack (Pila). El stack debe de esta vacío

MicroTask Queue (Micro Tareas)
Las promesas tienen otra forma de ejecutarse y una prioridad superior

Web APIs
JavaScript del lado del cliente: setTimeout, XMLHttpRequest, File reader, DOM

Node: fs, https

Garbage Collection
limpia la memoria de los datos no utilizados para no sobrecargarla y seguir trabajando sin problemas.

![image](https://res.cloudinary.com/practicaldev/image/fetch/s--H7B1Ci9B--/c_limit%2Cf_auto%2Cfl_progressive%2Cq_auto%2Cw_880/https://thepracticaldev.s3.amazonaws.com/i/jms55ccv1xaua19uqba8.png)


--

## **V8, el JavaScript Engine de Chrome**

¿Qué es V8?

V8 es un motor open-source escrito en C++ para compilar JavaScript y WebAssembly en código máquina. Esto quiere decir que traduce JavasScript a un código puramente digital capaz de ser interpretado por la CPU donde se ejecuta.

Este motor fue desarrollado por Google para Google Chrome y su primera versión vio la luz en 2008 junto con la primera versión del navegador.

--

La razón del nombre “motor V8” y el logo se debe a la identificación con los motores V8 de los automóviles.
.
Un motor V8 en el automovilismo es un motor montado en el cárter con dos bancos de cuatro cilindros, que comparten cigüeñal, formando una “V”.
.
Es usado en muchas categorías de competición automovilística, especialmente en Estados Unidos, este tipo de motores incluso es ocupado en grandes competiciones de autos,

--

Tres preguntas de exmen
El motor de JavaScript V8 es lanzado en el 2008, a traves del navegador de Google Crhome, pero especialemte nacio para que la aplcacion Google Maps corriera mas rapido.
V8 ayuda a que JS corra de manera más rápida, con esto podemos crear aplicaciones más robustas y rápidas.

--

JavaScript engines

Chrome - V8
Firefox - SpiderMonkey
Edge - ChakraCore
Safari - JavaScriptCore
Opera - Caracan

Aquí pueden revisar la compatibilidad de los distintos navegadores respecto a cada motor de JavaScript

https://kangax.github.io/compat-table/es6/

--

https://en.wikipedia.org/wiki/List_of_ECMAScript_engines

## **Profundizando en el Engine**

![js](https://static.platzi.com/media/user_upload/js-engine-complete%402x-285ce1e4-709b-4842-b4e4-90ec6d940f9f.jpg)

--

Una vez el motor recibe un archivo JS genera un Global enviroment
En el Global enviroment se genera un Global object que es igual a window
También se genera una variable this
this depende del contexto, en el entorno global this es igual al objeto global
Ya despues de generado el entorno global, comienza a correr nuestro código en el contexto de ejecucion, a través de un stack de tareas apiladas
Una vez que el motor comienza a interactuar con el navegador, genera un parseo del documento completo, para encontrar las keywords y las pasa al AST (abstract syntax tree)

https://astexplorer.net/

Una vez se tiene el AST, el motor lo pasa al interpreter para retornar bytecode puede ser entendido por la máquina
Si en la interpretación del AST ve mucho código que se repite y que se puede optimizar entra el profiler o monitor, y optimiza el codigo y lo regresa compilado como bytecode para que la máquina lo pueda comprender. Es justo en este paso donde aparece el hoisting, donde el motor en su función de optimizacion reinterpreta el código de una mejor forma y se pueden presentar errores de programacón.
El hoisting solo sucede con variables y funciones que se mandan a llamar.

--

![js](https://static.platzi.com/media/user_upload/bytecode-machine-code-dc786db8-d04e-488b-b96b-e9b385fdb33d.jpg)

--

El navegador genera un entorno global -> window
hace 3 cosas

Objeto Global -> window
this -> depende del contexto o ambito
otros ambientes
Aqui pas al contexto de ejecucion (execution context)

y Lugo si corre el codigo: Lo corre a travez de un stack de tareas, las aplia una a una

JS -> parser -> AST abstrac sintax tree -> interpreter -> Bytecode (no es lengauje de maquina) pero lo entiende la maquina

Si el interpreter, se da cuenta que hay codigo que puede optimizar,

interpreter -> Profiler (monitor) -> compiler -> otimized code [aqui es donde ocurre el hoisting].
aqui es donde eventualmente se generan errores, ya que la maquina trata de optimizar o mejorar el codigo
y es donde se pueden dar errores desonocidos.
Es necesario tratar de evitar el hoisting
el hoisting ocurre con variables y funciones que se mandan llamar

--

https://medium.com/reactbrasil/como-o-javascript-funciona-dentro-da-engine-v8-5-dicas-sobre-como-escrever-c%C3%B3digo-otimizado-e05af6088fd5

--

¿Se puede entender en JavaScript Engine como el compilador de JavaScript incorporado en tu browser?

Algo así es más bien el interpretador, funcionan diferente pues no compila sino que va leyendo el JS y después ejecuta estas instrucciones, en vez de pasarlas a otro lenguaje como bytecode. 

https://stackoverflow.com/questions/8203221/compiler-vs-interpreter-on-basis-of-construction-and-design

## **Ejemplo de Objeto global y hoisting**

Una preguntica de examen
Una estricta definición de hoisting sugiere que las declaraciones de variables y funciones son físicamente movidas al comienzo del código,asignandolas en memoria dentro de un contexto de ejecucion.

--

Lo que escribes:

        console.log(nombre);
        apellido();

        var nombre = "Diego";

        function apellido(){
            console.log("De Grada");
        }

Como el motor de JavaScript lo interpreta:

        var nombre = undefined;
        function apellido(){
            console.log("De Grada");
        }

        console.log(nombre);
        apellido();
        nombre = "Diego";

Si te preguntas cuál pone más arriba, ¿Las variables o las funciones?
La respuesta es las variables. Probemos esto:

        var nombre;
        function nombre(){}

        typeof nombre; // Output: "function"
        ¿Y si ponemos primero la función y luego la variable?

        function nombre(){}
        var nombre;

        typeof nombre; // Output: "function"

Pero, si declaras una variable y le asignas un valor en la misma linea el resultado es diferente:

        var nombre = "Platzi";
        function nombre(){}

        typeof nombre; // Output: "string"

Esto es porque JavaScript hace hoisting solo de la declaración de la variable. JavaScript trata la declaración y asignación en una sola linea como dos pasos, por lo que si escribimos:

        var nombre = "Platzi";
        El motor lo interpreta así:

        var nombre = undefined;
        nombre = "Plazi";
        Así que cuando escribimos:

        var nombre = "Platzi";
        function nombre(){}

        typeof nombre; // Output: "string"
        Como lo interpreta el motor de JavaScript es así:

        var nombre = undefined;
        function nombre(){}

        nombre = "Platzi";

        typeof nombre; // Output: "string"

Es decir que “se deja atrás” la asignación.
Obviamente ningún desarrollador debería de escribir código así de confuso, esto es solo para saber como funciona JavaScript y su engine, ese conocimiento te hace un mejor desarrollador y te destaca de entre otros.

--

Hoisting

Si llamamos una variable antes de ser declarada, el compiler crea la variable en la memory heap y la inicializa como undefined
En el caso de las funciones es distinto, primero mandamos a llamar a las funciones antes de ejecutarlas.
El hoisting a veces funciona pero no tenemos control de las variables que se van a cambiar
Si llamamos a una constante (const) antes de inicializar retorna un error de tipo: Uncaught ReferenceError, que corresponde a variables que son referenciadas pero no pudieron ser capturadas

--

Cuando el motor JS obtiene nuestro script, lo primero que hace es configurar la memoria para los datos de nuestro código. No se ejecuta ningún código en este punto, simplemente está preparando todo para su ejecución. La forma en que se almacenan las declaraciones de función y las variables es diferente.
.
Las funciones se almacenan con una referencia a la función completa:

![js](https://res.cloudinary.com/practicaldev/image/fetch/s--lLfiCbTX--/c_limit%2Cf_auto%2Cfl_progressive%2Cq_66%2Cw_880/https://devtolydiahallie.s3-us-west-1.amazonaws.com/gif7.gif)

.
Con las variables es un poco diferente. ES6 introdujo dos nuevas palabras clave para declarar variables: let y const. Las variables declaradas con la palabra clave let o const se almacenan sin inicializar:

![js](https://res.cloudinary.com/practicaldev/image/fetch/s--vRtKMspn--/c_limit%2Cf_auto%2Cfl_progressive%2Cq_66%2Cw_880/https://devtolydiahallie.s3-us-west-1.amazonaws.com/gif8.gif)

.
Las variables declaradas con la palabra clave var se almacenan con el valor predeterminado de undefined:

![js](https://res.cloudinary.com/practicaldev/image/fetch/s--zvlaEaAo--/c_limit%2Cf_auto%2Cfl_progressive%2Cq_66%2Cw_880/https://devtolydiahallie.s3-us-west-1.amazonaws.com/gif9.gif)

.
Ahora que ha terminado la fase de creación, podemos ejecutar el código. Veamos qué sucede si tuviéramos 3 sentencias console.log encima del archivo, antes de declarar la función o cualquiera de las variables.

Dado que las funciones se almacenan con una referencia a todo el código de la función, podemos invocarlas incluso antes de la línea en la que las creamos:

![js](https://res.cloudinary.com/practicaldev/image/fetch/s--nk1taOke--/c_limit%2Cf_auto%2Cfl_progressive%2Cq_66%2Cw_880/https://devtolydiahallie.s3-us-west-1.amazonaws.com/gif16.gif)

.
Cuando hacemos referencia a una variable declarada con la palabra clave var antes de su declaración, simplemente devolverá su valor predeterminado con el que se almacenó “undefined”. Sin embargo, esto a veces puede provocar un comportamiento “inesperado”. En la mayoría de los casos, esto significa que le estás haciendo referencia sin querer (probablemente no quieras que tenga el valor de undefined):


![js](https://res.cloudinary.com/practicaldev/image/fetch/s--2nai6XPr--/c_limit%2Cf_auto%2Cfl_progressive%2Cq_66%2Cw_880/https://devtolydiahallie.s3-us-west-1.amazonaws.com/gif17.gif)

.
Para evitar poder hacer referencia accidentalmente a una variable undefined, como podríamos hacer con la palabra clave var, se lanzará un ReferenceError cada vez que intentamos acceder a variables no inicializadas.
La “zona” antes de su declaración real se denomina “zona muerta temporal”. No puede hacer referencia a las variables (¡esto también incluye las clases ES6!) antes de su inicialización:

![js](https://res.cloudinary.com/practicaldev/image/fetch/s--VVPlWhGC--/c_limit%2Cf_auto%2Cfl_progressive%2Cq_66%2Cw_880/https://devtolydiahallie.s3-us-west-1.amazonaws.com/gif18.gif)

.
Cuando el motor pasa la línea en la que realmente declaramos las variables, los valores en la memoria se sobrescriben con los valores con los que realmente los declaramos (hay un pequeño error en la animación, debiera ser la número 7 y no la 6):

![js](https://res.cloudinary.com/practicaldev/image/fetch/s--LGEaCMkS--/c_limit%2Cf_auto%2Cfl_progressive%2Cq_66%2Cw_880/https://devtolydiahallie.s3-us-west-1.amazonaws.com/gif12.gif)

.
Resumen rápido:

– Las funciones y variables se almacenan en la memoria para un contexto de ejecución antes de ejecutar nuestro código. A esto se le llama Hoisting .
– Las funciones se almacenan con una referencia a la función completa, las variables con la palabra clave var con el valor de undefined y las variables con la palabra clave let y const se almacenan sin inicializar.

--

https://developer.mozilla.org/es/docs/Glossary/Hoisting
.
Hoisting es un término que no encontrará utilizado en ninguna especificación previa a ECMAScript® 2015 Language Specification. El concepto de Hoisting fue pensado como una manera general de referirse a cómo funcionan los contextos de ejecución en JavaScript (específicamente las fases de creación y ejecución). Sin embargo, el concepto puede ser un poco confuso al principio.
.
Conceptualmente, por ejemplo, una estricta definición de hoisting sugiere que las declaraciones de variables y funciones son físicamente movidas al comienzo del código, pero esto no es lo que ocurre en realidad. Lo que sucede es que las declaraciones de variables y funciones son asignadas en memoria durante la fase de compilación, pero quedan exactamente en dónde las has escrito en el código.

--

Cuando comparamos window con this y da true, ese true NO lo da porque sean objetos iguales y tengan la información, ese true lo da porque ambas variables son EL MISMO objeto, es decir, ambas variables tienen la misma referencia de memoria, ambas variables están apuntando a la misma referencia en memoria de la computadora, por lo que, si cambias algo en una, también se cambiará en otra ^^