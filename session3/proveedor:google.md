# Configurar Google como proveedor con Gemini

Apunte adaptado del material de estudio de Fernando Herrera (DevTalles), con configuración y documentación revisadas el 7 de octubre de 2026.

Solo necesitas un proveedor funcionando. Esta clase continúa después de OpenAI; la siguiente configuración será Ollama.

## Revisa el acceso a Gemini y sus cuotas

Google es otra alternativa para la misma práctica. Entra en Google AI Studio con tu cuenta y revisa qué modelos y cuotas tiene tu proyecto. Basta con un proveedor funcionando para continuar con los patrones.

La API ofrece un nivel gratuito para determinados modelos, sujeto a disponibilidad y límites. Puedes comenzar con el nivel gratuito cuando esté disponible para tu cuenta y modelo. Si habilitas el nivel de pago, revisa sus condiciones: las llamadas pueden generar cargos. Crear una clave no garantiza uso ilimitado ni gratuito.

Esta clase utiliza Gemini API mediante @ai-sdk/google. Vertex AI tiene otro adaptador y otra configuración; no mezcles sus instrucciones. Consulta el uso y los límites del proyecto antes de ejecutar la práctica.

```text
Proveedor → Google / Gemini API
Claves → https://aistudio.google.com/api-keys
Adaptador → @ai-sdk/google
Variable local → GOOGLE_GENERATIVE_AI_API_KEY
Modelo de texto → gemini-3.5-flash-lite
```

Facturación oficial: https://ai.google.dev/gemini-api/docs/billing. Precios y disponibilidad por modelo: https://ai.google.dev/gemini-api/docs/pricing. Revisados el 7 de octubre de 2026.

## Crea la clave en el proyecto correcto

En AI Studio abre API Keys y crea una clave con un nombre reconocible, como patrones-curso. Comprueba el proyecto asociado. Para usuarios nuevos, AI Studio puede preparar un proyecto y una clave por defecto al aceptar sus condiciones.

Si ya tienes proyectos en Google Cloud y no aparecen, impórtalos desde Projects en AI Studio. Si necesitas uno nuevo, créalo en https://console.cloud.google.com/projectcreate y vuelve a importarlo. Si no puedes crear la clave, revisa los permisos de tu cuenta o consulta al administrador del proyecto.

Una clave tiene restricciones y el proyecto tiene cuotas. Las claves nuevas de AI Studio se restringen a Gemini API; Google rechaza claves estándar sin restricciones. No elimines esas restricciones para intentar resolver un error. Guarda la credencial solo en tu entorno local.

```text
Cuenta de Google
  → Proyecto en Google Cloud
  → Proyecto visible en AI Studio
  → Clave válida para Gemini API
  → Cuotas y acceso al modelo
```

Guía oficial de claves, proyectos y permisos: https://ai.google.dev/gemini-api/docs/api-key. La interfaz puede cambiar; sigue los ajustes vigentes de tu cuenta.

## Instala el adaptador compatible

El proyecto base ya incluye @ai-sdk/google. Si reconstruiste la práctica mínima con Groq, añade este paquete en esa carpeta. La versión del ejemplo coincide con el material local y con AI SDK 7.

Conserva ai y los scripts existentes. Para este ejercicio usamos el adaptador de Vercel con generateText; no necesitas añadir @google/genai. Actualizar paquetes no activa facturación ni concede acceso a modelos.

El autocompletado depende del adaptador instalado. Comprueba el identificador en la documentación de Google y vuelve a compilar cuando cambies de versión o modelo.

```bash
npm install @ai-sdk/google@4.0.41
```

Documentación del adaptador: https://ai-sdk.dev/providers/ai-sdk-providers/google. La versión 4.0.41 viene del package.json del material.

## Configura la variable que espera el adaptador

