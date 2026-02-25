export interface Entry {
  id?: number;
  date: string;
  journal_text: string;
  mood: string;
  sleep_start: string;
  sleep_end: string;
  reflection_json: string;
  image_data?: string;
}

export interface Target {
  id?: number;
  type: 'daily' | 'weekly' | 'monthly';
  title: string;
  completed: boolean;
  period_key: string;
}

export interface Task {
  id?: number;
  date: string;
  title: string;
  completed: boolean;
}

export interface RoutineTemplate {
  id: number;
  name: string;
  tasks: { id: number; title: string }[];
}

export interface ReflectionAnswers {
  worries: string;
  sadness: string;
  annoyance: string;
  bodyNeeds: string;
  loveliness: string;
}
