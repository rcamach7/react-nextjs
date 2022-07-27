import React from "react";
import ReactDOM from "react-dom/client";
import { TodoApp } from "./TodoApp";
import { Provider } from "react-redux";
import { store } from "./features/store";

ReactDOM.createRoot(document.getElementById("root") as HTMLElement).render(
  <React.StrictMode>
    <Provider store={store}>
      <TodoApp />
    </Provider>
  </React.StrictMode>
);
