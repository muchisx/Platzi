# **Curso de Asincronismo con JavaScript**

**Non Blocking**

En JavaScript casi todas las operaciones de I/O (Entrada y Salida) no se bloquean. A esto se le conoce como asíncronismo. Lo único que no es procesado antes de que termine la operación son los callbacks, ya que éstos éstan amarrados a una operación y esperan a que sea finalizada para poder ejecutarse.

Para que puedan entender mejor. Vamos a poner un ejemplo de la vida real:

Imagina que te levantas una mañana a preparar tu desayuno. Primero decides tostar tu pan y luego prepararás tu avena. Si fuera una persona síncrona (Blocking) tendrías que esperar a tostar tu pan para recíen preparar tu avena. Pero si fuera una persona asíncrona (Non Blocking) luego de poner a tostar tu pan, vas preparando tu avena. La acción de que salga tu pan de la tostadora sería un callback que está esperando que finalice el proceso para ejecutarse. Pero otros procesos (como preparar tu avena) ya podrían irse realizando.

## **Introducción al asincronismo**

API

Interfaz de programación de aplicaciones (Application Programming Interface). Es un conjunto de
rutinas que provee acceso a funciones de un determinado software.

Concurrencia

Cuando dos o más tareas progresan simultáneamente.

Paralelismo

Cuando dos o más tareas se ejecutan, literalmente, a la vez, en el mismo instante de tiempo.

Bloqueante

Una llamada u operación bloqueante no devuelve el control a nuestra aplicación hasta que se ha
completado. Por tanto el thread queda bloqueado en estado de espera.

Síncrono

Es frecuente emplear ‘bloqueante’ y ‘síncrono’ como sinónimos, dando a entender que toda la
operación de entrada/salida se ejecuta de forma secuencial y, por tanto, debemos esperar a que
se complete para procesar el resultado.

Asíncrono

La finalización de la operación I/O se señaliza más tarde, mediante un mecanismo específico
como por ejemplo un callback, una promesa o un evento, lo que hace posible que la respuesta
sea procesada en diferido.

Call Stack

La pila de llamadas, se encarga de albergar las instrucciones que deben ejecutarse. Nos indica en
que punto del programa estamos, por donde vamos.

Heap

Región de memoria libre, normalmente de gran tamaño, dedicada al alojamiento dinámico de
objetos. Es compartida por todo el programa y controlada por un recolector de basura que se
encarga de liberar aquello que no se necesita.

Cola o Queue

Cada vez que nuestro programa recibe una notificación del exterior o de otro contexto distinto al
de la aplicación, el mensaje se inserta en una cola de mensajes pendientes y se registra su
callback correspondiente.

Eventloop o Loop de eventos

Cuando la pila de llamadas (call stack) se vacía, es decir, no hay nada más que ejecutar, se
procesan los mensajes de la cola. Con cada ‘tick’ del bucle de eventos, se procesa un nuevo
mensaje.

Hoisting

Sugiere que las declaraciones de variables y funciones son físicamente movidas al comienzo del
código en tiempo de compilación.

DOM

DOM permite acceder y manipular las páginas XHTML como si fueran documentos XML. De
hecho, DOM se diseñó originalmente para manipular de forma sencilla los documentos XML.
XML

Lenguaje de marcado creado para la transferencia de información, legible tanto para seres
humanos como para aplicaciones informáticas, y basado en una sencillez extrema y una rígida
sintaxis. Así como el HTML estaba basado y era un subconjunto de SGML, la reformulación del
primero bajo la sintaxis de XML dio lugar al XHTML; XHTML es, por tanto, un subconjunto de
XML.

Events

Comportamientos del usuario que interactúa con una página que pueden detectarse para lanzar
una acción, como por ejemplo que el usuario haga click en un elemento (onclick), que elija una
opción de un desplegable (onselect), que pase el ratón sobre un objeto (onmouseover), etc.

Compilar

Compilar es generar código ejecutable por una máquina, que puede ser física o abstracta como
la máquina virtual de Java.

Transpilar

