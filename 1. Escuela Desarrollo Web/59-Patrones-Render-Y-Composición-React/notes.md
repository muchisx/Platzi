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

## **Qué es composición de componentes y colocación del estado**

Un componente en React está conformado por elementos que son etiquetas HTML, estos componentes pueden ser solo estéticos(stateless) o pueden ser interactivos(stateful). Para que los componentes interactivos respondan y hagan una algo podemos programar todo lo que hace dentro de él o, en otro caso, si lo que hace depende de otro componente, entonces tenemos que poder recibir estos datos de alguna manera.

Para enviar datos de un componente a otro usamos props que viajan desde el componente más arriba en la anidación hasta el componente objetivo, por el camino estas props pueden pasar por componentes que no las van a usar o simplemente son stateless( solo estéticos ), esto puede afectar el rendimiento y es un poco enredado. Para evitar esto tenemos 2 formas el contexto y la composición de componentes.

El contexto hace que el componente que tiene que recibir la información la reciba directo del que la envía( es como una relación uno a muchos ) Lo malo del contexto es que añade un poco de complejidad a nuestro código.

La forma recomendada por React es la Composición de Componentes. Según el modelo atómico: cuando agrupamos varios componentes tenemos moléculas y luego si agrupamos varias de estas tenemos organismos y así hasta construir templates y páginas. Entonces sí tomas todos los componentes de tu app y los traes al componente App, todos en un solo archivo con sus correspondientes anidaciones y jerarquías, tendríamos una composición de componente enorme, pero si además escribes los estados y se los pasas a los componentes que los necesitan, estaríamos logrando lo que queríamos hacer.

Un archivo con una composición de componentes tan grande es complicado de entender, por esa razón en función de las necesidades de mi app haría composición de componentes en el nivel organismo y luego en función de la cantidad de organismos que tenga vuelvo a hacer composición de componentes en el nivel template y así sucesivamente hasta llegar al componente App con una composición de componentes de muchas Pages (dado el caso)

Incluso haciendo esto necesitaría usar Contexto entre composiciones para evitar el uso de props (aunque no es malo usarlas cuando su trayecto es corto). La implementación es muy relativa pero sin duda la composición de componentes juega un papel fundamental en la construcción de UI con React.

## **Composición y colocación del estado en React**

En resumen:

⭐️ Cuando los componentes nietos de App no solo son nietos, sino también componentes hijos, podemos pasarles props directamente y mejorar su comunicación.

–

Casi siempre que llamamos a un componente… pos lo llamamos y ya. 😅

        function App() {
        return (
            <TodoHeader />
        );
        }

        function TodoHeader() {
        return (
            <TodoCounter />
        );
        }

Esto implica que para compartir el estado debemos pasar props y props y props por cada componente intermedio entre App y los componentes que realmente necesiten esas props en cualquier lugar de la jerarquía. 😓

        function App() {
        const [state, setState] = React.setState(initialState);

        return (
            <TodoHeader state={state} setState={setState} />
        );
        }

        function TodoHeader({ state, setState }) {
        return (
            <header>
            <TodoCounter state={state} setState={setState} />
            </header>
        );
        }

Pero otra forma de trabajar es que App no solo llame a sus componentes directamente hijos, sino que también llamen a los siguientes componentes en la jerarquía de la aplicación. 😮

        function App() {
        return (
            <TodoHeader>
            <TodoCounter />
            </TodoHeader>
        );
        }

        function TodoHeader({ children }) {
        return (
            <header>
            {children}
            </header>
        );
        }

Y esta nueva forma de trabajar implica que ya no tenemos que pasar props y props y props entre App y el resto de componentes para compartir el estado, sino que App puede comunicarse directamente con el componente que realmente necesita ese estado. 🤩

        function App() {
        const [state, setState] = React.setState(initialState);

        return (
            <TodoHeader>
            <TodoCounter state={state} setState={setState} />
            </TodoHeader>
        );
        }

--

## **React.Children y React.cloneElement**

11.-React.Children y React.cloneElement

Para poder pasar propiedades especiales a los componentes hijos de nuestros componentes contenedores cuando hacemos composición.

Cuando enviamos más de un componente o elemento hijo al que use CloneElement, la app deja de funcionar y suelta un error. CloneElement necesita recibir un elemento de react, cuando children es más de un componente entonces tenemos un array, para esto existe React.Children que nos ayuda a que CloneElement entienda sin importar cuantos elementos vienen en el props.children.

        function TodoHeader({ children, loading }) {

        return (
            <header>
            {React.Children.toArray(children).map((child) =>
                React.cloneElement(child, { loading: loading })
            )}
            </header> //Por cada child vamos a llamar a clone element.
        ); //Crear elemento a partir de otro (elemento, objeto con las props que queramos que tenga)
        }

No son las herramientas más populares pero pueden ser muy útiles cuando queremos compartir una o ciertas props a los componentes hijos de un componente contenedor.

--

React.cloneElement

Con esta característica de React podemos crear elementos de Nodos React

Cabe aclarar que esta funciona con un unico nodo, en caso de aplicarla en un conjunto de los mismos podemos ayudarnos de React.Children

React.Children

Nos permite manipular la prop children entre uno de sus usos podemos volver un conjunto de nodos react a un array