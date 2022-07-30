import "./index.css";
import { useState } from "react";
import { AddTodoForm } from "./components/AddTodoForm";
import { TodoAppWrapper } from "./components/styled/TodoApp.styled";

export const TodoApp = () => {
  const [showForm, setShowForm] = useState<boolean>(false);

  const toggleShowForm = () => setShowForm((sf) => !sf);

  return (
    <TodoAppWrapper>
      <button onClick={() => toggleShowForm()}>Show Form</button>

      {showForm && <AddTodoForm toggleShowForm={toggleShowForm} />}
    </TodoAppWrapper>
  );
};
