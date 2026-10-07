# Configurar OpenAI como proveedor

Apunte adaptado del material de estudio de Fernando Herrera (DevTalles), con
configuración y condiciones verificadas el 7 de octubre de 2026.

Solo necesitas un proveedor funcionando. OpenAI es una alternativa a Groq y
Anthropic; no necesitas configurar todos para continuar.

## Prepara tu acceso a la plataforma de OpenAI

Esta clase es una alternativa a Groq o Anthropic. Solo necesitas un proveedor funcionando para seguir el curso. Para usar OpenAI desde esta práctica entra en platform.openai.com y revisa el proyecto con el que vas a trabajar.

La suscripción de ChatGPT y el uso de la API tienen facturación separada. No asumas que una suscripción financia las llamadas de este programa ni que un token de sesión de ChatGPT sustituye una API key. Consulta los ajustes de facturación y los límites de tu cuenta de API.

No fijamos una recarga mínima ni un precio en la lección: dependen de las condiciones vigentes. Puedes estudiar la configuración sin comprar créditos ni ejecutar una llamada.

```text
Proveedor → OpenAI
Plataforma → https://platform.openai.com
Adaptador → @ai-sdk/openai
Variable local → OPENAI_API_KEY
Modelo de esta clase → gpt-5-mini
```

Fuente oficial de facturación: https://help.openai.com/en/articles/9039756-managing-billing-for-chatgpt-and-the-api-platform. Revisada el 7 de octubre de 2026.

## Crea una clave con permiso para generar respuestas

En los ajustes de API keys del proyecto crea una credencial con un nombre reconocible, por ejemplo curso-patrones. Comprueba que pertenece al proyecto correcto y guárdala únicamente en tu entorno local.

La clave y tu rol deben permitir la operación que vas a realizar. El adaptador OpenAI de esta práctica usa Responses API por defecto, por lo que necesita permiso para crear respuestas. Una configuración de solo lectura no autoriza esa generación.

Revisa los permisos del proyecto y de la clave en la plataforma. Para este ejercicio concede acceso a la generación que necesitas; no hace falta habilitar todas las operaciones del proyecto. No compartas la credencial en los apuntes ni en el repositorio.

```text
Proyecto correcto
Clave activa del proyecto
Permiso para crear respuestas
Acceso a gpt-5-mini
Facturación y límites revisados
```

Ajustes de claves: https://platform.openai.com/api-keys. Permisos oficiales: https://developers.openai.com/api/docs/guides/rbac.

## Añade el adaptador compatible con la práctica

El proyecto base ya declara @ai-sdk/openai. Si reconstruiste el ejemplo mínimo con Groq, instala el adaptador desde tu carpeta de práctica. Esta versión coincide con el material de estudio y AI SDK 7.

Conserva ai, los scripts y las dependencias de desarrollo. No necesitas instalar el paquete openai del SDK oficial para este ejemplo: la integración que estamos usando es @ai-sdk/openai junto con generateText.

Repetir npm install no garantiza que obtengas la última versión de un paquete: intervienen las versiones declaradas y el lockfile. Si después necesitas actualizar el adaptador, elige una versión compatible, revisa su documentación y vuelve a compilar. Actualizar tampoco concede acceso a un modelo.

```bash
npm install @ai-sdk/openai@4.0.37
```

Documentación del adaptador: https://ai-sdk.dev/providers/ai-sdk-providers/openai. La versión 4.0.37 viene del package.json del material.

## Configura OPENAI_API_KEY en el entorno local

Añade OPENAI_API_KEY con valor vacío a .env.example, la plantilla pública. La base original puede llamar a su plantilla .env.template. En tu .env local coloca la credencial real, sin espacios accidentales ni un # que convierta la línea en comentario.

El adaptador lee OPENAI_API_KEY por defecto. Conserva ese nombre exacto; GROQ_API_KEY y ANTHROPIC_API_KEY no autentican una petición a OpenAI. La clave real se queda fuera de Git y del código TypeScript.

Los scripts dev y start de la práctica cargan .env con --env-file. Si usas otro comando, asegúrate de que carga ese entorno. No hace falta añadir una librería de carga de variables a los scripts que ya configuramos.

```bash
# Rellena el valor real solo en tu .env local.
OPENAI_API_KEY=
```

La plantilla pública no muestra el prefijo de una clave real. El valor completo se guarda únicamente en el entorno local.

## Selecciona gpt-5-mini en el modelo compartido

Reemplaza selected-model.ts por este ejemplo. Conserva la exportación model: las acciones existentes ya la importan, así que puedes cambiar de proveedor sin reescribirlas.

La clase mantiene gpt-5-mini, el modelo utilizado en el material. Confirma su disponibilidad para tu proyecto. El autocompletado puede mostrar identificadores del adaptador instalado, pero no demuestra permisos ni acceso en la plataforma.

Exporta un único model. Para volver a Groq o Anthropic restaura su importación y su selección, y comprueba la variable correspondiente. No dupliques export const model ni cambies el nombre que esperan las acciones.

```typescript
import { openai } from "@ai-sdk/openai";

export const model = openai("gpt-5-mini");
```

Modelo oficial: https://developers.openai.com/api/docs/models/gpt-5-mini. openai(modelId) usa Responses API por defecto en el adaptador de esta práctica.

## Ejecuta la prueba y diagnostica un fallo

En main.ts selecciona getMessageFromModelFailSafe de la lección de errores. Ejecuta primero npm run build y luego npm run dev desde la práctica. build comprueba los tipos; dev envía una petición real a OpenAI.

El prompt pide “OK, todo listo!”. Lee el resultado real: el tiempo depende del modelo, de la petición y de la red. Una respuesta a este saludo comprueba la conexión, pero no evalúa todavía un patrón agéntico.

Si falla, empieza por el nombre OPENAI_API_KEY, la carga de .env y la integridad de la clave. Ante 401 revisa autenticación; ante 403, acceso y permisos; ante 429, cuota o límites; ante 404, modelo o recurso. Un error sin respuesta HTTP puede exigir comprobar la red.

Practica el diagnóstico con casos escritos o una variable ficticia en un archivo temporal. No modifiques tu clave real para provocar un error. Después de corregir la causa, comprueba la conexión antes de seguir con los patrones.

```typescript
import { getMessageFromModelFailSafe } from "./actions/get-message-model.js";

await getMessageFromModelFailSafe();
```

La función se implementa en “Interpreta los errores de la conexión”. Si aún no la añadiste, usa getMessageFromModel de la primera llamada. Google y Ollama siguen en preparación.

## Referencias

- [OpenAI: facturación de ChatGPT y API](https://help.openai.com/en/articles/9039756-managing-billing-for-chatgpt-and-the-api-platform)
- [OpenAI: permisos de proyectos y API](https://developers.openai.com/api/docs/guides/rbac)
- [OpenAI: GPT-5 Mini](https://developers.openai.com/api/docs/models/gpt-5-mini)
- [AI SDK: adaptador OpenAI](https://ai-sdk.dev/providers/ai-sdk-providers/openai)
