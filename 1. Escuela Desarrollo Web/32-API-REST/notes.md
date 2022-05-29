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

