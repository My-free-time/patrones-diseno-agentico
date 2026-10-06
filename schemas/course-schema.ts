import type { LearningCourse } from "../types/learning";

function object(value: unknown, path: string): Record<string, unknown> {
  if (!value || typeof value !== "object" || Array.isArray(value)) {
    throw new Error(`${path}: se esperaba un objeto`);
  }
  return value as Record<string, unknown>;
}

function string(value: unknown, path: string): asserts value is string {
  if (typeof value !== "string" || !value.trim())
    throw new Error(`${path}: falta texto`);
}

function list(value: unknown, path: string, allowEmpty = false): unknown[] {
  if (!Array.isArray(value) || (!allowEmpty && value.length === 0)) {
    throw new Error(
      `${path}: se esperaba una lista${allowEmpty ? "" : " no vacía"}`,
    );
  }
  return value;
}

function strings(value: unknown, path: string) {
  list(value, path).forEach((item, index) => string(item, `${path}[${index}]`));
}

function slug(value: unknown, path: string, seen: Set<string>) {
  string(value, path);
  if (!/^[a-z0-9]+(?:-[a-z0-9]+)*$/.test(value) || seen.has(value)) {
    throw new Error(`${path}: identificador inválido o duplicado`);
  }
  seen.add(value);
}

function codeBlock(value: unknown, path: string) {
  const code = object(value, path);
  for (const key of ["file", "language", "after"])
    string(code[key], `${path}.${key}`);
  if (code.before !== undefined) string(code.before, `${path}.before`);
  for (const line of list(
    code.highlightLines,
    `${path}.highlightLines`,
    true,
  )) {
    if (
      !Number.isInteger(line) ||
      (line as number) <= 0 ||
      (line as number) > (code.after as string).split("\n").length
    )
      throw new Error("Línea resaltada fuera del código");
  }
}

export function assertCourse(value: unknown): asserts value is LearningCourse {
  const course = object(value, "curso");
  if (course.schemaVersion !== 1)
    throw new Error("Versión del curso no soportada");
  slug(course.slug, "slug", new Set());
  for (const key of [
    "title",
    "subtitle",
    "summary",
    "description",
    "audience",
    "updatedAt",
  ])
    string(course[key], key);
  if (course.repositoryUrl !== undefined) {
    string(course.repositoryUrl, "repositoryUrl");
    const repository = new URL(course.repositoryUrl);
    if (
      repository.origin !== "https://github.com" ||
      repository.username ||
      repository.password ||
      repository.search ||
      repository.hash ||
      !/^\/[\w.-]+\/[\w.-]+$/.test(repository.pathname)
    ) {
      throw new Error(
        "repositoryUrl debe apuntar a un repositorio de GitHub HTTPS",
      );
    }
  }
  if (course.topics !== undefined) strings(course.topics, "topics");
  if (course.preview !== undefined) {
    const preview = object(course.preview, "preview");
    string(preview.title, "preview.title");
    string(preview.description, "preview.description");
    codeBlock(preview.code, "preview.code");
  }
  if (Number.isNaN(Date.parse(course.updatedAt as string)))
    throw new Error("updatedAt no es una fecha válida");
  strings(course.prerequisites, "prerequisites");
  const lessons = new Set<string>();
  for (const entry of list(course.lessons, "lessons")) {
    const lesson = object(entry, "lesson");
    slug(lesson.slug, "lesson.slug", lessons);
    for (const key of ["title", "summary", "chapter"])
      string(lesson[key], `lesson.${key}`);
    if (!Number.isInteger(lesson.minutes) || (lesson.minutes as number) <= 0)
      throw new Error("minutes debe ser positivo");
    strings(lesson.objectives, "objectives");
    strings(lesson.sourcePaths, "sourcePaths");
    for (const path of lesson.sourcePaths as string[]) {
      if (
        path.startsWith("/") ||
        path.includes("\\") ||
        path
          .split("/")
          .some((segment) => segment === ".." || segment === "." || !segment)
      )
        throw new Error("sourcePaths debe ser relativo al repositorio");
    }
    const steps = new Set<string>();
    for (const entry of list(lesson.steps, "steps")) {
      const step = object(entry, "step");
      slug(step.id, "step.id", steps);
      for (const key of ["title", "expected"]) string(step[key], `step.${key}`);
      strings(step.body, "step.body");
      if (step.note !== undefined) string(step.note, "step.note");
      codeBlock(step.code, "step.code");
    }
    const exercise = object(lesson.exercise, "exercise");
    for (const key of ["prompt", "hint", "solution"])
      string(exercise[key], `exercise.${key}`);
    const questions = new Set<string>();
    for (const entry of list(lesson.questions, "questions")) {
      const question = object(entry, "question");
      slug(question.id, "question.id", questions);
      string(question.question, "question.question");
      string(question.explanation, "question.explanation");
      strings(question.options, "options");
      const options = question.options as string[];
      if (
        options.length < 2 ||
        new Set(options).size !== options.length ||
        !Number.isInteger(question.correctIndex) ||
        (question.correctIndex as number) < 0 ||
        (question.correctIndex as number) >= options.length
      )
        throw new Error("Pregunta sin respuesta válida u opciones duplicadas");
    }
  }
  for (const entry of list(course.roadmap, "roadmap", true)) {
    const item = object(entry, "roadmap.item");
    string(item.title, "roadmap.title");
    string(item.summary, "roadmap.summary");
  }
}
