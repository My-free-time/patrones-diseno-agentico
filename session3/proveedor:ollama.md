# Ejecutar un modelo local con Ollama

Apunte adaptado del material de estudio de Fernando Herrera (DevTalles), con configuración y documentación revisadas el 7 de octubre de 2026.

Esta clase continúa después de Google. Con un solo proveedor funcionando puedes seguir con los patrones.

## Elige un modelo que tu equipo pueda ejecutar

Con Ollama puedes ejecutar esta práctica en tu propio equipo. El modelo usa tus recursos de cómputo; la descarga inicial requiere conexión y espacio disponible. Para el curso basta con un proveedor que funcione.

En esta clase usamos gpt-oss:20b. La B del catálogo significa miles de millones de parámetros: 20b y 120b son variantes distintas. Actualmente gpt-oss sin etiqueta resuelve a latest, que coincide con 20b; no son dos modelos diferentes que necesites descargar para comparar.

El catálogo muestra aproximadamente 14 GB para 20b y 65 GB para 120b. Eso es tamaño de descarga, no una garantía de memoria suficiente. Ollama describe 20b en sistemas desde 16 GB de memoria y 120b en una GPU de 80 GB; el contexto, la plataforma y otros procesos afectan los recursos necesarios.

No asumas que 16 GB de RAM y cualquier tarjeta dedicada bastan para 120b. Si 20b no cabe o tarda demasiado, elige un modelo de texto más pequeño del catálogo. Para futuros ejercicios de herramientas revisaremos también sus capacidades.

```text
Modelo del ejemplo → gpt-oss:20b
Etiqueta actual equivalente → gpt-oss:latest
Comprueba → descarga, memoria y capacidades
Mide → carga inicial y respuesta posterior
```

Catálogo y referencias de memoria: https://ollama.com/library/gpt-oss. Etiquetas: https://ollama.com/library/gpt-oss/tags. Revisados el 7 de octubre de 2026.

## Instala Ollama y mantén activo el servidor

Descarga Ollama desde https://ollama.com/download y sigue la instalación de tu sistema. En macOS o Windows abre la aplicación; en un entorno que todavía no tenga el servicio activo puedes iniciar el servidor con ollama serve.

La aplicación o el servicio atiende las peticiones locales en el puerto 11434. Es un proceso distinto al programa TypeScript. Si ya está ejecutándose, no necesitas lanzar otro servidor; un mensaje de puerto ocupado puede indicar que ya hay uno activo.

La API local no requiere una clave. Eso no se aplica a las variantes de nube de Ollama: para esta clase elige la etiqueta local gpt-oss:20b y evita confundirla con :20b-cloud. Mantén el servidor disponible mientras uses la práctica.

```bash
ollama --version

# Solo si Ollama no está ya ejecutándose:
ollama serve
```

Instalación oficial: https://ollama.com/download. Comandos: https://docs.ollama.com/cli. Autenticación local y nube: https://docs.ollama.com/api/authentication.

## Descarga la etiqueta que usarás en el selector

En otra terminal, con el servidor activo, ejecuta ollama pull gpt-oss:20b. pull descarga o actualiza el modelo; no abre una conversación. Espera a que termine antes de continuar y comprueba la lista de modelos con ollama ls.

Instalar el paquete npm no descarga los pesos del modelo. Del mismo modo, tener Ollama instalado no demuestra que la etiqueta elegida esté disponible. El nombre del selector debe corresponder al modelo del servidor al que te conectas.

Volver a ejecutar pull comprueba la versión disponible. No significa que siempre se vuelvan a descargar todos los gigabytes: Ollama puede reutilizar capas que ya tiene. Si cambiarás de modelo, descarga su etiqueta y comprueba su presencia primero.

```bash
ollama pull gpt-oss:20b
ollama ls
```

Referencia de descarga y listado: https://docs.ollama.com/cli. El tiempo de descarga depende del tamaño, la red y las capas ya presentes.

## Prueba el modelo antes de conectar TypeScript

Ejecuta un saludo desde la terminal para comprobar que Ollama puede cargar el modelo y generar texto. Esta prueba realiza inferencia local; descargar los archivos por sí solo no demuestra que tu equipo pueda ejecutarlos.

Compara la primera ejecución con otra posterior. La primera puede incluir el tiempo de carga en memoria. Un ping o un saludo mide una respuesta sencilla y no demuestra todavía calidad para resolver un patrón agéntico.

