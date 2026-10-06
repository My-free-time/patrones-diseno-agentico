Antes de comenzar a aprender sobre lo que son patrones de diseño agénticos

me interesa de que todos hablemos

el mismo idioma referente a estos conceptos.

Entonces comencemos con el primero, que es un patrón.

Un patrón es una regularidad reconocible.

Punto.

Por ejemplo, si yo les muestro a ustedes

el siguiente patrón de asterisco, cuadrado, círculo

asterisco, cuadrado, ¿qué seguiría después?

Seguiría un círculo.

Este patrón ustedes lo observaron y ya saben cuál es la respuesta.

Si el día de mañana tienen otro problema

donde hay un patrón secuencial

ustedes pueden usar la misma lógica que en su cerebro

ya sabe cómo resolver para encontrar la solución a un problema secuencial.

Cuando hablamos de un patrón de diseño

es básicamente una solución reutilizable

a un problema que se repite en un contexto determinado.

Por ejemplo, hay muchas maneras de resolver un cubo de Rubik

pero tradicionalmente, por lo menos como yo lo puedo resolver

es armar primeramente el primer nivel

valga la redundancia, luego el segundo y luego el tercero.

Así voy.

Si a mí se me da cualquier tipo de cubo de Rubik de 3x3

yo lo puedo resolver con el mismo patrón.

Eso es un patrón de diseño.

Es una solución reutilizable.

Cuando nosotros estamos hablando sobre un patrón de diseño agéntico

es una solución reutilizable a un problema al cual

el agente de inteligencia artificial se va a enfrentar.

Hay muchos.

Hay muchos tipos de problemas a los cuales ellos se enfrentan

y nosotros podemos ayudarles para que apliquen ciertos patrones.

Pero déjenme darles un ejemplo.

Imagínense que nuestra inteligencia artificial

recibe este "prompt"

"Dame cinco de mis mejores productos y cuánto sería el 20% de descuento".

Si no hay un contexto previo, ¿qué va a hacer la inteligencia artificial?

No tiene manera de resolver ese "prompt".

No importa si es el modelo de ChatGPT 20

no sé, Júpiter, una cosa así exagerada.

No importa si es el último modelo de Anthropic.

No importa qué modelo sea.

No tiene una manera de resolver esa pregunta.

Pueden pasar varias cosas.

Puede que nos dé resultados erróneos.

Puede que vaya a internet a buscar, no sé, algo relacionado

tal vez a mi persona

pero definitivamente no va a ser el resultado que yo estoy buscando.

Hay un patrón que resuelve ese problema

que es conocido como el "Tool Use"

el cual sirve para que la inteligencia artificial pueda tener herramientas

cuando tenga un problema particular y los pueda utilizar.

Hay otro patrón conocido como "ReAct", en el cual

nuestra inteligencia artificial piensa, luego actúa y luego observa.

Después vuelve a empezar.

Vuelve a pensar, vuelve a actuar y vuelve a observar el resultado.

Y así está X cantidad de veces.

Que, por cierto, aquí lo podemos mezclar con otro patrón

que es conocido como el "Circuit Breaker", cuyo objetivo no es más

que evitar que eso se haga un ciclo infinito.

Porque ustedes podrán imaginarse que un ciclo infinito

dentro de un modelo de inteligencia artificial equivale a costes

altísimos tanto de operación, de ejecución, y puede que nunca tengamos

el resultado esperado.

Tal vez uno de los más populares allá afuera es conocido como el

"Human in the loop"

en el cual se presentan puntos de aprobación explícitos

antes de acciones irreversibles.

Es decir, genérame un borrador de correo electrónico

y la inteligencia artificial puede estar creando quién

sabe cuántos borradores de correo electrónico

pero cuando ya hay que enviarlos

nos va a preguntar a nosotros, "Hey, ¿qué hago?

¿Lo envío?".

Hasta que nosotros aprobemos, nosotros somos ese "Human in the loop".

Hasta que nosotros lo aprobemos

ahí es donde va a enviar el correo electrónico.

La pregunta que ustedes se van a estar haciendo es

