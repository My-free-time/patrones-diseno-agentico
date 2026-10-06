Recuerden que para este curso solo ocupamos un proveedor.

No ocupan todos.

Pero yo los voy a configurar todos porque hay personas

que van a preferir hacerlo con Groq, OpenAI o Anthropic.

Ustedes ya se los he dicho muchas veces.

Entonces, vamos a comenzar con Groq.

Yo les dejo a ustedes

un enlace que los lleva directamente a la página de las API Keys.

Pero es muy probable que ustedes no tengan una cuenta.

Entonces, si no tienen una cuenta, van a caer seguramente al "home".

Ustedes la crean.

No hace falta tarjeta de crédito ni nada

aunque hay unos límites que nosotros tenemos de ejecución.

Normalmente podemos trabajar con él hasta que choquemos con esa cuota.

Luego pueden esperar un par de minutos antes de volverlo a ejecutar.

De todas maneras

nosotros no lo vamos a bombardear tanto, entre comillas

porque algunos patrones sí lo requieren.

Pero tradicionalmente lo podemos hacer así hasta que lleguemos a esa cuota.

Van a ver que aquí hay los modelos que tenemos actualmente.

Es muy probable que cuando ustedes

estén viendo este video tengan otros modelos.

Pero están divididos en multimodales.

Los que soportan imágenes, "text-to-speech", razonamiento.

Por acá los que yo voy a estar utilizando

por lo menos en el momento que estoy grabando este curso

es el GPT-OSS de 20 billones y el de 120 billones.

Ustedes pueden ejecutar estos dos modelos con Ollama también.

Ya lo vamos a ver más adelante.

Aunque el de 120 billones requiere un poquito más de poder

computacional y RAM en su equipo.

Pero ya llegaré a eso en su momento.

Créense una cuenta.

Luego vuelven a irse al enlace que yo les dejo a ustedes.

Vamos a crearnos una nueva API Key.

Le voy a poner algo como "curso-patrones".

Algo así. Le voy a poner que no expire.

O que expire en, no sé, ustedes lo seleccionan.

Aquí voy a ponerle unos 60 días por si acaso.

Voy a crearlo.

Igual yo se los voy a mostrar en este momento.

Pero inmediatamente cuando termine de hacer la grabación

de todos los modelos yo voy a cambiar mis API Keys por si acaso.

Ustedes se copian su API Key.

Voy a regresar por acá.

Lo único que ocupamos es quitar esta línea, pegarla y grabar los cambios.

Por favor asegúrense de que sea en el ".env".

No en el ".env.template".

Con su API Key establecida, vamos a irnos

a la parte de "helpers", "selected-model.ts".

Asegúrense de que diga "groq" como el modelo que está seleccionado.

Este es el que necesitamos.

Van a ver por acá que yo tengo el GPT-OSS de 20 billones.

También por acá les comenté el de 120 billones.

Entonces, no habría mucho que hacer.

Ese modelo está bien.

Si hay actualizaciones la gente de Groq en el sitio web de ellos

actualizan ese modelo.

No tenemos que hacer esa actualización nosotros.

Si ustedes quieren probar otro modelo, adelante.

Ustedes pueden venir por acá. Lo borran.

Dan "Ctrl + Espacio" y aquí tenemos modelos de Ollama o de Llama.

Tenemos aquí de Qwen. Tenemos varios modelos.

Pero en este caso quedémonos con ese.

Siéntanse libres de probar cualquier otro.

Una vez ya tenemos configurado nuestro modelo, hagamos un "npm run dev".

Presionemos "Enter".

Esto debería de regresarnos "OK, todo listo!" en verde.

Significa que ya estamos listos para pasar a la siguiente sección

y empezar a trabajar con Groq como proveedor de modelos.

Si ustedes tienen un problema serio.

Es decir, no saben qué es lo que está pasando

entonces no sé si ustedes se acordarán

pero dentro de la carpeta de "actions" yo tengo la que les había mencionado

que se llama "getMessageFromModelFailSafe".

Entonces, esto ustedes lo pueden copiar el nombre.

Vamos a irnos a nuestro "main.ts".

Esto es un "troubleshooting".

Voy a comentar esta línea.

Pego el "FailSafe". Doy "Tab".

Voy a poner aquí un "await" para esperarlo.

Y por favor importemos la función de "getMessageFromModelFailSafe".

Entonces, en lugar de mandar a llamar el "getMessageFromModel"

vamos a mandar a llamar esa otra

que les acabo de mencionar y volvamos a hacer "npm run dev".

Entonces, ¿qué es lo que va a pasar por acá?

Va a primeramente intentarlo hacer.

Si todo sale bien dice, "Todo funcionando.

Puedes empezar con los patrones".

Pero asumamos de que colocamos

un espacio más por aquí y ya no funciona la API Key.

Un pequeño cambio así ya hace que se rompa todo.

Entonces con ese cambio voy a volver a ejecutar el "npm run dev".

Aquí dice, "La llamada al modelo falló".

Dice, "Tu API key no es válida o no tiene permisos".

Y aquí hay un "troubleshooter".

"¿Renombraste .env.template a .env?",

"¿Copiaste la key completa, sin espacios ni comillas?".

Por favor revisen esto.

Y este es el API o la variable de entorno

que yo estoy buscando para la ejecución.

Que de hecho es la variable de entorno que busca el SDK

propiamente de Vercel.

Entonces, esto sería básicamente todo.

Ustedes asegúrense de que eso funcione.

Volvamos a hacer el "npm run dev" y listo.

En la próxima clase voy a hacer exactamente esto mismo

pero utilizando modelos propios de Anthropic.

Nos vemos en la próxima lección.