ollama ps muestra los modelos cargados y si utilizan CPU, GPU o una combinación. Si falta memoria o la respuesta resulta demasiado lenta, revisa los recursos y elige un modelo más pequeño. No compares etiquetas equivalentes como si fueran modelos diferentes.

```bash
ollama run gpt-oss:20b 'Responde solamente con: OK, todo listo!'
ollama ps
```

Ejecución: https://docs.ollama.com/cli. Carga y memoria: https://docs.ollama.com/faq. El texto exacto y el tiempo de respuesta dependen del modelo y de tu equipo.

## Añade el adaptador comunitario y conserva el entorno

La base ya declara ollama-ai-provider-v2. Si reconstruiste el proyecto mínimo con Groq, instala la versión del material en tu carpeta de práctica. Este adaptador es comunitario y su versión 4 es compatible con AI SDK 7.

Son tres piezas distintas: Ollama ejecuta el servidor, pull obtiene el modelo y el paquete npm conecta generateText con la API local. Instalar solo una de ellas no completa la configuración.

No necesitas una API key para esta llamada local. Aun así, los scripts del proyecto usan --env-file=.env: el archivo .env debe existir, aunque no contenga credenciales. Si no lo tienes, créalo vacío en la carpeta de práctica; si ya existe, consérvalo. No hace falta añadir una variable de clave para Ollama.

```bash
npm install ollama-ai-provider-v2@4.0.1
```

Documentación del mantenedor: https://github.com/opencomp-eu/ollama-ai-provider-v2. La versión 4.0.1 coincide con el package.json del material; no es un adaptador oficial de Vercel.

## Conecta el modelo compartido al servidor local

Reemplaza selected-model.ts por este ejemplo y conserva una única exportación model. createOllama permite mostrar explícitamente la dirección del servidor. La dirección termina en /api porque este adaptador utiliza la API nativa de Ollama.

La importación ollama del mismo paquete también funciona con la dirección local predeterminada en esta versión. Aquí hacemos visible esa configuración para que puedas reconocer qué servidor recibe la petición.

Selecciona gpt-oss:20b, la misma etiqueta que descargaste. El autocompletado no consulta tu instalación ni confirma que el modelo exista. Las acciones siguen importando model; cambiar de proveedor no requiere duplicarlas.

```typescript
import { createOllama } from "ollama-ai-provider-v2";

const ollama = createOllama({
  baseURL: "http://127.0.0.1:11434/api",
});

export const model = ollama("gpt-oss:20b");
```

Configuración de createOllama: https://github.com/opencomp-eu/ollama-ai-provider-v2. El selector original del material se conserva; este ejemplo usa una etiqueta explícita.

## Ejecuta la práctica y clasifica los fallos

En main.ts utiliza getMessageFromModelFailSafe de la lección de errores. Ejecuta npm run build y luego npm run dev desde tu práctica. build verifica los tipos; dev llama al servidor local y consume los recursos de tu equipo.

Si aparece un fallo antes de llamar al modelo, revisa las dependencias y que exista .env. Si la conexión es rechazada, comprueba que Ollama esté activo en la dirección configurada. Si el servidor no encuentra el modelo, compara la etiqueta del selector con ollama ls y completa pull.

Para errores al cargar el modelo, revisa la memoria disponible y los registros de Ollama. FailSafe ofrece una orientación general; el diagnóstico local puede necesitar comprobar también el servidor. No esperes una API key como solución a un proceso detenido o un modelo ausente.

Con una respuesta satisfactoria ya tienes la conexión preparada. Puedes continuar con Groq, Anthropic, OpenAI, Google u Ollama: los patrones describen estrategias, pero cada ejercicio seguirá necesitando capacidades concretas del modelo, como herramientas o salida estructurada.

```typescript
import { getMessageFromModelFailSafe } from "./actions/get-message-model.js";

await getMessageFromModelFailSafe();
```

La función se implementa en “Interpreta los errores de la conexión”. Consulta los registros del servidor cuando su mensaje genérico no explique la causa: https://docs.ollama.com/troubleshooting.

## Práctica

Dibuja el recorrido main.ts → acción → model → servidor Ollama → modelo local. Prepara el selector y clasifica estos casos: .env ausente, conexión rechazada y modelo no encontrado. Si tu equipo tiene recursos, ejecuta la prueba local; también puedes completar el mapa y el diagnóstico sin descargar pesos.

La instalación del adaptador, el proceso del servidor y los pesos son piezas independientes. No cambies una API key para resolver un fallo local.
