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
  },
});

export const {} = todoSlice.actions;

export const todosSliceReducer = todoSlice.reducer;
