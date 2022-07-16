# **Curso de Introducción a React.js**


## **Cuándo usar React.js**

[img](https://www.techdiagonal.com/wp-content/uploads/2019/08/React-components-blog-image.jpg)

--


2.-Cuándo usar React.js
Hay dos flujos de trabajo para crear aplicaciones web

Modelo en cascada:

Cuando cada equipo tiene un tiempo para hacer todo su respectivo trabajo para construir una app. Por ejemplo: el equipo de diseño diseña la aplicación, el de desarrollo programa todo lo diseñado y finalmente se lanza la app recogiendo el feedback de los usuarios y se vuelve a empezar tomando en cuenta lo dicho por los usuarios. Es problemático porque el esfuerzo puede ser en vano porque no se tiene un feedback hasta que se termina de construir la app.

Modelo del ciclo imperativo:

Se refiere a que cada equipo se enfocará en ciclos pequeños para construir partes más pequeñas de una app que en conjunto se puedan ir ensamblando para hacer la app completa. Resuelve el problema del modelo anterior, aquí se recibe el feedback al terminar cada pequeño ciclo, recibiendo así el feedback de manera más inmediata que antes.

MVP’s o :

Se refiere a construir funcionalidades pequeñas que sean completas para que podamos lanzarla y medir su impacto y decidir si seguir ese camino o probar otra cosa.

Hay que escoger el problema más crucial que debe resolver la app.

Análisis: Componentes y comportamientos

Componentes: Son la forma de estructurar las piezas de nuestra página web para hacerlas escalables, nos ahorran tiempo y esfuerzo. Son abstracciones de los elementos de nuestra página web para ser reusados las veces que necesitemos. Trabajan de manera independiente a los demás. Con react todos los componentes tienen una conexión con el resto de componentes de la app para que en conjunto reaccionen a los comportamientos del usuario.

Comportamiento: Las interacciones de los usuarios.

React es muy bueno cuando queremos construir rápidamente la primera versión funcional de una app web sin sacrificar su escalabilidad. Si no queremos escalarla después, no usar react, podemos usar JS simple.

--

## **Instalación con Create React App**

--

https://github.com/facebook/react

--
Algo que quiero aportar es la estructura del ReactDOM.render(QUE, DONDE)

Quiere decir que como primer parámetro el render recibe el componente que queremos renderizar y el segundo parámetro es donde lo vamos a mostrar

--

3.-Instalación con Create React App
Se pueden importar los scripts del código fuente de react directamente en el html o creando un entorno de desarrollo completo con empaquetadores y otras herramientas.

Hay varias versiones que podemos usar como lo son la de desarrollo o la de producción que están más optimizadas.

Para hacer el ambiente de desarrollo usamos create react app, el cual podemos personalizar manualmente. En el dado caso de que queramos usar una configuración predeterminada usamos

npx create-react-app (npx instala temporalmente nuestras herramientas para ejecutarlas y luego borrarlas, eso permite tener siempre la última versión actualizada de la herramienta que queramos ejecutar). Además de esto, actualiza automáticamente los cambios hechos en el código

react-scripts es la configuración que hizo create-react-app por nosotros. Es un paquete que acelera el proceso de trabajo con react, pero no está tan optimizado a diferencia de hacerlo manualmente.

div id=“root” es donde se va a renderizar el código escrito en JS con react.

ReactDOM.render es donde enviaremos los componentes que queremos renderizar

Babel es el que hace la traducción que nos facilita la escritura de código de una manera más cómoda.

npm start para ejecutar el servidor de desarrollo.

--

## **JSX: componentes vs. elementos (y props vs. atributos)**

Componentes vs Elementos

En React hay varias formas de crear un elemento:

Con clases: Actualmente no se usa

        class Componenete extends React.Components {
            render() {
                return (
                    //Codigo
                )
            }
        } 

Con React.createElement: Se sigue usando. Es opcional

Sintaxis: 

        React.createElement(elemento, atributos, texto/contenido)

En el elemento se colocaran el nombre de las etiquetas HTML. Ejemplo, h1, h2, p, form,…

En los atributos se colocaran los atributos de las etiquetas, es decir, id, class, placeholder,…

En texto o contenido se coloca contenido que va dentro de la etiqueta. Es decir, <h1>este contenido</h1>

Veamos con un ejemplo:

        const ejemplo1 = React.createElement('h1', {'id': 'title'}, 'Oli React')

        const ejemplo2 = React.createElement(
            'p',
            {
                'id': 'paragraph-elemental',
                'class': 'paragraph'
            },
            'Oli React'
        )

En el ejemplo 1, lo que hice fue colocar el ejemplo de Juan que mostró en el video.

En el ejemplo 2, lo que hice fue colocar un ejemplo parecido, solo que le di una lectura más legible para los casos que tengamos que colocar más atributos y no se nos complique la lectura al tener esto:

        const ejemplo2 = React.createElement('p',	{'id': 'paragraph-elemental','class': 'paragraph'	},	'Oli React');

Ambas versiones del ejemplo 2 son validas, solo es cuestión de que la persona lea mejor el código.

Con Funciones: Se usa actualmente y es más cómodo que usar React.createElement()

        function Componente = () => {
            return(
                //Codigo
            )
        }

ReactDOM.render(qué_elemento, dónde) se encarga de renderizar el elemento y colocarlo en el dom. Se pasa por por parametro el elemento a colocar en el DOM y en dónde se quiere colocar

Esto es un componente:

//Componente

        const Componente = () => {
            return (
                //Codigo
            )
        }

        <Componente />

Este es un elemento:

//Elemento

        <h1>Dorime</h1>

Nota: Los componentes son una version traducida de los elementos en HTML a Javascript (JSX).

Props vs Atributos
Cuando estamos trabajando con React, para definir el atributo class, no usamos class sino className. React te puede aceptar class como atributo, pero luego te saldrá advertencias y, de paso, es una mala práctica

Las propiedades las podemos recibir de los parametros de los componentes. Ejemplo:

        <App nombre="Dorime">
        const App = (props) = {
            return (
                <p>{props.nombre}</p>
            )
        }

Tambien podemos recibir children que vienen entre el contenido del Componente.

        <App>
            <p>Dorime, Ameno</p>
        </App>
        const App = (props) = {
            return (
        {props.children}
            )
        }

--

4.-JSX: componentes vs. elementos (y props vs. atributos)

Podemos crear componentes usando:

class componente extends React.component = Aunque ya casi nadie usa esta forma de crear componentes.

function App (){} = Por convención se empiezan con mayúscula.

Se usa “className” en los elementos HTML para evitar confusión entre las clases de JS y las de HTML.

Los componentes son invisibles para HTML pero si son visibles para React y este los puede usar para renderizar de la forma más optimizada posible.

Lo que renderiza react en HTML son los elementos.

Usamos JSX para que con una sintaxis parecida a HTML podamos escribir de manera más entendible el código.

Los componentes pueden tener propiedades haciendo más interactivo el componente. Por ejemplo usando props.saludo.

Usando las propiedades podemos reutilizar un mismo componente muchas veces ahorrándonos trabajo.

Todas las propiedades las podemos mandar de dos formas, como lo vimos en la clase

<App saludo=“Buenas” /> o usando “children” <App>Buenaaaaaas</App>(donde podemos poner también etiquetas de HTML) y usandolo con props.children

## **Todo App**

UI inspirations

https://dona.ai/
