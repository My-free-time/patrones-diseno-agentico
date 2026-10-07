# Sesión 4: Introducción a Tool Use

Introducción adaptada del texto de estudio proporcionado por Victor Flores, como parte del curso de Fernando Herrera (DevTalles).

## Conoce los temas de la sesión 4

La sección comienza con Tool Use. Partiremos de una petición que el modelo no puede respaldar con datos del catálogo, observaremos su respuesta y después construiremos herramientas para consultar cursos y calcular montos.

Repasaremos las funciones para generar texto y compararemos modelos con y sin razonamiento explícito. Esa comparación debe observar resultados, tiempo y consumo; disponer de razonamiento no da acceso automático a datos ausentes.

Crearemos herramientas y funciones con dos responsabilidades: buscar cursos y calcular montos. Después organizaremos un agente con instrucciones específicas sobre qué consultar, cómo usar los resultados y qué hacer cuando falte información.

Esta introducción presenta el recorrido de la sección. Las funciones, herramientas y el agente se desarrollarán en las siguientes clases, utilizando la conexión con un proveedor que ya tienes preparada.

```text
1. Funciones para generar texto
2. Modelos pensantes y no pensantes
3. Creación de herramientas y funciones
   - Buscar cursos
   - Calcular montos
4. Crear agentes con instrucciones específicas
```

## Plantea una tarea que necesita datos del negocio

Entramos en la sesión 4 y en el primer patrón que vamos a desarrollar: Tool Use. La preparación de proveedores ya nos permite enviar mensajes; ahora necesitamos resolver una tarea cuya respuesta depende de información externa.

La petición del material pide los cursos de TypeScript y Node, sus horas, alumnos y un descuento combinado del 20 %. En esta prueba el modelo no recibe el catálogo ni dispone de una herramienta para consultarlo.

El problema no es redactar el texto del descuento. Faltan datos concretos: qué cursos son, cuánto cuestan y cuáles son sus cifras actuales. Un modelo más reciente no obtiene automáticamente acceso a ese catálogo.

```text
Dame los cursos de TypeScript y Node,
la cantidad de horas, alumnos
y dame un 20% de descuento combinado.

Condición de la prueba: sin catálogo ni herramientas.
```

## Separa los datos ausentes de la regla de cálculo

Antes de llamar al modelo, enumera la información necesaria: identificadores de los cursos, títulos, horas, alumnos, precios y moneda. Debemos saber qué catálogo estamos consultando y qué significan sus cifras.

Para esta práctica definiremos el descuento combinado como un 20 % aplicado una sola vez a la suma de los dos precios. La regla es conocida; los precios todavía tienen que venir de una fuente.

Una instrucción más larga puede aclarar la tarea, pero no vuelve disponibles los datos que no has proporcionado. Si falta un curso o un precio, la respuesta debe reconocerlo o solicitarlo en lugar de completarlo con una cifra supuesta.

```text
Consultar por curso → id, título, horas, alumnos, precio, moneda
Calcular → subtotal = precio TypeScript + precio Node
Aplicar → descuento = subtotal × 0.20
Devolver → total = subtotal − descuento
Si falta un dato → indicar qué falta; no inventarlo
```

## Observa cómo responde cuando no tiene la información

En el material se describen respuestas que inventan precios, horas o incluso cambian uno de los cursos pedidos por Docker. Una respuesta fluida puede resultar convincente y aun así no responder con datos del catálogo.

Otra respuesta posible reconoce que no tiene esa información y pide el catálogo. Ese comportamiento permite avanzar con una aclaración; no es lo mismo que afirmar datos sin respaldo. No damos por hecho que todos los modelos responderán igual.

Los ejemplos de este paso son simulados, no resultados de una ejecución. Cuando hagamos la prueba, guardaremos la respuesta real y comprobaremos qué afirmaciones tienen una fuente. Que una cifra parezca razonable no demuestra que haya sido consultada.

