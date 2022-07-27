import { configureStore } from "@reduxjs/toolkit";
import { todosSliceReducer } from "./todoSlice/todoSlice";

export const store = configureStore({
  reducer: { todos: todosSliceReducer },
});

// Needed for typing our state and dispatch functions anytime they're used in our application.
export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
