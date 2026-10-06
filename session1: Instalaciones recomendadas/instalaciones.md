https://gist.github.com/Klerith/80938f50378cd97d23d8b6403142d09c


Antes de comenzar con el curso

les voy a pedir que, por favor, vayan al material adjunto.

Ustedes tienen un Gist

que los lleva a las instalaciones que yo necesito que tengamos

para seguir el curso al pie de la letra.

Primeramente, ustedes van a ocupar un editor de código.

No importa cuál sea.

No es algo especializado que lo hagan en Cursor, Visual Studio Code

Windsurf,lo que sea. No importa.

Ustedes simplemente necesitan un editor de código

en el cual puedan editar

ciertas líneas y escribir código de TypeScript.

Eso es lo que necesitamos en este momento.

Si ustedes quieren usar Visual Studio Code o Cursor

simplemente lo descargan. "Next", "Next" y ya está.

Ahora, en unas clases y patrones en particular

yo les voy a pedir que usemos ciertas configuraciones de Git.

Yo les voy a dar los comandos y todo lo necesario

para que ustedes lo puedan hacer con Git

a pesar de que puede que ustedes sepan mucho más Git que yo

o puede que no sepan nada de Git.

Entonces, yo los voy a guiar en ese proceso, pero no se preocupen.

Lo primero que necesito es asegurarme de que ustedes tengan Git instalado.

Pueden abrir su terminal, ventana de comandos, PowerShell de Windows

lo que sea que ustedes usen para ejecutar sus comandos

y escriban "git --version". Presionen "Enter".

Con que tengan cualquier respuesta arriba de la "2"

es más que suficiente.

No tienen que reinstalar y tener la última versión si así lo desean.

Pero si aquí les dijera que el comando de Git no es reconocido

o el comando interno o externo

no se reconoce por alguna x o y razón, entonces van a irse al enlace

que está ahí de Git.

Ustedes lo descargan para su sistema operativo.

Si ustedes están en Linux, si están en Windows

aquí les va a decir que estoy en Linux o estoy en Windows.

Lo descargan.

"Next", "Next", "Next".

En Windows hay un montón de "Next".

Y una vez ustedes terminan de hacer la instalación

tienen que ejecutar estos dos comandos.

"git config --global user.name" y tu nombre.

Obviamente, van a ponerle aquí los dobles guiones

y entre comillas su nombre.

Es decir, ustedes copiarían esta línea. "Ctrl + C".

Se van a su terminal.

La pegan.

Y por aquí ustedes tendrían que poner, obviamente

su nombre.

Y ya está.

Eso sería todo.

Si ustedes no tienen ningún mensaje de error,

significa que lo hizo apropiadamente.

Si todavía dice que el comando de Git

no se reconoce, simplemente cierren la terminal.

Vuelvan a abrir después de la instalación

o en su defecto, reinicien el sistema operativo.

Y lo mismo van a hacer con la parte del "user.email".

Aquí ustedes no tienen que tener registrado su correo en ningún lugar.

Simplemente, asegúrense de que sea su correo electrónico y ya está.

No hay que validarlo en ningún lugar.

Ahora, este es un curso donde nosotros vamos a estar trabajando con Node.js

para ejecutar el código, por lo cual es necesario tener Node.

Puede ser Node. Puede ser Bun. Puede ser Deno.

Puede ser cualquier "runtime"

que nos permita correr JavaScript en el lado de nuestro servidor.

Yo les recomendaría que lo hagamos en Node.

Es mucho más fácil de seguir y hay formas de instalarlo.

La forma más sencilla es que ustedes vengan por acá.

Seleccionen Windows, Linux o lo que estén utilizando.

Lo descargan.

Descargan el binario.

"Next", "Next", "Next" y ya está.

Si ustedes quieren usar Node Version Manager, adelante.

Lo pueden hacer.

Que esto serían las instrucciones, pero ahí ya requiere un poco

más de conocimiento.

Aunque no es muy complicado

yo trabajo más con Node Version Manager.

