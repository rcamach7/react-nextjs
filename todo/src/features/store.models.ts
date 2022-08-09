export enum PriorityType {
  Important = "important",
  Normal = "normal",
}

export interface Todo {
  id: string;
  title: string;
  description: string;
  date: string;
  done: boolean;
  priority: PriorityType;
}

export interface TodoFormInput {
  title: string;
  description: string;
  priority: PriorityType;
  date: string;
}
