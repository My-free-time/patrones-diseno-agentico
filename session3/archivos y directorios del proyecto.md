En la clase anterior medio ojeamos el "main.ts"

y sabemos que aquí mandamos a llamar la función "getMessageFromModel"

que todavía no sé qué es lo que hace e implementación todavía no sé nada.

Ya voy a empezar a hablar con ello.

Bien.

Hablemos de cada uno de los archivos y directorios

que tenemos en este proyecto simplemente

para que ustedes sepan qué es, dónde modificarlo y cómo les va a servir.

Principalmente, teníamos la carpeta de agentes

la cual tiene la "skill" del SDK de Vercel

para poder trabajar con agentes

de inteligencia artificial de manera agnóstica.

Es decir, ustedes puede que ocupen esto

si van a trabajarlo con Claude, OpenAI, Codex

o alguna herramienta de inteligencia artificial, algún "harness".

Luego tenemos los módulos de Node.

Los módulos de Node son las dependencias de desarrollo

y producción que tiene nuestro proyecto.

El "src" es donde está la mayor parte del

código que nosotros vamos a escribir.

En el ".env" tenemos variables de entorno

que ya las tenemos que configurar para que esto funcione.

El ".env.template"

es simplemente un cascarón que yo se los facilité

el cual sí lleva un control de versiones.

El ".env" no.

El ".gitignore" son todos los archivos que nosotros

no queremos darle seguimiento a nuestro repositorio.

El "package-lock.json" es cómo se construyó nuestro proyecto

con las dependencias para nuestro equipo.

Ustedes le pueden dar seguimiento o no.

La verdad es que aquí hay una discusión.

Yo prefiero no darle seguimiento

para que se instalen dependiendo de la computadora de ustedes.

El "package.json", ustedes ya saben, esto es un proyecto

para aprender patrones de diseño.

Esto es lo que usa Node.

Aquí están las dependencias de desarrollo

la versión de Node, variables

y si yo quiero subir esto en un paquete

es básicamente una metadata de este proyecto

con sus dependencias de desarrollo

y las dependencias de producción más los "scripts" para ejecutar.

El "README" que ya hemos estado viendo

usualmente se usa para que definamos

cómo se echa a andar el proyecto

cómo se pone en producción, generalidades, para qué sirve y demás.

Que de hecho

si ustedes quieren actualizar las dependencias

aquí yo les dejo a ustedes los pasos tradicionales para hacerlo.

Pueden hacer un "npm update", o si ustedes quieren

actualizar únicamente un paquete lo pueden hacer así.

Pueden jugar el "npm outdated" para ver cuáles dependencias

ya están obsoletas

o hay versiones mayores, que lo más probable

es que siempre van a haber dependencias mayores.

Inclusive, si ustedes lo hacen hoy, mañana

ya hay dependencias actualizadas.

Y si ustedes quieren actualizar a versiones mayores

pueden usar el "npx update" o "npx check-updates"

para actualizarlo y luego tienen que hacer un "npm install".

Pero aquí la verdad yo traté de mantener las dependencias al mínimo

para poder enfocarnos en los patrones.

Aquí tenemos el "skills-lock.json" que es similar al "package-lock.json"

el cual mantiene una relación con las dependencias, pero de habilidades

porque esto es una habilidad que yo descargué de "skills.sh".

Igual no hace falta comprender mucho de esta parte de las "skills".

Simplemente este archivo ayuda a mantener actualizado

ese de las "skills.sh", las "skills" del AI SDK.

Luego tenemos el archivo de configuración de TypeScript

que esto nos va a ayudar simplemente para tener el tipado estricto

que si hacemos algo mal se queje.

En fin, en pocas palabras, que TypeScript nos ayude en el desarrollo.

Ahora, dentro de la carpeta "src"

ya medio ojeamos el "main", ya voy a explicar

qué es lo que tenemos por acá que no es muy complicado.

Esto limpia la consola

y aquí mandamos a llamar la función "getMessageFromModel"

pero ya voy a llegar a eso en unos momentos.

Empecemos por la carpeta de "patterns".

Aquí literalmente no hay nada.

Hay un archivo llamado ".gitkeep" que esto es porque

no sé si ustedes saben

