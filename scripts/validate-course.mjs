import { readFileSync, existsSync } from "node:fs";
import { fileURLToPath } from "node:url";
import path from "node:path";
import { assertCourse } from "../schemas/course-schema.ts";

const root = fileURLToPath(new URL("../", import.meta.url));
const course = JSON.parse(
  readFileSync(
    path.join(root, "tutorials/patrones-diseno-agentico.json"),
    "utf8",
  ),
);
assertCourse(course);
if (
  course.slug !== "patrones-diseno-agentico" ||
  course.repositoryUrl !==
    "https://github.com/My-free-time/patrones-diseno-agentico"
)
  throw new Error("Identidad del curso incorrecta");
for (const lesson of course.lessons) {
  for (const source of lesson.sourcePaths) {
    if (!existsSync(path.join(root, source)))
      throw new Error(`Fuente ausente: ${source}`);
  }
}
console.log(
  `Curso válido: ${course.lessons.length} lecciones y fuentes verificadas.`,
);
