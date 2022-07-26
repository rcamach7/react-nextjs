import "./index.css";
import { useState, useEffect } from "react";
import { TodoForm } from "./components/TodoForm";
import { NavBar } from "./components/NavBar";
import {
  TodoAppWrapper,
  TodosContainer,
} from "./components/styled/TodoApp.styled";
import { useAppSelector } from "./features/typedHooks";
import { TodoCard } from "./components/TodoCard";

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

      <TodosContainer>
        {todos.map((todo) => {
          return <TodoCard key={todo.id} todo={todo} />;
        })}
      </TodosContainer>

      {showForm && <TodoForm toggleShowForm={toggleShowForm} />}
    </TodoAppWrapper>
  );
};
