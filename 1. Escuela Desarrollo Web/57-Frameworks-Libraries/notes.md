# **Curso de Frameworks y Librerías de JavaScript**

## **Cómo estructurar un componente**

Atomic Design es una metodología de diseño (y una forma de modelar nuestro pensamiento) para trabajar con componentes

https://platzi.com/blog/por-que-atomic-design/

[img](https://static.platzi.com/media/user_upload/0B052198-E473-4908-8866-43780AB15729-f589b505-81e5-4457-a014-793fe19ac768.jpg)

--

3.-¿Cómo estructurar un componente?

Podemos identificar componentes que tienen un mismo objetivo, entonces podemos hacer composición de componentes, en el caso del ejemplo visto en clase sería:

Logo: Esta construido por el logo de Platzi y el banner del logo (el que nos avisa si hay un live).

Navbar: cada enlace es su propio componente y además juntos forman el navbar.

Componente de autenticación: Engloba a los botones de iniciar plan e inicio de sesión.

Componente de búsqueda: Compuesto por un input y un botón diseñados especialmente para estar juntos.

Hechos estos componentes podemos llegar a lo que es el menú que es otro componente que está formado por el conjunto de todo el resto de componentes que acabamos de ver. Menú cambia, es diferente dependiendo del usuario, si es nuevo le mostramos los botones de login o suscripciones, pero si ya es un estudiante entonces debemos mostrarle los puntos, notificaciones y todo lo demás.

Al igual que con el menú los componentes internos puedan variar dependiendo de lo que necesitemos, para esto nos ayuda tratarlos como funciones a las cuales les pediremos lo que necesitamos en especial.

Podemos darle atributos a un componente usando otros componentes.

NOTA: Si se tienen muchos tipos de un solo componente es señal de desorden, hay que estandarizar las cantidades de componentes.

--

Esto hace parte de la documentación de ⚛️ React y nos explica como debemos pensar al momento de crear componentes y de componerlos de la misma forma que nos explica el profe Juan David

https://es.reactjs.org/docs/thinking-in-react.html

## **Qué es reactividad**

Caso práctico de manejo del Estado:
.
1️⃣ Requerimiento general del producto (lo que el usuario debe ver)

La aplicación tiene una lista de elementos y un input de búsqueda

El usuario escribe su filtro / búsqueda

La aplicación muestra solo los elementos que cumplen con el filtro
.
2️⃣ Requerimiento detallado del producto (lo que en realidad debemos construir)

La aplicación tiene un estado / store global para guardar elementos

Diferentes elementos de la UI se suscriben al estado global para enviar o recibir actualizaciones
– El input de búsqueda envía actualizaciones
– La lista de elementos recibe actualizaciones

El usuario escribe su filtro / búsqueda en el input, el input envía el mensaje al estado, el estado cambia y se lo notifica a la lista de elementos, la lista de elementos cambia y el usuario obtiene su respuesta


--

👀 Dato curioso:
Una opción al trabajar con el estado es hacerlo inmutable. En vez de actualizar directamente el estado, crear un “nuevo” estado cada vez que hacemos una actualización. Y de esta forma podemos hacer cosas muy cool como viajar en el tiempo entre estados (muy útil para debugging).

--

Reactividad: Es un paradigma, una forma de pensar nuestras aplicaciociones. Deben seguir 2 reglas:

Responsive, es decir, deben ser resilientes (siempre sabe qué hacer) y escalables (no importa con cuánta información debemos trabajar o cuántos usuarios entran a la aplicación, la aplicación debe poder seguir funcionando sin problemas).
Message Driven (Arquitectura basada en mensajes). Deben de haber emisores y receptores de mensajes. Los mensajes se entregan de manera asíncrona.
Recuerda: La arquitectura no es ajena a la programación.

Estado: Es el lugar donde vamos a guardar la información reactiva de nuestros componentes. Son variables a las que nos suscribimos para recibir una notificación cada vez que cambian sus valores.

Render: o renderizado, es el proceso por el cual nuestro HTML, pasan a ser información visual en el DOM.

Estrategias de render: Virtual DOM y No Virtual DOM. Ninguna es mejor, depende del caso en particular.

Componente -> Estado -> Render -> Usuario (y vuelve a “Estado”)

--

[img](https://static.platzi.com/media/user_upload/4-reactive-manifesto-b2a9b159-1d1c-4348-8ebb-b629ccb4d116.jpg)

--

## **Liberías vs Frameworks**

[img](https://static.platzi.com/media/user_upload/60bd8930-820e-45b7-9b04-71435088cdfb-cf224d78-3f06-4a4b-b9e8-2024dd563a99.jpg)

--

Framework

Es un conjunto de piezas de codigo que se centra en la elaboración o construción todo un proyecto a través de un conjunto de herramientas que nos brinda el framework (puede incluir librerías) como si de una receta se tratase.

Librería

Es una porción o pieza de codigo que nos ayuda a resolver un problema en específico como trabajar con HTMLmediaElement (video o audio) por ejemplo.

Ejemplo:

Usando el Basketball o baloncesto como base diría: un framework sería un jugador estandar que tenga en su paquete de habilidades todas las usadas o requeridas en el deporte (Rebotar, donqueo, defensa, tiro de media, tiro de larga distancia, tiro de 3puntos, etc…) aunque no sea el mejor en cada una de ellas, en cambio una librería sería un jugador enfocado en una sola de estas habilidades, ejemplo un jugador experto anotando desde la linea de 3, pero que no se le da también las demas habilidades.

--

Como yo lo entiendo:

Librería: Es un conjunto de piezas de código y herramientas para un fin en específico. Un ejemplo de esto sería una caja de destornilladores con diferentes tamaños y puntas.

Framework: Es un grupo mayor de librerías y herramientas para construir proyectos más complejos de forma efectiva. Ejemplo: una sala de herramientas con todo lo necesario para construir tu casa.

--

Platzi Framework & Libraries
A mí me gustaría hacer una comparativa con Platzi como ejemplo 💚

Un framework sería una línea de aprendizaje o Escuela completa para ayudarte a convertirte en el Desarrollador Web que buscas ser ✨
Mientras que una librería sería un curso muy particular, que te ayudará a entender mejor CSS Grid o Accesibilidad Web, por mencionar algunos 🚀

--

## **Ecosistema de frameworks y librerías JavaScript**

RESUMEN
Existen empaquetadores que nos ayudan a tener todos los archivos en produccion pero al momento de mandar al navegador sea lo mas ligero posible

Webpack: Requiere que configuremos un archivo para especificar como queremos nuestro archivo.
Parcel: Es evitarnos cualquier configuracion, trae todo listo para que construya toda su magia. No tenemos control de como empaqueta.
Rollup: Se especializa en tener todo optimizado con una tecnica especial donde elimina el codigo inutil
Se dice que usemos webpack para paginas web y aplicaciones y Rollup para librerias.

Compiladores que transforman codigo Javascript que no es exactamente JS que los navegadores si pueden entender:

Babel: Nos permite usar el codigo del futuro en proyectos que utilizan otra version, unificando todo en una version que entiendan los programadores
TypeScript: Es un lenguaje de programacion con sus nuevas reglas que nos permiten entender mas facil los errores en JavaScript
Las herramientas para UI son para encargarse de las vistas e interaccion con los usuarios, puede ser JS solito pero si trabajamos en Frameworks se suelen usar:

React
Vue
Svelt
Estan los estilos donde se pueden usar diferentes cosas, pero hay que tener en cuenta que a veces escribimos mas JS que CSS:

CSS
SASS
LESS
STYLUS
En CSS-in-JS normalmente el html, el css y el JS estaria en cada archivo individual pero esto nos permite desarrollar en los 3 lengaujes en un mismo componente, que necesariamente no es un mismo archivo.

Styled Components
Emotion
En los Routers son la forma en la que hacemos la navegacion de la aplicacion, muestra cierto contenido dependiendo de la URL

React Router
Vue Router
Svelte Router
LitElement Router
Whatever Router
Los frameworks son elementos todos en uno, que se encargan de todos los apartados ya que todo lo contiene. Trabajar con un Framework acelera tu desarrollo.

Angular: Es todo poderoso pero por ser tan grande es bastante dificil de integrar con otras herramientas que no sean especiales para ANGULAR.
Los entornos de desarrollo completos son un todo en uno, un grupo de librerias configuradas para trbajar con mas librerias. se llaman mas CLI y desde la consola podemos elegir lo que queremos y configurar todo por nuestro lado.

Create React App
Vue CLI
Svelte CLI
Polymer CLI
Whatever CLI
En el manejo de estado son las librerias que podremos definir un estandar de flujo de datos constante y predecible dentro de la aplicacion, en vez de que todos sean diferentes podremos definir un patron comun

Redux
XState
MobX
En la consulta de datos son formas o protocolos para comunicarnos con el backend para enviar y recibir informacion, hay herramientas para hacer peticiones que no hacen diferencia, pero estas herramientas si hacen diferencia:

API REST
GraphQL

--

[img](https://static.platzi.com/media/user_upload/1597658669-ux-vs-ui-difference-f2714b8e-30fb-47c4-a902-4231dc64b2c7.jpg)

--

https://2020.stateofjs.com/en-US/technologies/front-end-frameworks/

--

6-Ecosistema de frameworks y librerías JavaScript
Empaquetadores

Cuando trabajamos en un proyecto de verdad tenemos muchos archivos, pero no se los vamos a mandar todos al navegador por que cada ida y vuelta es muy demorado, en lugar de hacer una consulta para cada archivo podemos empaquetar todos los archivos en un solo y además vamos a optimizarlo para que el navegador se demore menos.

Para esto hay varias herramientas, las más populares siendo:

Webpack: Es la más popular, requiere que configuremos un archivo llamado webpack.config.js para especificarle como debe empaquetar los archivos.
Parcel: Nos hacen evitar cualquier tipo de configuración, ya tienen todo listo para que solo le digamos como ponerla.
Rollup: Se especializa en mantener muy pequeño el peso de los archivos, usa una técnica especial que se encarga de que no haya código de más, el único código que llega al archivo final es el que realmente estamos usando.
“Usemos webpack para construir sitios o aplicaciones web y que usemos rollup para construir librerías de JS”.

Compiladores

Su función es transformar código JS que no es exactamente JS a un JS que los navegadores si puedan entender.

Babel: nos permite usar la sintaxis del futuro de JS.
Typescript: Parecido a JS pero con sus propias reglas, es un lenguaje tipado y es orientado a objetos.
Herramientas para UI

Se encargan de la parte de vistas e interacción con el usuario, puede ser JS solo pero se pueden usar frameworks. Transforman componentes en un render con el que puedan interactuar los usuarios.

CSS y Preprocesadores

Podemos escribir el CSS de manera nativa, o podemos usar preprocesadores como los vistos en los cursos anteriores que nos permiten escribirlos más cómodamente y ellos se encargan de convertir ese código en CSS que los navegadores puedan entender.

CSS-in-JS

Es la forma de escribir CSS con JS, si usamos componentes con CSS-in-JS entonces podemos desarrollar con los 3 lenguajes en un mismo componente, este componente no significa un mismo archivo. Las herramientas más populares para esto son: Styled Components y Emotion.

Routers

Son la forma de hacer la navegación de nuestra aplicación, en los proyectos más pequeños probablemente no es necesario, pero si crece la aplicación muy probablemente si. Algunos son: React Router, Vue Router, Svelte Router, LitElement Router, Whatever Router.

Frameworks (todo en uno)

Son un todo en uno, cuentan con todo de lo de arriba o casi todo. Trabajar con un framework acelera mucho el desarrollo. El problema es que por ser tan grandes, es algo difícil de integrar con otras herramientas que no sean angular o que no hayan sido construidas exclusivamente para angular.

Entornos de desarrollo (todo en uno)

Son un grupo de librerías ya configuradas para que podamos trabajar con un montón de librerías en conjunto, normalmente estas herramientas se llaman CLI y nos dejan elegir desde la consola como queremos el proyecto. Podemos crear nuestros propios entornos de desarrollo a la medida de lo que necesitamos.

Create React App, Vue CLI, Svelte CLI, Polymer CLI, Whatever CLI

Manejo del Estado

Son las librerías que nos ayudan a definir un estándar de flujo de datos constante y predecible dentro de la app, en vez de tener cada componente trabajando diferente desde sus propios datos o teniendo diferentes partes de nuestra app comunicándose entre si de manera enredada vamos a tener un patrón común, un lugar centralizado dónde este toda la información y nos permita darle un mismo orden a la comunicación entre los componentes.

Como: Redux, XState, MobX

Consulta de Datos

Son formas o protocolos con los que nos comunicamos con el backend para enviar y recibir información de nuestros usuarios. La forma correcta de trabajar es creando capas, en vez de tener todo el código en un solo lugar, lo que hacemos es crear una capa de UI y otra capa para la consulta de datos, de esta forma a la capa de UI no le importa de donde sale la información o como aparece, solo los recibe. Algunas veces las herramientas con las que hacemos peticiones de datos también nos permiten manejar el estado de la aplicación

API Rest, GraphQl

## **Qué es React y cómo se construyó**

Al programar de forma imperativa debemos escribir código que nos indica paso a paso cómo evoluciona nuestra aplicación. En cambio, al programar de forma declarativa le damos más importancia a qué vamos hacer, luego nos encargaremos de cómo lo debemos hacer.

https://platzi.com/blog/usestate-vs-usereducer/

--

ECMAScript es estándar en el que se basa JavaScript, es la especificación del lenguaje de programación JavaScript; y lo que conocemos como Javascript es la implementación que hace cada navegador de esta especificación.

En 2005 surgió ECMAScript for XML, un estándar para agregar soporte nativo de ECMAScript a XML. Era una alternativa a la forma en la que se trabaja con el DOM.

En 2010, inspirados en ECMAScript for XML, Facebook estaba trabajando en XHP, una “mejora” a PHP con la que pretendían crear componentes personalizados y reutilizables de HTML y lo integraron a su Stack.

En 2011, bajo la influencia de XHP y los problemas que tenía Facebook, se creó el prototipo de React JS. Una herramienta para desarrollar aplicaciones con la que pudieran mejorar la eficiencia del los desarrolladores y seguir ofreciendo una buena UX.

En 2012 React se volvió Open Source.

En 2014 llegaron las React Developer Tools, un conjunto de herramientas para depurar componentes de React.

En 2015 apareció React Native, y con él muchas empresas grandes empezaron a utilizar React.

<h3>Objetivos de React</h3>
Declarativo: Se refiere a que sea fácil de leer.
Basado en componentes: Que todo este formado por componentes.
Multiplataforma: Significa que podremos utilizar React en cualquier plataforma con solo pequeños cambios.
Existe un gran ecosistema de herramientas relacionadas con React, algunas desarrolladas por Facebook y otras por creadas por la comunidad. Por ejemplo:

React DOM: Se utiliza para renderizar los componentes de React en el navegador.
React Native: Usado generalmente para crear aplicaciones móviles.
Hay dos formas de crear componentes con React: con una clase y con una función

Al crear componentes con una clase esta usa un función render y dentro una función return. Dentro de esta ultima se encuentra el código JSX para crear el componente. Además, React utiliza las llamadas props para presentar ciertas partes del componente de manera dinámica.

React también cuenta con el state, que nos sirve para cambiar el contenido de las variables dependiendo de la interacción del usuario. Este estado es un objeto donde podemos definir propiedades para después hacer uso de ellas. Cuando React detecta un cambio dentro del state automáticamente se vuelve a renderizar el componente mostrando los nuevos datos.


--

7.-¿Qué es React y cómo se construyó?
ECMAScript es el estándar en el cuál se basa JS, es la especificación. Lo que conocemos como JS es la implementación que hace cada navegador de esta especificación.

En 2004/2005 se inventó ECMAScript for XML un estándar para agregarle soporte nativo de ECMAScript a XML, era como una alternativa al DOM.

En el 2010 Facebook trabajaba en XHP una “mejora” a PHP con la que querían crear componentes personalizados y reutilizables de HTML y lo integraron a su stack oficial de programación.

En 2011 bajo la influencia de XHP y los problemas de mantenimiento de código, concretamente los anuncios se crea el prototipo de React.js una herramienta para hacer aplicaciones con muy buena UX mejorando la eficiencia de los equipos de programación de FB (buena developer experience).

En 2012 cuando FB compró Instagram, React se desarrollo para ser Open Source

Llega 2014 y se crean las React Developer Tools una herramienta para debuggear los componentes en React.

En 2015 salió React Native y muchas empresas importantes deciden usar React.

React

Todos los frameworks tienen uno o varios objetivos en específico, en el caso de React son:

Declarativo: Se refiere a que sea fácil de leer, o sea que con su sintaxis se nos facilite entender lo que hace.
Basado en Componentes: Que usemos componentes (los que hemos visto a lo largo de este curso).
Multiplataforma o “Learn Once, Write Anywhere”: Al aprender React lo vamos a poder usar en todas partes con un poco de cambios minúsculos, esto pasa porque aunque es una librería no está solo, hay muchas herramientas alrededor de React, algunas son oficiales de FB y otras son de la comunidad.
Cuando usemos React para Web es juntarlo con React DOM, que es la herramienta oficial de FB para hacer el render en el DOM, si queremos hacer una app móvil debemos usar React Native y si queremos hacer aplicaciones en VR usamos React VR. La diferencia entre web, móvil y VR es que en lugar de usar div, p o etiquetas de HTML tenemos que usar componentes que nos da React, que en esencia son lo mismo.

Hay dos formas de crear componentes con React:

Con clases: Solía ser la más popular, creamos clases de JS que extienden de React.Component y por dentro solo debemos escribir algunos métodos (como render) para indicarle a React que contenido debe renderizar. Para poder escribirlo como si fuera HTML normal usamos jsx. Los componentes de React o cualquier otro Framework tienen la característica de que pueden mostrar un contenido fijo o dinámico.
Con estados: Nos permite es cambiar el contenido de una variable dependiendo de las interacciones de un usuario. En el ejemplo de la clase, cada vez que un usuario le de click al botón vuelve a hacer render de nuestro componente con el nuevo estado que surgió.
React Hooks: Hoy en día esta es la formula más popular, que en lugar de usar clases, métodos, ahora usamos los React Hooks , son funciones que nos permiten leer y escribir nuestro estado de manera muy limpia, además de que lo que normalmente escribiríamos en el método render lo podemos escribir en el return de la función.

--

## **Qué es un componente en React y cómo funciona**

[img](https://static.platzi.com/media/user_upload/9-diagrama-ciclo-de-vida-bdf72607-e2a8-44b4-a075-72296dafb7ce.jpg)

Los componentes y su ciclo de vida existen en los 3 grandes frameworks (en grandes rasgos todos nacen, cambian y mueren)

Vue 💚:

[img](https://static.platzi.com/media/user_upload/lifecycle-c17a8118-534a-474c-b061-44aea59f5d9d.jpg)

https://es.vuejs.org/v2/guide/instance.html#Diagrama-del-Ciclo-de-vida

Svelte 🧡:

https://svelte.dev/docs#Run_time

Angular 💓:

[img](https://static.platzi.com/media/user_upload/0_wEGNC-p9kA91tb8K-14210bee-075d-4b4a-ae00-527a0c7e2518.jpg)

https://medium.com/angular-chile/angular-componentes-y-sus-ciclos-de-vida-aa639e13a688

React:

[img](https://static.platzi.com/media/user_upload/Screen%20Shot%202018-07-24%20at%2013.40.28-5a12b7b9-cbf5-4069-a868-eab34dc8f5ce.jpg)

https://es.reactjs.org/docs/state-and-lifecycle.html


## **My React App**

--

https://codesandbox.io/s/gqrhzp?file=/src/App.js


## **Qué es Angular y cómo se construyó**


https://blog.nrwl.io/understanding-angular-ivy-incremental-dom-and-virtual-dom-243be844bf36

https://dev.to/eugeniolentini/an-introduction-to-angular-9-ivy-compiler-177n

https://blog.ninja-squad.com/2019/05/07/what-is-angular-ivy/

--

En el 2009 un grupo de amigos Desarrolladores inventaron una herramienta para que personas que no sabian programar pero si HTML pudieran hacer aplicaciones, esto no tuvo exito. Despues uno de ellos fue a trabajar a Google Feedback. Pero para esto necesitaron 17k lineas de codigo en frontend, usando un Google Web Toolkit, pero por esto apostaron que podian hacerlo en 2 semanas, pero logro hacerlo en 3 y con 1.5k lineas de codigo, y asi nacio Angular JS, que se volvio Open Source y patrocinado por google. Es como REACT pero FB depende totalmente de este, pero Google no depende de angular. Google solo lo patrocina.

Entre 2012 y 2014 Angular era bastante popular pero con el paso del tiempo empezo su decaida, y anunciaron que lo iban a hacer desde 0 y empezar a usar componente, pero los que iban a usar a angular no sabian que iba a pasar porque no iba a tener compatibilidad.

Es dificil convinar angualar con alguna libreria o algo que no se haya hecho especificamente para angular.

Angular tiene un sistema para crear componentes que se llaman Engine Modulos o Modulos de angular, que agrupan componentes y servicios a un mismo fin o a un mismo dominio. Los componentes son la logica y la interfaz de usuario para cada pedazo de la aplicacion.

Los componentes tienen dos partes, las logicas y las partes de UI, esto lo haremos con una clase en TS. Lo definimos con algo parecido a HTML.

Los servicios son agrupaciones de codigo. Agrupaciones de logica que podemos usar en varios componentes por toda la aplicaion. Esto lo inyectamos a los componentes que usamos Inyeccion de dependencias.

Angular tiene a Angular Ivy que se encarga de renderizar los componentes en angular con Incremental DOM. Como React usa JSX, Angular tiene su variacion de HTML que no es puro. Lo que hace Angular Ivy es convertir este HTML en un JS para renderizar los componentes en el DOM.

Angular explica que crear una copia de todo el DOM es innecesario, con el Incremental DOM cada componente se convierte en Instrucciones y estas hacen que se ejecute y renderice y actualice el componente, en ningun momento crea copia del DOM y ahorra memoria.

En angular 9 reescribieron el motor completamente. Antes habia que compilar muchas veces cada que cambiabamos componentes. Con Angular Ivy cambio la forma en la que se describe para que los componentes solo se afecten asi mismos y no a los demas.

--


## **My Angular App**

https://codesandbox.io/s/angular-app-platzi-zj7oz3?file=/src/app/app.component.html

## **Qué es Vue y cómo se construyó**


13.-¿Qué es Vue y cómo se construyó?
“El Framework progresivo”

No es un framework tan abrumador como Angular, pero aún así puede ir escalando progresivamente a medida que lo vamos necesitando.

Escalable pero no flexible.

Se integra bien con cualquier herramienta que queramos utilizar.

Es completamente Reactivo.

Vue también usa el Virtual DOM.

En pocas palabras, al principio Vue nos deja trabajar al principio casi como si siguiéramos usando HTML común y corriente pero poco a poco le vamos metiendo JS usando Vue hasta que llega un momento en el que prácticamente todo la aplicación está hecha en JS con componentes de Vue.

Nos deja trabajar con componentes pero no es obligatorio en un inicio.

“El mejor performance”


--

Resumen del documental de Vue
El documental nos cuenta como el creador de Vue js (Evan You) creo un clon de una aplicación en donde se creaban “To-do lists”. A raíz de esto, empieza a llamar la atención de los reclutadores de Google, que se saltan todo el proceso normal de una entrevista de trabajo y le piden que trabaje en Google.
.
Evan acepta y empieza a desarrollar ciertos proyectos que se basaban mucho en interactividad. Entonces, el empieza a buscar un framework que le ayude a hacer su trabajo mas sencillo, pero solo se encuentra con frameworks que no cumplen el proposito que el esta buscando. Entonces, decide crear uno por su cuenta.
.
Al momento en que hizo el release del proyecto, el no estaba buscando ganar dinero ni nada por el estilo, solo quería compartir lo que había creado, pensando que pudiera ser útil para otras personas. Sin embargo, el proyecto empieza a tener mucha tracción y empieza a tener muchos usuarios.
.
Para ese entonces, Evan ya esta trabajando en otra empresa, sin embargo, empieza a pensar seriamente en dedicarse a tiempo completo a trabajar en Vue.js, ya que en ese entonces, solo le dedicaba sus tiempos libres
.
Uno de los parteaguas que lo empuja a tomar esa decisión es el apoyo de la comunidad, principalmente del creador de Lavarel, que lanza unos tweets diciendo que Vue es mejor que otros frameworks.
.
Al final, Evan consigue financiamiento y puede dedicarse en tiempo completo a su bebe (Vue, claro).
.
Con el tiempo, Evan, como ciudadano chino, se da cuenta que las documentaciones de otros frameworks no tienen una correcta traducción a su idioma natal, por lo que el mismo hace la documentación traducida al Chino, lo cual atrae a mas empresas y desarrolladores chinos a adoptar esta tecnología. De hecho, si checan el repositorio de Vue, hay varias cuentas chinas muy activas en el framework.
.
Al final, el equipo de Vue (que esta en todo el mundo) se ve a si mismo como los nerds que hacen un framework solo porque quieren hacerlo, en donde las reglas no las pone una gran empresa, como en el caso de Google o Facebook, sino que es la misma comunidad la que hace las reglas.

## **My Vue App**

https://codesandbox.io/s/vue-app-platzi-p7ut41


## **My Svelte App**

https://codesandbox.io/s/svelte-app-platzi-gsldvy

## **Qué es CSS-in-JS**

CSS-in-JS
CSS-in-JS es una técnica de diseño en la que se usa JavaScript para diseñar componentes. Cuando se analiza este JavaScript, se genera CSS y se adjunta al DOM. Permite abstraer CSS al nivel de componente en sí, usando JavaScript para describir estilos de una manera declarativa y mantenible.

--

17.-¿Qué es CSS-in-JS?
Es literalmente escribir CSS desde JS y no, no reemplaza a los estilos normales ya que al final CSS-in-JS genera un CSS normal, la diferencia esta en como lo escribimos cuando estamos desarrollando la aplicación y como aumenta la ventaja de trabajar con componentes.

También tenemos a los preprocesadores y postprocesadores de CSS que nos dejan escribir CSS de manera más sencilla usando variables, ciclos, mixins, filtros, funcione, etc. Los postprocesadores nos permiten usar las funcionalidades que CSS “tendrá” en el futuro y nos dejan usarlas desde ya, también compilan a CSS normal.

Componentes y CSS-in-JS

Logramos que no solo la estructura HTML y lógica en JS de cada componente este dentro de componentes, también logramos que el CSS este dentro del componente.

Otra ventaja es que podemos usar JS para programar nuestros estilos y hacerlos dinámicos.

“Los estilos globales no son una desventaja en CSS-in-JS”

--

https://medium.com/dailyjs/what-is-actually-css-in-js-f2f529a2757