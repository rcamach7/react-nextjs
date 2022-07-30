export interface Todo {
  id: string;
  title: string;
  description: string;
  date: string;
  done: boolean;
  priority: "normal" | "important";
}

export interface TodoFormInput {
  title: string;
  description: string;
  priority: "normal" | "important";
  date: string;
}
