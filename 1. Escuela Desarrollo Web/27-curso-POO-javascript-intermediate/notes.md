# **27-curso-POO-javascript-intermediate**

## Static: **attributes and methods**

Hasta ahora habíamos aprendido que apara acceder a los métodos o atributos de una clase o prototipo teníamos que crear una instancia del prototipo(Objeto). Pero hay una forma de que podemos saltarnos tener que crear una instancia del prototipo para acceder a los métodos o atributos, esta es la forma Static

Para crear atributos estáticos los cuales podamos acceder sin crear un objeto o una instancia de este prototipo, solo hay que agregar al atributo la palabra **static**

--
Resumen corto:

con Object.key() y Object.getOwnPropertyName() obtienes en un arreglo todas las claves del objeto en cuestión, sin importar si son métodos o atributos, ej:

["name", "email", "age"]

con Object.entries() obtienes un array de array con todas las propiedades del objeto, tener cuidado si tienes un método dentro de el, pues this cambia al usar esta propiedad, ej:

[ 0: ["name", "javier"] 1:[...], ...]

con Object.getOwnPropertyDescriptors() obtienes en un objeto las propiedades del objeto con otros cosas que nos permitirán poder hacer encapsulamiento,

--

🎳 Las variables son referencias a un espacio en memoria.
🎩 Los navegadores web usan dos tipos de memorias: Stack y Heap.
📁 La memoria Stack es muy rápida, pero sin tanto espacio. Aquí se guardan los valores primitivos (booleanos, strings, números…).
🌪 La memoria Heap es más lenta, pero permite guardar enormes cantidades de información (son como los tornados: grandes, lentos y desordenados). En esta memoria guardamos los valores de los objetos ({...}).

.

Entender cómo funciona la memoria en JavaScript no solo será útil para aprender POO, sino también para programación funcional. 😉


Las variables son una referencia a un espacio en memoria. Dependiendo del tipo de valor que sean serán ubicadas en alguna de las dos tipos de memoria:

Stack - Mucho más rápida, pero sin tanto espacio
Heap - Más lenta, pero con mucho más espacio
Las variables que no tienen un valor de tipo objeto, son almacenadas en la memoria stack. Las variables que tienen como valor un objeto, funcionan de una manera diferente:

El valor (objeto) es guardada en la memoria heap
En la memoria stack se guarda un apuntador (pointer) hacia la memoria heap
Es por esto que cuando nosotros asignamos una variable que tiene como valor un objeto, a una nueva variable, lo unico que hacemos es asignar el apuntador. Es así que al modificar el objeto, en cualquiera de las dos variables, los cambios se reflejan en las dos


--

Shallow Copy se refiere a la forma de crear un nuevo objeto a partir de las propiedades de otro. Esta copia solo se hace a un nivel alto, no se hace con objetos dentro de objetos (nested objects), lo que provoca que la modificación de una de sus propiedades, modifique el objeto principal.

Shallow copy en JavaScript
Shallow copy
El Shallow Copy (copia superficial) es una copia bit a bit de un objeto. Se crea un nuevo objeto que tiene una copia exacta de los valores del objeto original. Si alguno de los campos del objeto son referencias a otros objetos, solo se copian las direcciones de referencia, es decir, solo se copia la dirección de memoria.


--


JSON.stringify()
El método JSON.stringify() convierte un objeto o valor de JavaScript en una cadena JSON, reemplazando opcionalmente valores si se especifica una función de reemplazo u opcionalmente incluyendo solo las propiedades especificadas si se especifica una matriz de reemplazo.

Descripción
Los objetos Boolean, Number, and String se convierten a sus valores primitivos, de acuerdo con la conversión semántica tradicional.
Si durante la conversión se encuentra un undefined, una Function, o un Symbol se omite (cuando se encuentra en un objeto) o se censura a null (cuando se encuentra en un array). JSON.stringify() puede devolver undefined cuando se pasan valores “puros” como JSON.stringify(function(){}) o JSON.stringify(undefined).
Todas las propiedades que utilicen Symbol en los nombres de la clave se ignoran por completo, incluso si utilizan una función replacer.
Las instancias de Date implementan la función toJSON() devolviendo una cadena de texto (igual que date.toISOString()). Por lo que son tratadas como strings.
Los números Infinity y NaN, así como el valor null, se consideran null.
El resto de instancias de Object (incluyendo Map, Set, WeakMap, y WeakSet) sólo tendrán serializadas sus propiedades enumerables.
JSON.stringify () convierte un valor en notación JSON que lo representa:

JSON.parse()
El método JSON.parse() analiza una cadena de texto (string) como JSON, transformando opcionalmente el valor producido por el análisis.

Why JSON.parse(JSON.stringify()) is a bad practice to clone an object in JavaScript
Puedes perder tipos de datos.
JavaScript no te avisara cuando pierdas algún tipo de dato al usar JSON.stringify(), asi que GG mi rey
Convierte tipos de datos no soportados en soportados, como infinity y NaN en null
Los tipos de datos Date serán parseados como strings, no como Date
No es tan rápido y eficiente.


A día de hoy ya contamod con structuredClone👇

At the time of writing, all browsers have implemented this API in their nightly releases, Firefox has shipped it to stable in Firefox 94. Additionally, Node 17 and Deno 1.14 have implemented this API. You can start using this function right now and not feel bad about it.
Deep-copying in JavaScript using structuredClone


--

Tarea del profe
¿Por qué escribir programas recursivos?
Son mas cercanos a la descripción matemática.
Generalmente mas fáciles de analizar
Se adaptan mejor a las estructuras de datos recursivas.
Los algoritmos recursivos ofrecen soluciones estructuradas, modulares y elegantemente simples.
Factible de utilizar recursividad
Para simplificar el código.
Cuando la estructura de datos es recursiva
ejemplo : árboles.
No factible utilizar recursividad
Cuando los métodos usen arreglos largos.
Cuando el método cambia de manera impredecible de campos.
Cuando las iteraciones sean la mejor opción.
Fuente: https://www.uv.mx/personal/ocastillo/files/2011/04/Recursividad.pdf

Tambien lei este post y decia esto

Conclusiones
La recursividad consume mucha memoria y tiempo de ejecución.
La recursividad puede dar lugar a la redundancia (resolver el mismo problema más de una vez)
A veces es más sencillo encontrar una solución recursiva que una iterativa
Fuente: https://infseg.com/informatica/recursividad-cuando-debo-utilizarla/


Hola compañeros 😀, estuve jugando un poco con el código de la case para entenderlo mejor, y se puede simplificar de esta forma, mas sencillo de leer:

function deepCopy(subject) {
  let copy;

  if (Array.isArray(subject)) {
    copy = [];
  } else if (typeof subject === "object") {
    copy = {};
  } else {
    return subject;
  }

  for (key in subject) {
    copy[key] = deepCopy(subject[key]);
  }

  return copy;
}
Ahora ustedes se preguntaran:
¿Porque en el ciclo for ya no hay validaciones?, esto es debido a que el valor key dentro del for va a corresponder a dos posibles valores: indices de un array, o keys de objetos, dependiendo que sea subject (un objeto o un array) , y como esta misma sintaxis sirve para objetos y arrays podemos usar la misma linea de código, teniendo encuenta que ya antes creamos copy con los valores {} o [] dependiendo si subject era un objeto o array