Añade GOOGLE_GENERATIVE_AI_API_KEY con valor vacío a .env.example. En tu archivo .env local coloca la clave real en esa variable. Si la línea empieza por #, seguirá siendo un comentario. Evita espacios accidentales en el valor y conserva el nombre exacto.

@ai-sdk/google lee GOOGLE_GENERATIVE_AI_API_KEY por defecto. Las guías del SDK propio de Google pueden usar GEMINI_API_KEY o GOOGLE_API_KEY; esos nombres no sustituyen automáticamente el que espera este adaptador.

Los scripts dev y start de nuestra práctica cargan .env con --env-file. Guarda el archivo y vuelve a iniciar el proceso tras cambiarlo. Comprueba la carga de la variable sin imprimir su contenido; la clave real permanece fuera de Git.

```bash
# Rellena el valor real solo en tu .env local.
GOOGLE_GENERATIVE_AI_API_KEY=
```

El nombre predeterminado está documentado en https://ai-sdk.dev/providers/ai-sdk-providers/google. No copies credenciales en código, apuntes ni capturas.

## Selecciona un modelo Gemini que genere texto

En selected-model.ts conserva una única exportación model y cambia la selección anterior por google(...). Las acciones siguen importando model; no necesitan una segunda implementación para cambiar de proveedor.

Usamos gemini-3.5-flash-lite, un modelo estable con salida de texto. El selector original conserva gemini-2.5-flash, pero Google limita el acceso a la familia 2.5 a usuarios que ya la utilizaban y recomienda modelos actuales para proyectos nuevos. Confirma siempre la disponibilidad y las cuotas en tu cuenta.

Ctrl + Espacio ayuda a descubrir identificadores, pero no comprueba el acceso real. Los modelos de imágenes, como Nano Banana, requieren una práctica adaptada a su modalidad. Para este saludo elige un modelo que admita generateText y salida de texto.

```typescript
import { google } from "@ai-sdk/google";

export const model = google("gemini-3.5-flash-lite");
```

Modelo: https://ai.google.dev/gemini-api/docs/models/gemini-3.5-flash-lite. Disponibilidad y cambios de modelos: https://ai.google.dev/gemini-api/docs/deprecations.

## Comprueba la conexión y usa FailSafe si falla

En main.ts usa getMessageFromModelFailSafe de la lección de errores. Desde la carpeta de práctica ejecuta npm run build y luego npm run dev. La compilación revisa los tipos; dev realiza una llamada real y consume la cuota del proyecto.

El prompt pide “OK, todo listo!”. Lee la respuesta recibida. Esa prueba comprueba la conexión; para comparar modelos necesitarás tareas representativas y medidas de calidad, tiempo y consumo.

Si falla, revisa primero GOOGLE_GENERATIVE_AI_API_KEY y la carga de .env. Un 400 puede indicar una petición o clave inválida; un 401 o 403 orienta a autenticación, permisos o restricciones; un 429, a cuotas o límites; un 404, al modelo o recurso. Lee el detalle del error antes de decidir qué cambiar. Para fallos de red o del servicio consulta también su estado.

Practica el diagnóstico con casos escritos sin alterar tu credencial real. Tras corregir la causa, repite la prueba. Puedes continuar con los patrones usando cualquier proveedor que ya funcione; la próxima clase de configuración será Ollama.

```typescript
import { getMessageFromModelFailSafe } from "./actions/get-message-model.js";

await getMessageFromModelFailSafe();
```

La función se añade en “Interpreta los errores de la conexión”. Guía oficial de errores: https://ai.google.dev/gemini-api/docs/troubleshooting.

## Práctica

Prepara el selector de Google y una plantilla de entorno vacía. Explica qué proyecto consumirá la cuota y clasifica estos casos: variable ausente, 403 y 429. Si tienes acceso API, ejecuta la prueba; también puedes resolver el diagnóstico sin hacer llamadas.

Conserva la exportación model y distingue la variable del adaptador de las variables del SDK propio de Google.