```text
A: “TypeScript cuesta 90 y Docker cuesta 60...”
   → Cifras sin fuente y un curso distinto al solicitado.

B: “Necesito el catálogo con precios, horas y alumnos.”
   → Reconoce la información que falta.

Comprobación: ¿qué evidencia sostiene cada dato?
```

## Conecta el problema con el patrón Tool Use

Tool Use permite ofrecer al modelo operaciones que definimos en la aplicación. Para este caso prepararemos una consulta de cursos y una operación que aplique la regla del descuento a precios conocidos.

Cada herramienta necesita una función clara, una descripción, entradas definidas y un resultado que el modelo pueda utilizar. En las herramientas propias de esta práctica, el modelo propone una llamada; el programa valida sus argumentos, ejecuta la operación y devuelve el resultado.

Después, el modelo puede usar esos resultados para redactar la respuesta. La herramienta no debe fabricar los datos que faltan. Si la consulta falla o no encuentra un curso, ese resultado también tiene que formar parte del flujo.

```text
Usuario → pide cursos y descuento
Modelo → solicita una consulta de cursos
Aplicación → valida entradas y consulta el catálogo
Herramienta → devuelve datos o informa de un fallo
Aplicación → calcula el descuento con los precios obtenidos
Modelo → redacta la respuesta con los resultados
Comprobación → contrasta la respuesta con el catálogo
```

Referencia conceptual de herramientas definidas por la aplicación: https://platform.claude.com/docs/en/agents-and-tools/tool-use/overview. Esta introducción describe el patrón; la implementación seguirá en las próximas clases.

## Define cómo comprobarás la mejora

Seguiremos la secuencia de la sección: plantear el problema, observar el resultado, incorporar herramientas y repetir la tarea. Para comparar, conserva el mismo enunciado, el mismo catálogo de prueba y el criterio de respuesta.

El catálogo de este ejemplo es ficticio y solo sirve para preparar la evaluación. Con precios de 80 y 120 USD, el subtotal es 200 USD, el descuento es 40 USD y el total es 160 USD. Presenta las horas y alumnos por curso; sumar inscripciones no demuestra cuántas personas únicas hay.

Una respuesta verificable debe conservar los cursos solicitados, sus datos y la regla de cálculo. También evaluaremos casos con un curso ausente o una consulta fallida. Las herramientas pueden mejorar el acceso a información, pero un dato incorrecto o un resultado mal interpretado todavía exige revisión.

En esta clase dejamos preparado el problema y la comparación. En las siguientes construiremos las herramientas desde cero y veremos sus entradas, ejecución y resultados. Puedes seguir con cualquiera de los proveedores configurados que admita las capacidades del ejercicio.

```text
Datos ficticios; no son cifras de cursos reales.
TypeScript → 12 horas · 300 alumnos · 80 USD
Node → 20 horas · 500 alumnos · 120 USD

Subtotal → 200 USD
Descuento del 20 % → 40 USD
Total combinado → 160 USD

Antes → respuesta sin acceso al catálogo
Después → respuesta contrastada con consulta y cálculo
```

## Práctica

Con la petición de TypeScript y Node, identifica los datos que faltan, propone dos herramientas y explica cómo comprobarías la respuesta. Usa el catálogo ficticio del último paso para calcular el descuento. Si no se encuentra Node, explica qué debería ocurrir.

### Pista

Separa consultar cursos de aplicar el porcentaje. Contrasta las cifras con la fuente y no reemplaces un curso ausente por otro.

### Resultado de referencia

Una consulta devuelve los dos cursos y sus datos; una operación calcula el descuento sobre precios de la misma moneda. Con el catálogo ficticio, 80 + 120 = 200 USD, el 20 % son 40 USD y el total es 160 USD. Se comprueban títulos, horas y alumnos por curso. Si Node no aparece, se informa del dato ausente y no se afirma un total combinado completo.
