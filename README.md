# Patrones de diseño agéntico

Apuntes y laboratorio guiado de Victor Flores mientras estudia el curso de
Fernando Herrera (DevTalles). El material de estudio está atribuido a su autor;
las ocho lecciones guiadas adaptan lo trabajado hasta ahora: entorno, conceptos,
estructura y archivos del proyecto, primera llamada, trazas, errores, Anthropic y OpenAI.
Basta con un proveedor configurado; Anthropic y OpenAI son alternativas opcionales
a Groq. Los próximos patrones se agregan al avanzar en el curso.

## Contenido que consume el portafolio

Edita `tutorials/patrones-diseno-agentico.json`, valida y sube tus cambios a `main`.
Ese archivo es la fuente canónica de títulos, explicaciones, ejemplos, ejercicios,
preguntas, índice y metadatos de la tutoría. Conserva los slugs e ids existentes
para mantener el progreso guardado por los alumnos. Añadir solo un apunte Markdown
no crea automáticamente una lección: incorpora también su contenido en este JSON.
El contrato se valida con `schemas/course-schema.ts` y `types/learning.ts`.

El portafolio lee el JSON público desde el servidor con revalidación de 60 segundos.
Los cambios aparecen en peticiones posteriores a la revalidación, sujetos a las
cachés de GitHub y del sitio. Si GitHub falla o el contenido es inválido, utiliza
la copia de respaldo incluida en el portafolio. No necesita un token de GitHub.
La conexión requiere desplegar la versión del portafolio que incorpora este lector.

## Ejecutar la práctica

Usa Node.js 26 o posterior y configura únicamente tus claves locales:

```sh
cd session3/agentic-patterns
npm ci --ignore-scripts
cp .env.example .env
# Edita .env con tu clave de Groq; nunca la pegues en documentación.
npm run build
npm run dev
```

El selector está en `src/helpers/selected-model.ts`. Ejecutar la práctica hace
una llamada real al proveedor seleccionado; la validación y CI solo compilan.

## Seguridad al trabajar con .env

Los `.env` reales, variantes como `.env.local`, certificados, dependencias y
resultados de compilación quedan fuera de Git. Solo se admite `.env.example`
con valores vacíos. No uses `git add -f` para añadir credenciales ni publiques
claves dentro de ejemplos, apuntes o capturas.

```sh
npm run hooks:enable
npm run validate
```

El hook revisa los archivos preparados, valida el curso y usa Gitleaks para
buscar secretos antes de cada commit. Instala Gitleaks desde su distribución
oficial si no está disponible; la copia local preparada incluye el ejecutable
en `.local-tools/`, excluido de Git. Los clones nuevos deben instalarlo y habilitar
el hook. CI repite los controles y analiza todo el historial con una versión
fijada y checksum verificado; las acciones también están fijadas por commit.
GitHub tiene además detección de secretos y protección de push activadas.

Si una clave llega a publicarse, revócala en el proveedor y reemplázala; borrarla
en un commit posterior no la retira del historial. Las comprobaciones ayudan,
pero no reconocen todas las credenciales posibles.

## Origen de la práctica

`session3/agentic-patterns` es una copia del proyecto base
[DevTalles-corp/agentic-patterns](https://github.com/DevTalles-corp/agentic-patterns),
revisión `3c36ac6`. Se conserva el README del proyecto base y su licencia declarada
ISC en `package.json`. La copia añade tipos de Node explícitos para compilar con
TypeScript 7 y una plantilla de entorno sin credenciales. Los ejemplos de la
tutoría usan `onStepEnd`; el código base mantiene su callback original.

La carpeta original de apuntes y su Git anidado se conservan localmente.
Este repositorio tiene un historial nuevo y nunca incluye sus `.env` ni `.git`.

## Carpeta de trabajo y apuntes originales

La copia Git del curso está en `/Users/victorflores/patrones-diseno-agentico`.
La carpeta `Patrones de diseño agéntico` conserva los apuntes originales y no
tiene Git en su raíz; su práctica tiene un Git anidado del proyecto base.
Abre la copia del curso en el editor para ver el historial y sus cambios.
La carpeta `.git` está oculta en Finder; `Cmd + Shift + .` muestra archivos ocultos.