Pero, de nuevo, lo único que necesito es que ustedes

tengan una versión compatible de Node.js.

Esa versión compatible cambia con el tiempo.

Ustedes asegúrense de tener una versión medio actualizada

y es más que suficiente.

Para eso, simplemente escriban "node --version"

y asegúrense de tener una respuesta similar o superior a la mía.

Eso es más que suficiente.

No hace falta que tengan la última versión de nuevo

porque no vamos a estar trabajando con

características especializadas de Node.js.

Simplemente lo vamos a utilizar para poder ejecutar

el código que se conecta y comunica con nuestros modelos.

Ahora, una terminal que ustedes vieron

la que yo estoy utilizando, usualmente siempre me preguntan cuál es.

Es esta. Se llama Warp.

Yo se las dejo a ustedes en el material adjunto también

como un enlace.

Como un enlace de referidos, por cierto.

En el caso de que ustedes no quieran darme, digamos

ayudar con los referidos, simplemente escriban "app.warp.dev" y ya está.

No hay que hacer nada más. Ustedes simplemente la instalan.

Está para Windows, para Linux y, obviamente, para macOS X.

Y ya está.

Ahora, si ustedes quieren ejecutar modelos locales

que eso es algo que yo voy a enseñarles también

a ustedes a usar, vamos a ocupar Ollama.

Van a ver que aquí tengo un montón de "ping"

porque he estado haciendo unas pruebas

para asegurarme de que esto funcione.

Pero, básicamente, Ollama nos va a permitir a nosotros poder

ejecutar modelos de inteligencia artificial en nuestra computadora.

Así nos ahorramos los "tokens" o cuotas en servicios

como Anthropic, de OpenAI o de Gemini.

Entonces, de nuevo, vamos a tener más adelante en la siguiente sección

videos dedicados para la instalación y configuración de Ollama

y cómo hacer que el proyecto funcione con Ollama.

Es sumamente sencillo, pero vamos a ocupar tener Ollama instalado.

Entonces, por favor

si ustedes ya se anticipan que van a usar modelos gratuitos de Ollama

que yo les recomendaría a todo el mundo

que tenga una computadora con más de 8 GB de RAM

por favor, si quieren, pueden hacer esto.

Simplemente vayan.

Hagan clic en el enlace de Ollama. Ustedes lo descargan.

Nuevamente es "Next", "Next", "Next" y listo.

Nuevamente, yo les voy a enseñar a ustedes

cómo ejecutar la parte de los modelos

localmente cuando sea la clase respectiva.

Por ahorita, con que lo tengan instalado, lo abran y luzca

más o menos así, es más que suficiente por este video.

Luego, yo también les dejo a ustedes una hoja de atajos.

De nuevo, un pequeño "disclaimer" por ahí.

Esta hoja de atajos puede cambiar con el tiempo porque la estructura

la manera de hacer "copy paste" de los mismos, los íconos

o puede que yo añada más patrones en un futuro.

En fin.

Esta hoja puede cambiar, pero ustedes la pueden tener a la mano

porque yo la voy a estar utilizando para empezar a trabajar

y exponer cada uno de estos patrones.

Ya van a ver cómo lo vamos a resolver. No se preocupen.

Ya ustedes van a tener una noción de cómo trabajaremos el curso.

Esto, por lo menos, les va a servir a ustedes para

tener una noción de los patrones que vamos a estar tocando en el curso.

La pueden descargar. La pueden imprimir y ya está.

Mi tema de Visual Studio Code, que también funciona en Cursor, es este.

Es Tokyo Night.

Mi set de íconos que siempre me preguntan es Material Icons.

Ustedes lo pueden descargar.

Los invitamos, de nuevo

a la comunidad de DevTalles que tenemos en Discord.

Totalmente gratuita. Moderada, por cierto.

Si ustedes quieren hablar

con otras personas que también están aprendiendo esta

y otras tecnologías que nosotros enseñamos en DevTalles

están cordialmente invitados.

Eso sería todo por esta lección.

Nos vemos en la que viene.