¿cuántos patrones agénticos hay?

La verdad es que hay muchos

y ustedes pueden descubrir e inventar los suyos

con tal resuelva un problema que es recurrente.

Es decir, ustedes tienen un problema común

y lo resuelven siempre de la misma manera.

Felicidades.

Acaban de descubrir un patrón de diseño para ustedes.

A lo largo del curso

ustedes van a aprender diferentes patrones de diseño que están

agrupados dentro de un único agente, multiagente, control y seguridad

y demás.

No quiere decir que estos son todos los patrones que hay

pero son muy comunes verlos allá afuera.

El patrón que nosotros vamos a seguir en el curso

para aprender patrones de diseño agénticos será el siguiente.

Primeramente, le vamos a pedir

a nuestra inteligencia artificial que haga algo.

Luego, nosotros vamos a observar los resultados.

Que lo que normalmente estamos esperando que pase es que falle.

Puede que el modelo de agente de inteligencia artificial

sea muy bueno y lo resuelva, pero realmente estoy esperando que falle.

Posteriormente aplicaremos el patrón de diseño agéntico

para ayudar a nuestra inteligencia artificial

cómo puede resolver ese problema.

Para finalizar

nosotros vamos a observar los resultados

que van a ser considerablemente mejores o exitosos.

Recuerden que digo o exitosos porque puede que fracasar rotundamente

como puede que lo haga correctamente.

Ustedes ya lo van a ver en ejecución.

La idea aquí es aprender patrones de diseño agénticos

no herramientas

porque las herramientas y modelos cambian constantemente.

Los patrones no.

Aprender a solventar algo e instruir a tus agentes

para que lleguen a una solución en particular

la van a poder aplicar sin importar qué modelo o herramienta

ustedes vayan a usar el día de mañana.

Indirectamente, ustedes en este curso van a aprender a integrar

la inteligencia artificial en aplicaciones

con modelos de vanguardia y gratuitos.

Vamos a estar creando programas donde la toma de decisiones

y procesos requieran la intervención de inteligencia artificial

y ahí es donde principalmente vamos a aplicar nuestros patrones.

Estaremos utilizando el AI SDK de Vercel

que es un proveedor agnóstico en TypeScript

que nos permite interactuar con cualquier modelo de inteligencia artificial

ya sea de OpenAI, Ollama, Gemini, Anthropic.

No importa.

También, si ustedes no desean utilizar Node.js, adelante, pueden usar Bun

Deno o lo que sea, pero nosotros estaremos

creando aplicaciones de Node.

Ahora, para comprender estos patrones, necesito que ustedes puedan leer

este código.

Por ejemplo, aquí tenemos una función que se llama "getMessageFromModel".

Es una función asíncrona.

Ustedes también lo van a ver por acá.

Significa que vamos a poder utilizar la palabra reservada "await"

porque la función "generateText" es asíncrona

y va a ir a hablar con nuestros modelos

ya sea los externos a nuestra computadora

o inclusive los modelos de Ollama, pero ahí es donde nosotros le mandamos

la comunicación a nuestro agente de inteligencia artificial.

Vamos a mandarle cuál es el modelo que queremos utilizar.

Ustedes no se preocupen.

Ya les voy a enseñar cómo pasa todo esto

pero necesito que puedan comprender este código.

Este es el "prompt" que le vamos a estar mandando.

Luego, nuestro modelo

va a respondernos con un texto de respuesta más el uso.

Luego vamos a imprimir los resultados en consola.

Esto es básicamente el patrón como nosotros

vamos a estar trabajando en el curso.

Le vamos a pedir a la inteligencia artificial que haga algo.

La vamos a ver fracasar.

Vamos a hacer modificaciones al código

y luego lo vamos a ver cómo tiene éxito o mejores resultados.

Al final también yo creé unas funciones "helpers" de ayuda

por decirlo así, para que los colores en la consola se miren mucho mejor

porque ahí es donde estaremos viendo los resultados principalmente.

Muy bien. Eso sería todo lo que quería decirles.

Comencemos nuestro camino

de patrones de diseño agénticos a partir de la próxima clase.