import { useState } from "react";
import styled from "styled-components";
import { v4 } from "uuid";

const AddTodoFormWrapper = styled.div`
  height: 100vh;
  width: 100vw;

  position: absolute;
  top: 0;
  bottom: 0;

  background-color: rgb(0, 0, 0, 0.8);

  display: flex;
  justify-content: center;
  align-items: center;

  form {
    padding: 10px;
    background-color: white;
    outline: auto;

    text-align: center;

    display: flex;
    flex-direction: column;
    gap: 5px;
  }
`;

export const AddTodoForm = () => {
  const [formInput, setFormInput] = useState({
    name: "",
    description: "",
    priority: "normal",
    date: null,
  });

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
  };

  return (
    <AddTodoFormWrapper>
      <form onSubmit={(e) => handleSubmit(e)}>
        <p>Add Todo Form</p>
        <input type="text" placeholder="title" name="description" />
        <textarea placeholder="description" name="description" />
        <input type="date" name="date" />
        <select name="priority" defaultChecked>
          <option value="normal">Normal</option>
          <option value="important">Important</option>
        </select>

        <input type="submit" />
      </form>
    </AddTodoFormWrapper>
  );
};