pero Git no le da seguimiento a carpetas que no tienen contenido

por lo cual se crea el archivo ".gitkeep"

simplemente para que ese directorio

ustedes lo tengan a la mano y no lo tengan que crear.

Pero aquí es donde vamos a ir creando subdirectorios

con cada uno de los patrones que vamos a ir viendo.

Luego tenemos la carpeta "helpers" en el cual tenemos varios archivos.

Hay unos que son más complicados que otros.

Empecemos con el de "selected-model.ts".

Por aquí yo dejé un listado de todos los modelos.

Por defecto tenemos a Groq, sí Groq con Q, no con K.

Tal vez les sonará raro

pero este es un servicio que nos va a permitir a nosotros

poder hacer ciertas pruebas

sin necesidad de meter nuestra tarjeta de crédito

y sí, obviamente tiene ciertas limitaciones

pero por lo menos vamos a poder probar una que otra cosa con Groq

antes de que ustedes digan, "¿Sabes qué?

La verdad es que sí puedo pagar unos USD$5 para probarlo".

Pero la idea es

que configuremos todos, porque ustedes puede ser que ya tengan

unos "tokens" ahí en Anthropic o ya tengan su suscripción de OpenAI

o podemos trabajarlo con Google Gemini

que también es bien generoso si ustedes ya tienen

algún tipo de servicio con Google.

Posiblemente tengan algún espacio para utilizar lo que es Gemini.

O bien, si no quieren ninguno de esos, también vamos a configurar

Ollama, pero si se fijan es básicamente lo mismo.

Aquí tenemos la importación de Groq, la importación de Anthropic

la instalación de los mismos, OpenAI, Google y la parte de Ollama

como les mencioné, es que no es un paquete oficial del SDK.

Simplemente es un paquete comunitario, pero funciona igual.

Aquí nosotros seleccionamos el modelo y, dependiendo

de lo que nosotros queramos, van a ver que

aquí tenemos modelos de OpenAI, tenemos de Anthropic y demás.

Simplemente se seleccionan.

Si ustedes quieren pueden borrar esto, presionen "Ctrl + Espaciadora"

y van a ver que aquí tiene un montón de modelos.

Obviamente los modelos

que aquí aparecen van a depender de la versión del paquete

porque algunos ya no existen, otros se reemplazan.

Entonces lo que ustedes están viendo

en este momento puede que existan o puede que no.

Hay modelos como el "gpt-oss-120b"

o el de 20 billones que se mantienen porque, lo más probable

es que se queden ahí por mucho tiempo porque son modelos gratuitos.

Modelos que podemos ejecutar

directamente y ya están empaquetados de esa manera.

En fin, no se preocupen mucho por eso.

La idea de este archivo literalmente es que ustedes puedan seleccionar

cuál es el modelo y ese es el modelo que van a usar en todos los patrones.

Si ustedes quieren cambiar o quieren probar

dos modelos en particular podríamos ponerle aquí

"modelo 2", "modelo 3" y ya está.

Pero este es el modelo que ustedes

exportan en este archivo, es el modelo que vamos a utilizar.

Luego tenemos por acá ahora el de "string-colors".

"string-colors" no es más que unas funciones "helpers" que creé

con el objetivo de que en la consola se mire algo con colores más bonito

y no quise instalar un paquete de colores que existe.

Simplemente lo quise hacerlo y ya está.

Son unos cuantos colores

que tenemos a nuestra disposición con los "strings".

Luego el archivo más complicado que tenemos por acá es el "create-tracer"

que no pretendo de que ustedes lo comprendan de entrada

pero es un archivo que se conecta a las funciones

de generación que tiene el SDK de Vercel

y nos permite poder hacer lo que se conoce como un "tracer".

Es decir, en vez de tener una única respuesta

del modelo de inteligencia artificial nosotros vamos a ver su pensamiento.

"Ah, aquí me está pidiendo esto.

Ah, tal vez pueda hacer esto otro.

Ah, me dijo que hablara en español".

Nosotros vamos a poder ver este "chain of thought" de nuestro modelo

lo cual va a ser particularmente útil porque a veces

las respuestas pueden demorar un poco dependiendo del patrón.

Podemos ir viendo lo que está