Transpilar es generar a partir de código en un lenguaje código en otro lenguaje. Es decir, un
programa produce otro programa en otro lenguaje cuyo comportamiento es el mismo que el
original.


--

El asincronismo es básicamente una manera de aprovechar el tiempo y los recursos de nuestra aplicación, ejecutando tareas y procesos mientras otros son resueltos en background (como la llegada de la información de una API), para posteriormente continuar con las tareas que requerían esa información que no tenías de manera instantánea.

Un ejemplo fácil es comparando asincronismo vs sincronismo: En lenguajes síncronos al hacer un temporizador para ejecutar una función, todo el código se pausa hasta terminar el tiempo, mientras que en Javascript u otros lenguajes asíncronos, podemos estar aprovechando ese tiempo para ejecutar otros procesos hasta que ese tiempo finaliza.

--

Me pasó que cuando el profesor dice: JS es un lenguaje asíncrono, me explotó las ideas y desestructuro lo que pensaba que ya tenía claro. Después de investigar llegue a una conclusión, pero antes de eso. Dos conceptos claves para entender todo:

paralelismo

Es cuando dos tareas se ejecutan, exactamente en el mismo momento.

CONCURRENCIA.

Es cuando dos tareas pueden PROGRESAR simultáneamente, pero no quiere decir que fueron ejecutadas al mismo tiempo.

JS síncrono o asíncrono?
Entendamos algo. La confusión aparece porque JS solamente tiene un hilo para ejecutar sus funciones. Entonces, acá es donde decimos: “JS es síncrono”, pero esto realmente quiere decir que es síncrono? NO. JS cuenta con herramientas que están integradas en el JS runtime (navegador o node) lo cual permite que JS a toda acción bloqueante la mandé a progresar en otro entorno (acciones como consultas a servidores, setTimeOut, manejo del DOM, etc). Estás características están en JS. Permitiendo así ese paradigma de programación.

--

https://www.youtube.com/watch?v=bWvnWhVCHAc

## **Definición Estructura Callback**

Quisiera comentar algo y si estoy mal, por favor me corrigen:
La definición que el profe Oscar nos da: “Es una función que al crearla le pasamos como parámetro una segunda función”. Según lo que entiendo, eso no haría referencia directamente al callback, sino a la función que recibe como parámetro otra función.
Una función que recibe otra función como parámetro se le denomina función de orden superior (higher-order function).
El callback en este caso sería la función que es pasada como parámetro, mas no la función que lo recibe.

https://medium.com/@ubykuo/event-loop-la-naturaleza-asincr%C3%B3nica-de-javascript-78d0a9a3e03d

--

Por si a alguien le cuesta aun asimilar el concepto de los Callback…

Primero: Los callbacks son el nombre de una convención para usar funciones que llaman a otras en JavaScript. No hay una palabra reservada llamada “callback” en el lenguaje JavaScript que haga que nuestro código sea diferente o especial,
es mas una convención.
Tal es el caso que en lugar de llamar “callback” en el ejemplo de la clase, podemos llamarlo “suma” y funcionara igualmente.

