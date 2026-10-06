export type LessonCode = {
  file: string;
  language: string;
  after: string;
  before?: string;
  highlightLines: number[];
};

export type LessonStep = {
  id: string;
  title: string;
  body: string[];
  code: LessonCode;
  expected: string;
  note?: string;
};

export type LessonQuestion = {
  id: string;
  question: string;
  options: string[];
  correctIndex: number;
  explanation: string;
};

export type LearningLesson = {
  slug: string;
  title: string;
  summary: string;
  minutes: number;
  chapter: string;
  sourcePaths: string[];
  objectives: string[];
  steps: LessonStep[];
  exercise: { prompt: string; hint: string; solution: string };
  questions: LessonQuestion[];
};

export type LearningCourse = {
  schemaVersion: number;
  slug: string;
  title: string;
  subtitle: string;
  summary: string;
  description: string;
  audience: string;
  repositoryUrl?: string;
  topics?: string[];
  preview?: {
    title: string;
    description: string;
    code: LessonCode;
  };
  updatedAt: string;
  prerequisites: string[];
  lessons: LearningLesson[];
  roadmap: { title: string; summary: string }[];
};