pensando el modelo en ese momento antes de darnos el resultado.

Esto es totalmente opcional y yo lo creé

para que ustedes puedan ver cuál es el nombre de las herramientas.

Se pone en color amarillo, pone el nombre de la herramienta

y lo que tenemos en ese momento o lo que está pensando.

Entonces no es necesario que ustedes tengan esto.

Al final lo que hace es regresar cuántos pasos

pasó, valga la redundancia, y el total de "tokens" consumidos.

También esos pasos y el total de "tokens" lo tengo por acá.

Entonces es básicamente una función que crea nuestro "tracer".

Eso es básicamente todo.

No hace falta que ustedes lo comprendan.

Lo más importante es que ustedes lo puedan utilizar.

Esos son todos los archivos que tenemos por ahí.

En nuestras acciones tenemos tres funciones.

Una de ellas

es la que ustedes tienen en el "root", el cual es el "getMessageFromModel".

Por aquí ustedes van a ver que tenemos el texto de respuesta, el uso

y mandamos a llamar la función de "generateText".

En este caso le digo, responde todo "OK"

para que nos responda el modelo, "Estoy listo para trabajar".

Cuando ustedes tengan esta respuesta

"OK" ya eso es todo lo que hay que hacer.

Ya podemos empezar con la sección de patrones o nuestro primer patrón.

Pero aquí ustedes van a notar que tenemos el modelo seleccionado

el de OpenAI, el de Anthropic, Gemini, Ollama, lo que sea.

Esto es básicamente el archivo que tomamos de los "helpers".

Por aquí tenemos un mensaje en consola.

Esto sería básicamente todo.

Por acá tenemos otra segunda función que es básicamente lo mismo

solo que aquí explica cómo vamos a usar el "tracer".

Van a ver que aquí estamos mandando a llamar la función de "createTracer"

y este "createTracer" es lo que yo se los estoy mandando.

Déjenme mostrarles.

Vamos a ver, se me perdió.

Aquí está.

Aquí se lo estamos mandando en este punto.

Aquí lo creamos y le ponemos "getMessageFromModel".

Este "label" nosotros se lo ponemos para identificarlo visualmente

en la consola y ese "tracer", el que nosotros creamos acá

simplemente se lo mandamos por acá para poder estar observando lo que va

pensando el modelo cuando yo le dije, responde únicamente "OK" a todo esto.

Al final, con el "tracer" nosotros podemos ver el resumen

la cantidad de pasos y la cantidad de "tokens" consumidos.

Eso es lo interesante de este "tracer".

Luego por acá es muy probable de que más de uno necesite esta función.

Yo puse el "getMessageFromModelFailSafe"

el cual es un "troubleshooting" que ustedes pueden utilizar

si fallan los pasos anteriores.

Igual yo se los voy a mostrar cómo ejecutar todo esto.

Pero la idea de esta función es que automáticamente se evalúe

para que les pueda decir a ustedes claramente si les falta algo

si el "API Key" la están utilizando, si no está definido, si hay algún

problema de autenticación, si ya expiró, si la cuota ya se la consumieron

si no encontraron el dominio o el modelo.

Entonces la idea de esta función simplemente es que les ayude a ustedes

a poder determinar si no le está funcionando

sus modelos de inteligencia artificial y el por qué.

Esto es básicamente

lo que hace esta función y ustedes la pueden leer y determinarla.

Esto es básicamente lo que nosotros tenemos actualmente en el proyecto.

De nuevo, si ustedes quieren pasen un rato para familiarizarse, digámoslo así

con lo que tenemos por acá, pero si no, no se preocupen.

Todo esto yo lo voy a ir haciendo poco a poco en las próximas clases.

Lo siguiente que tenemos que configurar

van a ser nuestras variables de entorno.

Entonces voy a ir poco a poco desde el servicio más fácil

que puede ser el de Groq, que aquí no pide

tarjeta de crédito ni nada, pero el límite posiblemente nos

lo consumamos muy rápido si ustedes están bombardeando el AI.

Pero de igual manera solo ocupo que ustedes tengan uno funcionando mínimo.

En las próximas clases yo voy a configurar

cada uno de estos proveedores más Ollama.

Nos vemos en los siguientes videos.


