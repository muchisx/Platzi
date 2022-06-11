# **Curso de Consumo de API REST con JavaScript**

--

## **¿Qué es una API REST?**

![js](https://i.ibb.co/MSW3V2W/dark-800-2200-px-1.png)

--

![js](https://static.platzi.com/media/user_upload/Captura%20de%20Pantalla%202022-05-03%20a%20la%28s%29%208.23.18%20a.m.-17df73fb-d66f-47d1-ad20-c2c04ac7afe9.jpg)

--

API REST 🌐
API: Application Program Interface -> Interfaz
Una interfaz es el medio por el cual la computadora se conecta con los humanos. Es lo visible para el usuario que interactúe con una app, por ejemplo.

API REST
Es el medio por el cual se comunican computadoras con otras computadoras. O también podemos pensarlo como robots con robots 🤖🔁🤖. Puede ser backend con frontend, backend con backend, etc.

REST: Representational State Transfer

A diferencia de una página web, que se muestra con imágenes, textos formateados, etc.; la llamada de una API REST se devuelve en un archivo JSON.

Aunque pocas, algunas aplicaciones todavía usan el método SOAP para mandar información entre computadoras. Sin embargo, actualmente REST está dominando su aplicación.

--

¿Qué es una API REST?

Una API de REST, o API de RESTful, es una interfaz de programación de aplicaciones (API o API web) que se ajusta a los límites de la arquitectura REST y permite la interacción con los servicios web de RESTful. El informático Roy Fielding es el creador de la transferencia de estado representacional (REST).

Las API son conjuntos de definiciones y protocolos que se utilizan para diseñar e integrar el software de las aplicaciones. Suele considerarse como el contrato entre el proveedor de información y el usuario, donde se establece el contenido que se necesita por parte del consumidor (la llamada) y el que requiere el productor (la respuesta).Por ejemplo, el diseño de una API de servicio meteorológico podría requerir que el usuario escribiera un código postal y que el productor diera una respuesta en dos partes: la primera sería la temperatura máxima y la segunda, la mínima.

En otras palabras, las API le permiten interactuar con una computadora o un sistema para obtener datos o ejecutar una función, de manera que el sistema comprenda la solicitud y la cumpla.

Imagínelas como si fueran los mediadores entre los usuarios o clientes y los recursos o servicios web que quieren obtener. Con ellas, las empresas pueden compartir recursos e información mientras conservan la seguridad, el control y la autenticación, lo cual les permite determinar el contenido al que puede acceder cada usuario.

Otra ventaja de las API es que usted no necesita saber cómo se recibe el recurso ni de dónde proviene.


--

## **Flujo de comunicación entre usuarios, frontend y backend**

![img](https://static.platzi.com/media/user_upload/flujo-ddef2aa7-0d4f-48b0-9da4-d90fcef9fa9d.jpg)

Las SSRs son páginas que necesitan traer diferentes archivos HTML del servidor cada vez que el usuario navega por nuestra aplicación, es decir, casi todas las veces que damos click en un link o botón. Aunque estas páginas tienen un tiempo de carga muy corto, la carga debe repetirse.

Single Page Applications - SPA

Las SPAs son páginas que siempre cargan el mismo archivo HTML. Este, a su vez, carga un archivo gigante de JavaScript con toda la lógica de nuestra apliacación (por ejemplo, usando React.js).

Estas páginas tienen una carga inicial muy lenta, ya que no podremos ver la información importante hasta que termine de cargar el archivo de JavaScript. Pero una vez termina la carga inicial, las SPAs son muy rápidas, incluso al navegar por diferentes secciones de nuestra aplicación.

Como el archivo de JavaScript tiene todo el código de nuestra aplicación, el tiempo de navegación pasa de segundos a milisegundos. No necesitamos hacer más requests al servidor. Pero en mucho casos debemos esperar algunos segundos para que termine la carga inicial y podamos utilizar la aplicación.

--


Al principio de esta ruta aprendemos a crear páginas web y comenzamos haciendolas estáticas dado que sólo utilizamos HTML y CSS. A medida que vamos aprendiendo JavaScript y vamos implementando código de programación, podemos empezar a hacerla interactivas y dinámicas 😋 Es decir que el contenido va cambiando conforme el usuario interactua con nuestra aplicación!
.
¿Cómo las hacemos dinámicas y interactivas? Pues las APIs del DOM que nos permiten escuchar las interacciones del usuario y la API Fetch son herramientas poderosísimas que combinadas nos dan una alternativa al tener que recargar toda la página HTML cada vez que queremos algún recurso (server side rendering)

Aquí un mini video de cómo sería acceder del Home de Platzi al curso de Javascript sin tener que recargar la página de nuevo 😋

![gif](https://i.ibb.co/J5vphNP/Response-del-servidor-con-el-HTML-del-home-de-Platzi-2.gif)

--

Flujo de comunicación entre usuarios, frontend y backend
SSR

La representación del lado del servidor se refiere a la capacidad de una aplicación para mostrar la página web en el servidor en lugar de mostrarla en el navegador. Cuando el JavaScript de un sitio web se procesa en el servidor del sitio web, se envía una página completamente procesada al cliente y el paquete de JavaScript del cliente se activa y permite que funcione el marco de la aplicación de una sola página.

![img](https://assets-global.website-files.com/620d42e86cb8ec4d0839e59d/6230e9ad9a22b134ae9eceb8_61cb64ed587c1111fb1dc917_SSR-server-side-rendering-infographic.png)

SPA (aplicación de una sola página)
Una SPA (aplicación de una sola página) es una implementación de aplicación web que carga solo un único documento web y luego actualiza el contenido del cuerpo de ese documento único a través de las API de JavaScript, como XMLHttpRequest o fetch y se muestra contenido diferente.

Por lo tanto, esto permite a los usuarios usar sitios web sin cargar páginas completamente nuevas desde el servidor, lo que puede generar mejoras en el rendimiento y una experiencia más dinámica, con algunas desventajas como el SEO, se requiere más esfuerzo para mantener el estado, implementar la navegación y lograr un rendimiento significativo. vigilancia.

--

https://fakeapi.platzi.com/

https://platzi.com/blog/la-api-para-nunca-parar-de-aprender-news/

--

## **Endpoints y query parameters**


![img](https://i.imgur.com/gAYHTI0.png)


--

¿Qué es un Endpoint de una API?

Un endpoint de API es un punto en el que una API, el código que permite que dos programas de software se comuniquen entre sí, se conecta con el programa de software. Las API funcionan enviando solicitudes  de información desde una aplicación web o un servidor web y recibiendo una respuesta .

En otras palabras, los endpoints de API son la ubicación digital específica donde un programa envía solicitudes de información para recuperar el recurso digital que existe allí. Los endpoints especifican dónde las API pueden acceder a los recursos y ayudan a garantizar el correcto funcionamiento del software incorporado. El rendimiento de una API depende de su capacidad para comunicarse correctamente con los puntos finales de la API.

Los programas de software suelen tener endpoints. Por ejemplo, en Instagram incluyen uno que permite a las empresas y los creadores medir las interacciones de medios y perfiles; uno que les permita moderar los comentarios y sus respuestas; y una tercera que les permite descubrir medios etiquetados.

Query params

El query param es la clave valor name=oscar que vemos al final de la URL, y como regla, siempre deberán estar después del símbolo de interrogación. Además, una URL puede tener N query params, cómo el siguiente ejemplo:

        https://myapi.com/customers?firstname=oscar&lastname=blancarte&status=active

Esta URL la podemos utilizar para buscar a todos los clientes donde su nombre es oscar, su apellido es blancarte y su estatus es activo. Cuando utilizamos más de un Query param, es importante separar cada uno mediante el simbolo &.


## **¿Qué son los HTTP Status Codes?**


HTTP status codes

1XX Respuestas Afirmativas

2XX Respuestas satisfactorias

3XX Re-direcciones

4XX Error del cliente

5XX Error de servidor


--

Comprensión de los tipos de código de estado HTTP

Los códigos de estado HTTP se dividen en 5 «tipos». Se trata de agrupaciones de respuestas que tienen significados similares o relacionados. Saber qué son puede ayudarte a determinar rápidamente la sustancia general de un código de estado antes de que vayas a buscar su significado específico.

Las cinco clases incluyen:

100s: Códigos informativos que indican que la solicitud iniciada por el navegador continúa.

200s: Los códigos con éxito regresaron cuando la solicitud del navegador fue recibida, entendida y procesada por el servidor.

300s: Códigos de redireccionamiento devueltos cuando un nuevo recurso ha sido sustituido por el recurso solicitado.

400s: Códigos de error del cliente que indican que hubo un problema con la solicitud.

500s: Códigos de error del servidor que indican que la solicitud fue aceptada, pero que un error en el servidor impidió que se cumpliera.

--

on la forma en la que protocolo HTTP nos dice que paso con nuestra solicitud,

1xx: Indica que la petición fue recibida y el servidor sigue trabajando en el proceso.

2xx: Indica que la petición fue recibida, procesada y aceptada de manera correcta.

3xx: Indican que hay que tomar acciones adicionales para completar la solicitud. Por lo general indican redirección

4xx: Indican errores del cliente, se hace mal la solicitud, se envían mal los datos, headers o cualquier 
otro error que pueda ocurrir.

5xx: Indican errores el servidor y no tenemos mucho control.

Códigos más usados

200: Todo esta OK.

201: Todo OK cuando se hizo una solicitud POST, el recurso se creó y se guardó correctamente.

204: Indica que la solicitud se completó correctamente pero no devolvió información. Es muy común cuando se hacen peticiones con el verbo DELETE.

400: Bad Request, algo está mal en la petición. Se nos olvidó enviar un dato o algo relacionado. Por lo general la respuesta nos especifica cuales fueron los errores a la hora de hacer la petición.

401: Unauthorized, es decir, no estamos autorizados (autenticados) a realizar la petición.

403: Forbidden, yo no tengo acceso a ese recurso, aunque este autenticado.

404: Not Found, no existe el recurso que se está intentando acceder.

500: Interna Server Error, es un error que retorna el servidor cuando la solicitud no pudo ser procesada. 

Por lo general, si no tenemos acceso al backend, no tenemos control sobre los errores 500 que retorna un API.

## **¿Qué es una API KEY?**
 
 ![img](https://i.imgur.com/Zo66y0B.png)

 --

API KEY

Son una, no la única, de las formas en que el backend puede identificar quien está haciendo cada solicitud.

Debemos entender dos conceptos importantes, la Autenticación y la Autorización.

Autenticación

Consiste en identificar quien es cada quien. No sabe que permisos tiene fulano, No sabe que puede o no hacer fulano, Solamente sabe que él es fulano, que ella es pamela o que esa es una persona sin identificar.

Autorización

Es la que nos dice que permisos tiene cada quien, es decir, si fulano quiere ir a la nevera para comerse un pastel, es la que dice, espérate fulano, tienes permisos para abrir la nevera?, a listo ábrela, tienes permisos de comerte el pastel?, a bueno comételo.

Y además por poner un ejemplo más real, si fulano trata de ver las fotos privadas de pamela, la autorización va a decir, ok quien eres?, la autenticación ya te dijo que eras fulano, a listo perfecto, autenticación me pasas un token, listo ya sé que tu eres fulano, y luego empieza a revisar los permisos, como no los tiene se lo va a prohibir,

Obviamente estos trabajan en conjunto para prohibir o permitir a toda la información que tenemos en nuestra aplicación, y ahí es donde entran las API KEYs.

Estas API Keys son una de las formas en que el backend puede indentificar quien es cada quien.

El backend necesita saber quien esta haciendo cada solicitud, para proteger la información privada de las personas, pero también en muchos casos, para limitar la cantidad o las solicitudes que le hacemos a la aplicación.

Para que nosotros podamos enviarle esta API KEY en cada solicitud que hagamos al backend podemos utilizar varias formas:

Query parameter: ?apy_key=ABC123

Authorization Header: X-API-Key: ABC123

Alternativas

Authorization: Basic

Authorization: Barer Token

OAuth 2.0 (es de las mejores y más complicadas formas de autenticar en la modernidad)

Access Key + Secret Key

En este caso estamos haciendo una Application-based authentication es decir estamos autenticando nuestra aplicación, estamos autenticando a nuestro frontend para que pueda hacer solicitudes al backend, pero hay aplicaciones donde no solamente necesitamos una Application-based authentication, también hay apps que necesitamos usar esta con una User-based authentication.

https://blog.restcase.com/4-most-used-rest-api-authentication-methods/