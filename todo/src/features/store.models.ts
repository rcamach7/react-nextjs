export enum PriorityType {
  Important = "Important",
  Normal = "Normal",
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
