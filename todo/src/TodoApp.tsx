import "./index.css";
import { useState } from "react";
import styled from "styled-components";
import { AddTodoForm } from "./components/styled/AddTodoForm";

const TodoAppWrapper = styled.div`
  min-height: 100vh;
  min-width: 100vw;

  background-color: gray;

  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

export const TodoApp = () => {
  const [showForm, setShowForm] = useState<boolean>(false);

  const toggleShowForm = () => setShowForm((sf) => !sf);

  return (
    <TodoAppWrapper>
      <button onClick={() => toggleShowForm()}>Show Form</button>

      {showForm && <AddTodoForm />}
    </TodoAppWrapper>
  );
};
