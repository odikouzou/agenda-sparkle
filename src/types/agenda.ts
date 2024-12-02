export type Theme = "orange" | "purple" | "blue" | "peach";

export type DifficultyLevel = "beginner" | "intermediate" | "advanced";

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
  speakers: Speaker[];
  feedback: Feedback[];
}