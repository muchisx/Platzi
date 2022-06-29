# Curso de Gestión de Dependencias y Paquetes con NPM

[img](https://static.platzi.com/media/user_upload/JS%20%E2%80%93%2031-dd8defe4-29bf-4bb9-8260-07fb80d965bc-81e296f1-6370-44e0-8e6d-fe1946826aba.jpg)


[img](https://static.platzi.com/media/user_upload/npm-9cda5bab-e878-4672-b1a7-101a355f255d.jpg)

Demonio: Servicio que corre en segundo plano en el sistema

https://docs.npmjs.com/files/package.json.html#dependencies

--


Instalación de Dependencias
en nuestro proyecto jsnpm creamos una carpeta con mkdir src que es donde va a vivir todos los archivos que van a consumir todos los recursos que hemos instalado

despues creamos un archivo con touch index.js

ahora hay que hacer pwd que nos indica la ruta donde estamos ya que las dependencias se deben instalar en nuestra carpeta raíz de nuestro proyecto y entonces nos movemos a esta raiz

ahora para instalar un paquete, es aquí donde tomamos la decisión de como lo vamos a ejecutar,

ahora al momento que instalamos el primer paquete se nos creara una carpeta node_modules aqui se instalaran lo modulos que estamos agregando a nuestro proyecto y sera necesaria para que este funcione, pero no debe ser enviada a ningun repositorio ni a nuestro proyecto a produccion y por eso debemos ignorarla al nos mas se cree y para ello creamos un archivo .gitignore en la carpeta raiz y dentro de este escribimos node_modules/

npm install <package> este por defecto se instala como una dependencia requerida para el proyecto es decir que el paquete que instalas es necesario para vivir en produccion esto tiene otras variantes como npm install <package> --save aqui la palabra save se tomara por defecto y no es necesario escribirla o npm install <package> --S como ejemplo instalaremos npm install moment para manejar fecha en javascript o con el shortcut npm install moment --S

    "moment": {
        "version": "2.29.1",
        "resolved": "https://registry.npmjs.org/moment/-/moment-2.29.1.tgz",
        "integrity": "sha512-kHmoybcPV8Sqy59DwNDY3Jefr64lK/by/da0ViFcuA4DH0vQg5Q6Ze5VimxkfQNSC+Mls/Kx53s7TjP1RhFEDQ=="
        }

npm i <package> -D (este es con shortcut) o npm install <package> save-dev este flag nos va a permitir establecer que el paquete a instalar solo es necesario en nuestro entorno local o el entorno de desarrollo ejem: vamos a instalar una dependencia que maneja fecha y datos npm install date-fns save-dev

    "dependencies": {
        "date-fns": {
        "version": "2.16.1",
        "resolved": "https://registry.npmjs.org/date-fns/-/date-fns-2.16.1.tgz",
        "integrity": "sha512-sAJVKx/FqrLYHAQeN7VpJrPhagZc9R4ImZIWYRFZaaohR3KzmuK88touwsSwSVT8Qcbd4zoDsnGfX4GFB4imyQ==",
        "dev": true
        }

npm install <package> -g instalar un paquete de forma global, esto nos permite que podamos utilizar este paquete en diferentes proyectos por lo general se deben instalar estos paquetes con permisos de administrador. Ejem. sudo npm install -g nodemon nos permite generar un demonio que va a estar siempre escuchando algun cambio o algun valor y nos va dejar mantener en nuestro proceso algun comando que estemos ejecutando de node

Guia para no esta colocando permisos de administrador a cada rato https://docs.npmjs.com/resolving-eacces-permissions-errors-when-installing-packages-globally

npm list -g—depth 0 (depth es la profundidad que va a buscar dentro de los paquetes) ver los paquetes que están instalados de forma global

    /usr/lib
    ├── nodemon@2.0.6
    └── npm@6.14.8

npm list es para listar los paquetes que tienen un proyecto en especifico

npm install <package> -O podemos instalar de forma opcional un paquete con este comando ejemplo instalaremos eslint para correcciones de codigo en JS npm install eslint -O y cuando finalizamos siempre nos un output de mensajes y tiempos de ejecucion en este ejemplo

//nos disce que podemos donar y que ejecutamos npm fund para apollar
//a los desarrolladores

10 packages are looking for funding
  run `npm fund` for details
npm install <package> --dry-run (simula la instalación) este flag indica que el paquete no va a ser instalado dentro del proyecto simplemente es una simulación nada mas nos muestra el output como si fuere instalado, despues de esto nosotros decidimos si la instalamos o no ejem: npm install react --dry-run
npm install <package> -f o npm install <package> --force instalar algún paquete de forma forzada y nos va a permitir instalar este paquete forzándola a que sea desde el ultimo recurso o version y desde el servidor de NPM ejemplo npm install webpack -f si nos vamos al archivo package.json y vemos que el paquete se instalo en las dependencies pero estas deberieron estar en devdependencies podemos tomar el nombre de ese paquete cortarlo y pegarlo en el grupo que corresponda

//asi se instalo en dependecies

    "dependencies": {
        "date-fns": "^2.16.1",
        "eslint": "^7.12.1",
        "moment": "^2.29.1",
            "webpack": "^5.3.2"
    },
    "devDependencies": {
        
    },

//nosotros lo cortamos y lo pegamos en devDependecies

    "dependencies": {
        "date-fns": "^2.16.1",
        "eslint": "^7.12.1",
        "moment": "^2.29.1"
        
    },
    "devDependencies": {
        "webpack": "^5.3.2"
    },

npm install si nosotros queremos volver a instalar todas las dependencias que están en el package.json
npm install <package>@<version> para instalar algun paquete con una versión específica, esto puede ser necesario cuando tenemos que darle mantenimiento a una app con una version anterior de algun paquete o quizas las version actual es beta, etc. ejem: npm install json-server@0.15.0


## **Cómo actualizar y eliminar paquetes**

Actualizar paquetes

Revisar que paquetes disponen de nuevas versiones

    npm outdate

Para ver un output más detallado

    npm outdate --dd

Actualizar los paquetes que no están en la ultima versión

    npm update

Actualizar un paquete especifico

    npm install json-server@latest

Eliminar paquetes

Eliminar un paquete de node_modules y del archivo package.json

    npm uninstall json-server

Desinstalar un paquete de todo node_modules pero no del archivo package.json

    npm uninstall webpack --no-save


## **Package lock y el uso los símbolos ^ y ~**

El archivo package-lock.json describe todo el árbol de dependencias de cada paquete instalado. Cuando alguien hace fork de un repositorio no tiene el directorio node_modules.

Con el comando npm install se instalarán las dependencias indicadas en el package.json con la versión indicada. También, se instalarán las sub-dependencias indicadas en package-lock.json con la versión indicada. Pero, ¿qué significan estas diferentes versiones en cada dependencia?

Versionado de paquetes

El versionado de paquetes está conformado por tres valores:

Major: el valor que muestra la versión que contiene los cambios importantes del paquete

Minor: el valor que muestra la versión que contiene los cambios en funcionalidades, pero no representan un cambio significativo

Patch: el valor que muestra la versión que contiene cambios rápidos para solucionar problemas de seguridad o bugs


[img](https://static.platzi.com/media/user_upload/wheelbarrel-no-tilde-caret-white-bg-w1000-72ca1a72-4c7f-4abe-8482-425c01a72f89.jpg)

Símbolos ^ y ~ para actualizar las versiones minor y patch

Existen dos símbolos que acompañan a este versionado, que sirven para actualizar las versiones minor y patch del paquete:

Caret (^): Permite actualizar las versiones minor y patch

Tilde (~): Permite actualizar las versiones patch

Por ejemplo, tenemos la versión “5.2.3”:

Si tiene el carret ^, actualizará la versión minor y patch, por lo que tendrás versiones como “^5.3.3”, “^5.4.3”, “^5.4.4”, etc.

Si tiene la tilde ~, actualizará la versión de patch, por lo que tendrás versiones como “~5.2.4”, “~5.2.5”, “~5.2.6”, etc.

Lo recomendable es quitar estos símbolos y tener la versión exacta para evitar problemas de versionado, principalmente con paquetes que los mantienen pocas personas o no son fiables.

## **Ejecutar tareas**

El apartado de "scripts" en el package.json es el que indica los comandos a ejecutar del proyecto. Esta sección es la que utilizarás para crear comandos que optimicen el desarrollo de tu aplicación.

Crear un comando en tu proyecto

Para crear un comando en tu proyecto sigue la siguiente estructura, donde <nombre> es el nombre del comando que debería ser muy descriptivo y <comando> es el comando que utilizarías en la terminal:

    {
        "scripts": {
            "<nombre>": "<comando>"
        }
    }

Una vez hayas escrito el comando en el archivo package.json, la manera de ejecutarlo será con el comando npm run.

Por ejemplo, creemos tres comandos para iniciar el proyecto (start), crear un archivo para producción (build) y combinarlos (deploy). Que no te preocupe si no entiendes cada comando, solo entiende cómo ejecuta NPM el script.

    {
        "scripts": {
            "start": "webpack-dev-server --open --mode development",
            "build": "webpack --mode production",
            "deploy": "npm run format && npm run build"
        }
    }

Y para ejecutarlos, es necesario utilizar el comando pertinente en la terminal:

    $ npm run start
    $ npm run build
    $ npm run deploy


--

uedes también especificar scripts con el prefijo **“pre”** que se ejecutarán automáticamente antes del comando que ejecutaste. Por ejemplo, si defines el comando build y prebuild, cuando corras npm run build el comando prebuild se ejecutará primero. Esto sirbe para poder ejecutar tareas que hagan algún tipo de preparación necesaria para correr el comando principal. Sin embargo, hay que hacer notar que si el comando pre falla (retorna un valor que no es 0) el comando principal no se ejecutará. Esto es algo bueno ya que si nuestro proceso de preparación no se realiza de forma exitosa, puede que tengamos problemas al querer ejecutar la tarea principal.

En algunas ocaciones, sin embargo, la tarea previa puede fallar sin que eso afecte la ejecución de la tarea principal. En esos casos puedes usar || exit 0 para retornar 0:

    "presass-build": "(rm css/*.css; rm css/*.css.map) || exit 0"

Ese es un ejemplo de un comando que hice hace un tiempo. rm puede fallar si el directorio css está vacio, y en ese caso no hay problema, la tarea principal puede funcionar sin ningún problema ya que presass-build tiene el propósito de vaciar ese directorio.

## **Solución de problemas en proyectos con NPM**


En caso de que nuestros archivos de node_module no estén bien instalados o tengamos una versión anterior lo que podemos hacer es lo siguiente:

    npm cache clear --force

#Para verificar que verdaderamente se borro podemos usar

    npm cache verify

Uno de los errores que podemos tener es tener algún valor corrupto en node_module, o tambien que la instalación no este completa de los paquetes que hemos instalado, para ello podemos eliminar el paquete con el siguiente comando:

    rm -rf node_modules 
    
este comando eliminar la carpeta 

Otra alternativa para eliminar de forma segura una carpeta es instalando el siguiente paquete:

    sudo npm install -g rimraf

Ahora podemos ejecutar el siguiente comando para eliminar node_module

    rimraf node_modules 

#Ahora podemos volver a instalar nuestro paquetes

    npm install


## **Gestionar la seguridad en proyectos con NPM**

Podemos revisar las vulnerabilidades de nuestro proyecto con:

    npm audit
En caso de tener vulverabilidades, se recomienda usar el comando:

    npm audit fix

Y en caso de que esto no lo solucione, podemos ir actualizandolos de uno en uno.

--

npm audit para ver las vulnerabilidades que tenemos en nuestro proyecto

npm audit --json nos genera un json con información un poco mas detallada de lo que esta pasando con estos paquetes que instalamos

una ves sepamos cual es la vulnerabilidad podemos proceder a actualizar cualquiera de los paquetes ejem: npm update eslint-utils --depth 2 esto para instalar todas sus dependencias

nom audit fix es para solucionar las vulnerabilidades que tengamos en nuestro proyecto básicamente, actualiza a la ultima version nuestros paquetes con las dependencias que requieren, después de esto volvemos a correr npm audit para ver que ya no tenemos vulnerabilidades.

también hay una herramienta que garantiza que estemos siempre actualizados con nuestras dependencias del proyecto y es snyk.io

http://snyk.io/

--

La seguridad de tu proyecto puede ser vulnerada por paquetes desactualizados, ya que estas inseguridades son resueltas en versiones minor o patch. Al momento de instalar tus paquetes con el comando npm install puede mostrar advertencias (NPM WARN) de las dependencias desactualizadas.

Auditar tus dependencias

El comando npm audit muestra una descripción de las dependencias instaladas, si se encuentran vulnerabilidades, se calculará el impacto al proyecto.

El comando npm audit fix proporciona una actualización de los paquetes, similar al comando npm update <paquete>. Si se requiere un informe más detallado en formato JSON, utiliza el comando npm audit --json.