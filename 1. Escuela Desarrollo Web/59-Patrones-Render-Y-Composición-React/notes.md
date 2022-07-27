# **Curso de React.js: Patrones de Render y Composición**

## **Filosofía y principios de diseño en React**

Los principios de diseño en React:

Abstracciones comunes: se refiere que a React no quiere incluir código inútil en su core, código que sea demasiado especifico para caso de uso demasiado concreto. Sin embargo, existen excepciones.

Interoperabilidad: React trata de trabajar bien con otras bibliotecas de interfaz de usuario.

Estabilidad: React va a mantener sus apis, componentes, funcionamiento, etc… aunque estén descontinuados para no romper el código que usamos.

Válvulas de escape: Cuando React quiera descontinuar un patrón que no les gusta, es sus responsabilidad considerar todos los casos de uso existentes para él, y antes de descontinuarlo educar a la comunidad respecto a las alternativas.

Experiencia de desarrollo: el objetivo de React no es solo que con su código podamos solucionar nuestro problemas también van a buscar una solución que nos den una buena experiencia y disfrute.

Implementación: Siempre que sea posible React preferirá código aburrido a código elegante. El código es descartable y cambia a menudo. Así que es importante que no introduzca nuevas abstracciones internas al menos que sea absolutamente necesario. Código detallado que sea fácil de mover, cambiar y eliminar es preferido sobre código elegante que esté abstraído de manera prematura y que sea difícil de cambiar.

Optimizado para instrumentación: React siempre va a buscar el nombre mas distintivos y detallados(no necesariamente nombres largos).

Dogfooding: significa que React va a periodizar la implementación de funcionalidades que necesite su empresa, Facebook, Esto tiene la ventaja no solo para su empresa sino también a todos los desarrolladores que utiliza React.

Planificación: Acá es donde nosotros dividimos nuestras responsabilidades de los que debemos hacer y lo que tiene que hacer React por detrás con las descripciones que le hacemos.

Configuración: React cree que una configuración global no funciona bien con la composición. Dado que la composición es central en React, no proveen configuración global en el código. React siempre se asegurara que nosotros tengamos compatibilidad entre cualquier librería y aplicación que utilicemos React.

Depuración: se refiere que a React siempre va a dejarte pistas un rastro predecible, donde podamos buscar los errores en nuestra aplicación.

Composición: Next Class

https://es.reactjs.org/docs/design-principles.html

--


⚛ Filosofía y principios de diseño en React

Ideas/conceptos claves

Principios de diseño son los alineamientos, reglas o condiciones que sigue un equipo de desarrollo

Código aburrido se refiere al código fácil de reemplazar, mover y cambiar

Apuntes

React nos brinda principios el cual tiene el propósito de encaminarnos y coherentes con el cual React espera que escribiéramos

Framework o librería

Abstracciones comunes

React no desea incluir código demasiado específico el cual será para casos demasiados concretos, debido a que el mismo ya te los brinda

Interoperabilidad

React debe acoplarse a una aplicación sin necesidad de reescribir todo el código

Cambios al core

Estabilidad

React es consiente que es usado en empresas y lugares importantes, por ello los fundamentos se mantienen

En caso de haber alguna actualización fuerte, React da un tiempo para actualizarte

Válvulas de escape

Si React deja de usar algún patrón, el mismo avisará y mencionara alguna mejor alternativa

Experiencia de desarrollo

React tratará de encontrar soluciones las cuales como desarrolladores te sean simples de usar.

Usualmente tratan de brindarte una solución declarativa, en caso de no poderla realizar, dan una solución imperativa y en el peor de los casos brindan una solución que funcione
Prioridades

Implementación

Siempre que sea posible React dará un código elegante

Pero nunca pondrán el código elegante por encima del código aburrido

Al utilizar código elegante es más complicado de buscar formas de mejorar y escalar

Optimizado para instrumentación

React buscará el nombre más descriptivo para sus características

Un nombre descriptivo no necesariamente debe de ser un nombre largo, sino uno correcto el cual le dará sentido

Dogfooding

De alguna manera el equipo de React le dará prioridad a las necesidades de Facebook

👩‍💻 Filosofía React para ti

El trabajo de React

Planificación

React será el encargado de recibir las órdenes y realizarlas como la renderización, el manejo de estado o eventos

Configuración

React se asegura que siempre se tenga una compatibilidad con cualquier librería o aplicación que se utilice por lo cual la configuración del mismo no es algo que se te permita directamente como desarrollador

Tu trabajo

Depuración

React te dejará migajas de pan o rastros donde podrás encontrar errores de tu aplicación, como ser errores del lenguaje, framework o incluso lógica
