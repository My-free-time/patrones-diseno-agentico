Para esta clase yo necesito

que ustedes descarguen el repositorio que está en el material adjunto.

Pueden hacerle un "fork" al repositorio, trabajarlo desde ahí

descargar el archivo comprimido como ustedes deseen

pero lo mínimo necesario es que por lo menos ustedes tengan una copia del mismo.

Pueden hacer donde dice "Clic aquí para descargar el archivo comprimido".

Ustedes lo descargan y van a tener un archivo

llamado "agentic-patterns-main".

Lo descomprimen y ahora tenemos un directorio

que se va a llamar "agentic-patterns-main".

Lo pueden renombrar a "agentic-patterns"

o el nombre que ustedes quieran darle.

Esta es la carpeta donde nosotros principalmente

vamos a estar trabajando todos estos patrones de diseño.

Por favor, tomen la carpeta

y déjenla caer dentro de su editor de código favorito

lo que sea que ustedes vayan a utilizar.

En mi caso, yo estoy con Cursor.

Ya les voy a explicar cada uno de los archivos y directorios

que están por acá, pero tradicionalmente, cuando ustedes

ven un nuevo repositorio o un nuevo proyecto

siempre váyanse al archivo "README.md" que está ahí.

Ahora, van a poder leer por acá, "Patrones de diseño"

unos títulos que yo le puse por acá, pero quiero que presten atención

en las tecnologías que nosotros vamos a utilizar.

Si ustedes no están familiarizados con TypeScript, posiblemente

van a sentir el curso un poco más complicado de lo que debería.

Realmente no estoy esperando

que sea un curso complicado, porque los patrones de diseño

hay unos que son bien sencillos de entender

y otros que requieren un poco más de comprensión

pero deberíamos de tener unas bases mínimas de TypeScript, porque si no

esto se va a volver innecesariamente complicado

porque van a estar aprendiendo patrones más aprendiendo TypeScript.

Esa no es la idea.

Ahora, la parte de Node

solo la vamos a utilizar para poder ejecutar JavaScript

en el lado de nuestra computadora.

Es decir, cuando ustedes abran la terminal

si ustedes presionan "Ctrl + Backtick"

entonces abrimos esta consola, o bien ustedes pueden venir por acá

"Terminal", "Abrir una nueva Terminal"

como sea que ustedes lo quieran usar.

También es muy probable que sea más conveniente de que ustedes

abran su terminal de Warp o lo que estén utilizando por acá

hagan un "cd" y yo voy a tomar la carpeta de

"agentic-patterns" y la voy a dejar caer por acá

con el objetivo de que si yo quiero ejecutar algo

me sale mucho más fácil para mostrárselos

a ustedes hacerlo desde esta terminal, pero totalmente

a discreción de ustedes si lo quieren hacer

en la terminal integrada de Visual Studio Code.

A veces yo lo voy a hacer por acá, otras veces lo voy a hacer por acá.

Dependerá de lo que yo les quiera mostrar a ustedes.

Nuevamente, esto es más fácil de ver

que la terminal propia de Visual Studio Code.

En fin, para levantar un proyecto

se nos pide que clonemos el ".env.template"

y lo renombremos a ".env", así que hagamos eso de una vez.

Cópiense el ".env.template", "Ctrl + C"

"Ctrl + V" y a la copia le vamos a poner únicamente ".env".

Recuerden que el archivo ".env" son variables de entorno.

Aquí van a ver que hay varias llaves preconfiguradas o

por lo menos, etiquetas

que yo necesito que se llamen así, por ejemplo el de "GROQ_API_KEY".

Yo sé que este es Groq con "q" y más de uno va a decir

"¿No se supone que es con K?".

Esto es un servicio externo

que ya les voy a enseñar a configurar si es que lo quieren usar por ahí.

También tenemos el de OpenAI, tenemos de Anthropic

tenemos de "GOOGLE_GENERATIVE_AI_API_KEY"

que esto es para básicamente Google Gemini.

Les voy a enseñar a configurar todos y también

modelos de Ollama, así que no se preocupen.

Al final de cuentas

ustedes van a seleccionar el modelo con el cual tengan acceso.

Si no tienen ninguno

entonces yo les puedo recomendar unos en la lista

pero ya voy a llegar a la configuración

de cada uno de esos "API Keys".

Por ahora déjenlo así.

Luego, siguiendo el "README.md", se nos pide de que, obviamente

cambiemos las variables de entorno.

Eso lo vamos a hacer en las próximas clases.

Instalar las dependencias mediante un "npm install".

Esas dependencias de Node, digámoslo así

están definidas acá en nuestro "package.json".

Tenemos unas "devDependencies" que son dependencias únicamente

para desarrollar la aplicación, como los "types", "tsx"

que esto es para que nosotros podamos ejecutar

código de TypeScript y mandar variables

y que lo podamos hacer directamente en Node.

En fin, no se preocupen mucho por eso.

Aquí tenemos TypeScript.

Si hay versiones posiblemente cuando ustedes

vean este video versiones mucho más arriba de esto

entonces ya les voy a enseñar cómo actualizar el proyecto

si así lo desean.

Aquí yo tengo todas las dependencias que nosotros vamos a utilizar.

