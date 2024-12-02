export type Theme = "orange" | "purple" | "blue" | "peach";

export type DifficultyLevel = "beginner" | "intermediate" | "advanced";

export type Category = "development" | "design" | "devops" | "business" | "general";

export interface Speaker {
  id: string;
  name: string;
  role: string;
  avatar?: string;
}

export interface Feedback {
  id: string;
  rating: number;
  comment: string;
  timestamp: string;
}

export interface Session {
  id: string;
  title: string;
  description: string;
  startTime: string;
  endTime: string;
  room: string;
  theme: Theme;
  isPlenary: boolean;
  difficultyLevel: DifficultyLevel;
  category: Category;
  speakers: Speaker[];
  feedback: Feedback[];
}