![cv](https://static.platzi.com/media/user_upload/Img1-b8ed05d4-7155-439f-9858-9f2f5473a82a.jpg)

![cb](https://static.platzi.com/media/user_upload/Img2-2cf59f32-8f8f-4543-99f4-d4fe2d655b17.jpg)

Segundo y para que sirven? La mayoría estamos acostumbrados a programar de manera sincrona, es decir le indicamos al código que
por ejemplo defina un Valor “X” y con otro valor “Y” y realizamos un calculo (Por ejemplo una multiplicación).

El problema radica en que por ejemplo si quisiéramos crear un programa que nos convierta nuestra moneda (pesos) a su equivalente en Bitcoin,
podemos definir X (Valor de nuestro dinero) pero NO podemos definir de manera implícita “Y” (Precio del Bitcoin) por que es algo muy volátil. Entonces necesitamos obtener el precio del Bitcoin de una API, nuestro programa realiza una multiplicación de X * Y sin embargo no tenemos Y (precio del bitcion)
porque tenemos que esperar que el API nos conteste cual es este valor. Es ahí donde sirven los callback
.
Existen dos Metodos A y B
-El método B hace el calculo de nuestros Pesos * PrecioBitcoin
-El método A obtiene el precio del API de Bitcoin
Entonces el método B es llamado por el método A cuando por fin lee y obtiene el precio del Bitcoin, solo hasta entonces tiene sentido que multipliquemos nuestros valores.


## **Peticiones a APIs usando Callbacks**

Aclaraciòn de varias cosas que quizás no entiendas si estas empezando:

XMLHttpRequest es la forma antigua de hacer llamados, como el profesor lo menciona usa ese y no Fetch que es el actual, por que no conocemos aùn las promesas y fecth es con promesas, para saber por que el profesor uso OPEN y todas esas funciones aqui està la forma de usar XMLHttpRequest

https://developer.mozilla.org/es/docs/Web/API/XMLHttpRequest/Using_XMLHttpRequest.

" new Error " que el profesor crea, es una nueva instancia de la clase Error que tiene Javascript, son clases ya implicitas que tiene javascript en este caso es para monstrar bien un mensaje de error podemos usarla, màs informaciòn aqui : 

https://developer.mozilla.org/es/docs/Web/JavaScript/Referencia/Objetos_globales/Error.

Para los que son fron-end y están aprendiendo de Back, el profesor uso GET por que hace parte de los método http, en este caso necesitamos pedir información a las url ,màs información: 

https://developer.mozilla.org/es/docs/Web/HTTP/Methods

--

Los estados de un request de acuerdo a la documentacion:
0: request not initialized
1: server connection established
2: request received
3: processing request
4: request finished and response is ready

--

Creamos una instancia con el objeto XMLHttpRequest que incluye diversos metodos y atributos que nos permiten manejar la solicitud.
con el método object.open() inicializamos el pedido. Recibe los parametros (method, url, async, user, password).

object.onreadystatechange define una funcion que se ejecutará cada vez que el atributo readyState cambie.

los valores de readyState pueden ser los siguientes:

0: request no inicializado,
1: conexion con el servidor establecida,
2: solicitud recibida,
3: solicituid siendo procesada,
4: solicitud finalizada y respuesta lista.
Los atributos status y statusText llevan el stado de el objeto XMLHttpRequest.

200: “OK”
403: “Forbidden”
404: “Page not found”
Estos son los códigos más comunes.

El atributo responseText lleva la respuesta en al pedido como texto, en el caso de nuestra solicitud a la API debemos convertirla a un documento JSON para poder acceder a sus elementos usando `JSON.parse(object.responseText).

El método object.send() envia la solicitud.

--

https://developer.mozilla.org/es/docs/Web/API/XMLHttpRequest


## **Múltiples Peticiones a un API con Callbacks**


PREGUNTA DE EXAMEN:
Es recomendable de no realizar mas de 3 callback para no caer en un callback Hell, si tu proyecto tiene una funcion con mas de 3 callback, se recomienda hacer una revision y utilizar una mejor forma de ejecutar el codigo, para ello estan las promesas o el Async Away

--

        // importamos el modulo para hacer las peticiones
        let XMLHttpRequest = require('xmlhttprequest').XMLHttpRequest;
        // direccion de la API
        let api = 'https://rickandmortyapi.com/api/character/';

        // funcion principal
        function fetchData(url_api, callback){
        // instanciamos la conexion
        let xhttp = new XMLHttpRequest();
        // abrir una conexion con el metodo, la ruta y si es asincrono
        xhttp.open('GET', url_api, true);
        // validacion del llamado
        xhttp.onreadystatechange = (event) => {
            // el state 4 es el ultimo de la peticion
            if(xhttp.readyState === 4){
            // verificamos que el status este en 200, que dice que todo bien, no un 400 o 500
            if(xhttp.status === 200){
                // el primer valor es el err, y el siguiente el resultado
                // ejecutamos el callback con el resultado
                callback(null, JSON.parse(xhttp.responseText));
            } else {
                // si no es 200
                let error = new Error('Error: ' + url_api);
                // matamos el proceso con un error
                return callback(error, null);
            }
            }
        }
        // por ultimo enviamos la peticion
        xhttp.send();
        }

        // primero buscamos la lista de personajes
        fetchData(api, (error1, data1) => {
        // si error, matamos retornando un error
        if(error1) return console.error(error1);
        // luego buscamos en la api el id de Rick
        fetchData(api + data1.results[0].id, (error2, data2) => {
            // si error, matamos retornando un error
            if(error2) return console.error(error2);
            // por ultimo la consulta a la api que contiene su dimension
            fetchData(data2.origin.url, (error3, data3) => {
            // si error, matamos retornando un error
            if(error3) return console.error(error3);
            
            // mostramos los resultados :) 
            console.log(data1.info.count);
            console.log(data2.name);
            console.log(data3.dimension);
            
            // rutas de las peticiones en orden
            console.log(api);
            console.log(api + data1.results[0].id); 
            console.log(data2.origin.url); 
            
            });
        });
});

## **Implementando Promesas**

Métodos de las promesas

Promise.all(iterable)
Devuelve una de dos promesas:

una que se cumple cuando todas las promesas en el argumento iterable han sido cumplidas,

o una que se rechaza tan pronto como una de las promesas del argumento iterable es rechazada.

Si la promesa retornada es cumplida, lo hace con un arreglo de los valores de las promesas cumplidas en el mismo orden definido en el iterable.

Si la promesa retornada es rechazada, es rechazada con la razón de la primera promesa rechazada en el iterable. Este método puede ser útil para agregar resultados de múltiples promesas

Promise.race(iterable)
Devuelve una promesa que se cumple o rechaza tan pronto como una de las promesas del iterable se cumple o rechaza, con el valor o razón de esa promesa.

Promise.reject(reason)
Devuelve un objeto Promise que es rechazado con la razón dada.

--

Las promesas tienen tres estados:
-Pending: Una promesa inicia en esté estado:
-Fulfilled: Cuando se resuelve exitosamente. .then(va => …)
-Rejected: Si sucede algún error. .catch(err => …)

--

Una promesa originalmente esta Pendiente. Cuando llamamos a resolve entonces la promesa pasa a estar Resuelta, si llamamos a reject pasa a estar Rechazada, usualmente cuando es rechazada obtenemos un error que nos va a indicar la razón del rechazo. Cuando una promesa se resuelve entonces se ejecuta la función que pasamos al método .then, si la promesa es rechazada entonces se ejecuta la función que pasamos a .catch, de esta forma podemos controlar el flujo de datos.

--

Algo va a suceder ahora, en el futuro o nunca.
Una promesa es una clase de JS.
El constructor de la promesa recibe una función que es la que va a validar si se cumple o no la promesa.
La función que valida recibe como parametros un resolve y un reject que dependiendo la resolución ejecutaran los callbacks que se definan en .then() o .catch()
Una promesa tiene tres estados pending, fulfilled o failed que significan que no esta resuelta, que fue exitosa o que falló respectivamente.


## **Conociendo Async/await**

Async/await no es mas que Syntax Sugar. Es una manera mas bonita de hacer lo mismo que estabamos haciendo con .then(). La clave es recordar que si una función regresa un promesa, podemos usar el keyword await, que le indicia al navagador: “Espera a que la promesa se resuleva y almacena su resultado en esta variable”. Todo esto toma lugar dentro de una función asincrona, asi que usamos async para lograr esto


--

https://www.youtube.com/watch?v=pywyV4pbnQQ

--

A mi me gusta mucho async/await desde que lo conocí no paré de usarlos xD

Algo curioso es que al ponerle a una función “async” automáticamente esa función se convierte en una promesa, esto quiere decir que, si tu quisieras saber cuándo terminan de ejecutarse los async/await simplemente basta con que al llamado de tu función le agregues un then:

        console.log("Before 1");
        anotherFunction()
            .then(() => console.log("Llamadas a asyn/await terminadas"));
        console.log("Before 2");

--

![js](https://miro.medium.com/max/700/1*yAFctUA8useVWRbC-nWhBA.png)

--

## **Resolver problema con Async/Await**

Esta es una forma de hacer que async/await espere a varios llamados al vez:

        async function foo() {
            const [characters , episodes, locations] = await Promise.all([
                getCharacters(),
                getEpisodes(),
                getLocations(),
            ])

            console.log(characters)
            console.log(episodes)
            console.log(locations)
        }

--

Comparto mis apuntes 😄
⠀⠀

Resolver problema con Async/Await
⠀⠀
Ya conociendo Async/Await vamos a implementarlo en el desafío.

Creamos una función async con su estructura try()catch . Dentro de catch() pedimos que ejecuten tres peticiones. Para acceder a ellas colocamos la palabra reservada await y llamando nuestro fetchData indicamos dentro de sus parámetros la ruta que se debe tomar para acceder a la información que queremos imprimir en cada una de nuestras constantes.
⠀⠀
Después imprimimos los resultados. En catch() colocamos que código que queremos imprimir en caso de que no se cumpla la petición de try() . Ya por último llamamos la función anotherFunction() para ejecutarla.

        const fetchData = require('../utils/fetchData');
        const API = 'https://rickandmortyapi.com/api/character/'

        const anotherFunction = async (url_api) => {
        try {
            const data = await fetchData(url_api);
            const character = await fetchData(`${url_api}${data.results[0].id}`);
            const origin = await fetchData(character.origin.url);
            console.log(data.info.count);
            console.log(character.name);
            console.log(origin.dimension);
        } catch(error) {
            console.error(error)
        }
        }

        console.log('Before')
        anotherFunction(API)
        console.log('After')

--

        const fetchData = require('../utils/fetchData');
        const API = "https://rickandmortyapi.com/api/character/"

        const printData = async (API) => {
            const data1 = await fetchData(API);
            const data2 = await fetchData(data1.results[0].origin.url);

            const {info: {count} } = data1;
            const {name} = data1.results[0];
            const {dimension} = data2;
            console.log(count)
            console.log(name)
            console.log(dimension)
        }

        printData(API);


## **Callbacks Vs Promesas Vs Async/Await**        


Callbacks --> Ventajas: Simple(una función que recibe otra función). Son universales, corren en cualquier navegador.
Desventajas: Composición tediosa, anidando cada vez más elementos. Caer en Callback Hell.

Promesas --> Ventajas: Facilmente enlazables .Then( return… ).Then - Fácil e intuitivo de leer.
Desventajas: Posible error si no se retorna el siguiente llamado. No corre en todos los navegadores.

Async-Await --> Ventajas: Se puede usar try-catch . Código más ordenado e intuitivo.
Desventajas: No corre en todos los navegadores (se requiere un transpilador).

--

![js](https://static.platzi.com/media/user_upload/ventajas-1b35cccd-f9c4-45da-abb0-1718d1565f6f.jpg)

--

Excelente curso Muchas Gracias
Mis conclusiones son:

Ventajas y Desventajas

Callbacks
V = Es simple una función que recibe otra función
V = Son universales
D = Composición tosca
D = Callbacks Hell
D = Flujo poco intuitivo
D = Debemos pensar que estamos haciendo código para humanos y debe ser facil de leer
D = if FecthData, if FecthData, if FecthData y se vuelve tedioso y no se maneja excepciones

Promise
V = Fácilmente enlazable then y return, then y return y asi
V = Es poderoso // es muy recomendado para desarrolladores
D = NO maneja excepciones si no maneja un catch al final y seremos propensos a errores
D = Requiere un polyfile para ser transpilados y ser interpretados en todos los navegadores //Babbel

Async Await
V = El tradicional try - catch y manejar las excepciones de manera mas fluida
V = Mas fáciles de leer que sucedera que va a suceder
D = Ese poder que podemos decir es decir si queremos algo debemos esperar que algo suceda
D = Requiere un polyfile para ser transpilados y ser interpretados en todos los navegadores //Babbel