Por ejemplo, si ustedes van a utilizar Anthropic

entonces vamos a usar AI SDK de Anthropic, o si ustedes

lo van a hacer con Gemini, aquí sería AI SDK de Google.

Si lo van a hacer con Groq, aquí sería con Groq.

Aquí sería con OpenAI.

Lo único y desafortunadamente

es que no hay un proveedor directo para Ollama

pero la comunidad se inventó uno que funciona

que es el "ollama-ai-provider-v2".

Por lo menos este es el que estoy utilizando y nos va a funcionar.

Nuevamente, si ustedes quieren usar versiones arriba, adelante

u otras versiones, adelante.

Con tal funcione, ya le vamos a hacer un chequeo al proyecto.

Luego aquí tenemos una dependencia Zod

el cual es sumamente utilizado en la industria.

La última vez que revisé eran como 200 millones de descargas semanales.

Es absurdo.

Si ustedes quieren ver más información de eso

simplemente pueden ir a los enlaces

que les estoy dejando por acá, por ejemplo el de Zod

que es un objeto para validar esquemas.

Déjenme mostrarles.

Solo para que tengan una idea de lo absurdo que es

la descarga de Zod, es 256 millones en una semana.

Es exagerado.

En fin.

También la parte del AI SDK es muy popular y es agnóstico.

¿Qué significa eso?

Que nosotros vamos a poder usar cualquier modelo

que queramos y debería de funcionar.

Miren, 20 millones de descargas en la semana.

Es exagerado.

La tendencia miren cómo va creciendo.

En fin.

Dejemos eso por ese lado. Ya vamos a hacer las instalaciones.

Entonces, en la vida real, yo les pediría a ustedes

que no instalen todas estas dependencias.

En la vida real, ustedes solo usarían las que tengan a su disposición.

O sea, si yo no voy a usar Anthropic, no voy a usar Google

no voy a usar Groq y me voy a quedar con el OpenAI.

O inclusive puede que yo ni siquiera quiera el de OpenAI.

Solo voy a trabajar con Ollama.

Entonces ustedes solo instalarían Ollama.

No hace falta este montón de AI, pero, sin embargo, yo voy a instalar

todas en el proyecto

porque quiero estar haciendo un "switch" entre cada una de ellas

para que ustedes puedan observar los beneficios de cada una de ellas

porque hay agentes más fuertes, hay agentes menos fuertes

y todo eso es un valor educativo muy alto que vamos a tener.

Entonces, siguiendo, tenemos que hacer el "npm install".

Por favor, cópiense esto

abran la terminal que ustedes estén utilizando de la herramienta

o perfectamente también pueden ir a la terminal de Warp

o a la que tengan del sistema operativo

siempre y cuando estén en la carpeta del repositorio

y hagamos el "npm install" o "npm i".

Si ustedes no tenían el "package-lock.json"

ahí va a aparecer, y tenemos las descargas de cada una

de las dependencias que aparecen en nuestro "package.json".

Aprovechando que estamos en este archivo,

la mayor parte de aplicaciones de Node tienen un apartado de "scripts"

los cuales nos van a permitir a nosotros

poder correr nuestro proyecto rápidamente con las dependencias

y todo lo demás.

Presten atención que aquí hay uno llamado "dev"

el cual, al ejecutar "npm run dev"

va a echar a andar el "tsx", configurando las variables

de entorno del archivo ".env" que nosotros ya tenemos

que ahorita no hay ninguno, y va a ejecutar el "src/main.ts".

También tenemos otro "script" importante que es el "watch"

que puede que en algún

caso de un patrón de diseño que vayamos a utilizar o crear

necesitemos estar recargando

cada vez que se hace alguna modificación en el archivo

pero yo se los dejo a ustedes también por ahí.

Los demás son opcionales, porque si se fijan el de "start"

es básicamente el mismo, solo que lo va a ejecutar

desde la carpeta de construcción, es decir, de la carpeta

de distribución que nosotros vamos a tener.

Pero, en general, con el "npm run dev" es más que suficiente.

Ahora, yo si ejecuto este proyecto

va a buscar el "src/main.ts" y esto es lo que va a ejecutar.

Tenemos una función de "helpers".

Tenemos una función llamada "getMessageFromModel"

que debería de fallar porque no tenemos configurado nada.

Vamos a abrir nuestra terminal integrada de Cursor

Visual Studio Code, lo que sea, o inclusive lo pueden ejecutar

directamente desde aquí afuera y hagamos un "npm run dev".

Este comando debería de fallar porque no hay ningún "API Key" configurado

por lo cual no deberíamos de tener ninguna respuesta.

Entonces vamos a ver por acá.

Me dice, "Load APIKeyError", falta el "GROQ_API_KEY".

No lo tenemos, entonces por eso no tenemos

ninguna respuesta de ningún modelo. Fenomenal.

Eso es lo que yo necesito que ustedes tengan en este preciso instante.

En la siguiente clase

rápidamente les voy a explicar lo que nosotros tenemos

y cómo funciona este proyecto

y luego configuraremos cada uno de los modelos para que ustedes usen

el de su preferencia.

Los veo en la próxima clase.