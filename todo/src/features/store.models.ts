export interface Todo {
  id: string;
  title: string;
  description: string;
  date: Date;
  done: boolean;
  priority: "high" | "normal";
}
