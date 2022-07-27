import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { Todo } from "../store.models";

interface TodosState {
  value: Todo[];
}

const initialState: TodosState = { value: [] };

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
  },
});

export const { addTodo } = todoSlice.actions;

export const todosSliceReducer = todoSlice.reducer;
