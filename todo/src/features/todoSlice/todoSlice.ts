import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { Todo } from "../store.models";

interface TodosState {
  value: Todo[];
}

// Pulls saved Todo's in local storage (if any).
const savedTodos = localStorage.getItem("myTodos");
const initialState: TodosState = {
  value: savedTodos ? JSON.parse(savedTodos) : [],
};

export const todoSlice = createSlice({
  name: "Todos",
  initialState,
  reducers: {
    addTodo: (state, action: PayloadAction<Todo>) => {
      state.value.push(action.payload);
    },
    // App will receive todo ID, to be removed from collection.
    removeTodo: (state, action: PayloadAction<string>) => {
      state.value = state.value.filter((todo) => todo.id !== action.payload);
    },
    setTodos: (state, action: PayloadAction<Todo[]>) => {
      state.value = action.payload;
    },
    updateTodo: (state, action: PayloadAction<{ id: string; todo: Todo }>) => {
      state.value = state.value.map((todo) => {
        return todo.id === action.payload.id ? action.payload.todo : todo;
      });
    },
  },
});

export const { addTodo, removeTodo, setTodos, updateTodo } = todoSlice.actions;

export const todosSliceReducer = todoSlice.reducer;
