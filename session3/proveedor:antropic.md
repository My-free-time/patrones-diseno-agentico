En esta clase vamos a configurar Anthropic como proveedor de modelos.

Por favor vayan a la carpeta de "helpers".

Luego busquen "selected-model.ts".

Vamos a asegurarnos

de que ustedes hayan hecho la instalación de lo que es Anthropic.

Ustedes pueden copiarse esa línea.

La abren en su terminal.

Peguen "npm install @ai-sdk/anthropic".

Pero si ustedes no hicieron ninguna modificación

en su "package.json", ya deberían de tener ese paquete instalado.

Una vez hecho eso, vamos a bajar un poco más.

Comenten la línea de Groq y descomenten la línea de Anthropic.

Si ustedes borran esto y presionan "Ctrl + Espacio", va a aparecer

un listado de los modelos que están en ese momento

disponibles para ustedes.

Pueden haber otros. Pueden haber los mismos.

No sé.

Esto cambia constantemente.

Ustedes saben que es casi imposible

seguir el paso a todos los modelos que salen.

Pero recuerden que lo que son los Fable, los modelos Opus son elevados.

Son costosos.

Pero yo les recomendaría que no necesitan el modelo más fuerte

y avanzado del momento para hacer la parte de los patrones.

Pueden usar cualquiera. El que les salga más económico.

Porque definitivamente

lo que ustedes están a punto de ver

se va a aplicar más que todo a cualquier modelo

de inteligencia artificial.

No es necesariamente que voy a irme por el más fuerte

aunque lo que vamos a hacer también les va a servir

como un punto de comparación.

Ahora, no significa de que esto ya está.

Nosotros ocupamos una API Key.

Desafortunadamente

aunque ustedes tengan una suscripción de Claude Code o de Claude

no la pueden utilizar para este trabajo.

Porque para ello requerimos cargarla con ciertos créditos.

Pero igual ya les voy a explicar.

Cópiense el URL que yo les dejé.

Péguenlo en su navegador web.

Lógicamente si no tienen una cuenta, créenla.

Cuando ya la crean pueden volver a pegar el URL para poder caer acá.

Recuerden que lo mínimo necesario es por lo menos tener un centavo

de créditos.

Pero lo menos que podemos cargar son USD$5.

Entonces, por favor asegúrense de cargar por acá

en la parte donde dice "Buy Credits".

Ustedes compran los créditos.

Y ya cuando están acreditados, ustedes lo pueden ver por ahí.

Podemos regresar a la pantalla de las API Keys.

Una vez aquí voy a darle crear una nueva API Key.

Le ponen el nombre que ustedes quieran.

Por ejemplo "curso-patrones".

Igual yo voy a terminar borrando esto después de grabar todas las clases.

Pero ustedes tienen que tener por lo menos un modelo funcionando.

La expiración, si ustedes le quieren poner lo que sea

le pueden poner hasta tres horas.

Lo que sea. No sé.

No importa.

Voy a darle crear este "token".

Recuerden, no le pongan tres horas.

Ustedes pónganle una expiración más grande.

En fin, esto solo es un ejemplo.

Vamos a tomar nuestra API Key.

Lo copian. Vamos a irnos a la parte de Anthropic.

Lo pegan.

Inclusive yo les dejé el cascarón de cómo luce inicialmente este "token".

Grábense los cambios.

Y eso básicamente sería todo lo que tenemos que hacer.

Asegúrense de que el modelo exportado sea únicamente el de Anthropic.

Ahora podemos hacer.

Déjenme limpiar esto.

"npm run dev". Presionemos "Enter".

Aquí deberíamos de tener el modelo o una respuesta

del modelo que dice, "OK, todo listo!".

Si ustedes tienen un problema, posiblemente ahí ustedes lo vean claramente.

Por lo menos un montón de errores.

Pero ustedes deberían de poderlo leer.

Y si no, no se preocupen.

Para eso yo creé la función de "getMessageFromModelFailSafe".

Entonces, lo que vamos a hacer es cambiar ese por el que les facilité.

Este les va a decir claramente qué es lo que está pasando.

Si todo sale bien, vamos a verlo de esa manera.

Y si hay algún problema, por ejemplo en la API Key que estuviera malo.

Por ejemplo, voy a poner aquí un espacio.

Eso sería suficiente para que no funcione.

Vuelvo a ejecutarlo.

Deberíamos de tener un mensaje para que ustedes puedan autoevaluarlo.

"¿Renombraste .env.template a .env?"

"¿Copiaste la key completa, sin espacios ni comillas?".

El nombre de la variable coincide.

Aquí le voy a poner porque debería ser el de "GROQ_API_KEY".

Aquí debería ser el de "ANTHROPIC_API_KEY".

Pero obviamente dependiendo del modelo

que ustedes quieren ejecutar, tiene que estar puesto.

Esto solo es un ejemplo.

Entonces, asegúrense de que no tengan ningún problema.

Voy a grabar los cambios.

Volverlo a lanzar.

Y cuando ustedes miren que ya dice "OK, todo listo!"

estamos listos para literalmente continuar con la siguiente sección

donde vamos a aprender nuestro primer patrón.

Por ahora voy a resetear todo el proyecto

para dejarlo otra vez como estaba al inicio de esta clase.

Para pasar con los modelos de OpenAI.

Nos vemos en el siguiente video si lo desean.