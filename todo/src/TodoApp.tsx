import "./index.css";
import { useState, useEffect } from "react";
import { AddTodoForm } from "./components/AddTodoForm";
import { NavBar } from "./components/NavBar";
import { TodoAppWrapper } from "./components/styled/TodoApp.styled";
import { useAppSelector } from "./features/typedHooks";

export const TodoApp = () => {
  const [showForm, setShowForm] = useState<boolean>(false);
  const todos = useAppSelector((state) => state.todos.value);

  const toggleShowForm = () => setShowForm((sf) => !sf);

  useEffect(() => {
    localStorage.setItem("myTodos", JSON.stringify(todos));
  }, [todos]);

  return (
    <TodoAppWrapper>
      <NavBar toggleShowForm={toggleShowForm} />

      <div className="todosContainer">
        {todos.map((todo) => {
          return <div key={todo.id}>{todo.title}</div>;
        })}
      </div>

      {showForm && <AddTodoForm toggleShowForm={toggleShowForm} />}
    </TodoAppWrapper>
  );
};
