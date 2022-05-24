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