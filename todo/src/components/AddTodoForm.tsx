import { useEffect, useState } from "react";
import { AddTodoFormWrapper } from "./styled/AddTodoForm.styled";
import { v4 } from "uuid";

export const AddTodoForm = () => {
  const [formInput, setFormInput] = useState({
    title: "",
    description: "",
    priority: "normal",
    date: "",
  });

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
  };

  const handleInputChange = (
    e:
      | React.ChangeEvent<HTMLInputElement>
      | React.ChangeEvent<HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    e.preventDefault();

    setFormInput((FI) => {
      return { ...FI, [name]: value };
    });
  };

  const handleSelectChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    const { name, options, selectedIndex } = e.target;
    e.preventDefault();

    setFormInput((FI) => {
      return {
        ...FI,
        [name]: options[selectedIndex].textContent,
      };
    });
  };

  return (
    <AddTodoFormWrapper>
      <form onSubmit={(e) => handleSubmit(e)}>
        <p>Add Todo Form</p>
        <input
          value={formInput.title}
          type="text"
          placeholder="note title"
          name="title"
          onChange={(e) => handleInputChange(e)}
        />
        <textarea
          value={formInput.description}
          placeholder="description"
          name="description"
          onChange={(e) => handleInputChange(e)}
        />
        <input
          value={formInput.date}
          type="date"
          name="date"
          onChange={(e) => handleInputChange(e)}
        />
        <select
          name="priority"
          defaultChecked
          onChange={(e) => {
            handleSelectChange(e);
          }}
        >
          <option value="normal">Normal</option>
          <option value="important">Important</option>
        </select>

        <input type="submit" />
      </form>
    </AddTodoFormWrapper>
  );
};
