import { useState } from "react";
import { AddTodoFormWrapper } from "./styled/AddTodoForm.styled";
import { Todo, TodoFormInput } from "../features/store.models";
import { v4 } from "uuid";
import { useAppDispatch } from "../features/typedHooks";
import { addTodo } from "../features/todoSlice/todoSlice";

interface Props {
  toggleShowForm: () => void;
}

export const AddTodoForm: React.FC<Props> = ({ toggleShowForm }) => {
  const [formInput, setFormInput] = useState<TodoFormInput>({
    title: "",
    description: "",
    priority: "normal",
    date: "",
  });
  const dispatch = useAppDispatch();

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const todo: Todo = {
      ...formInput,
      id: v4(),
      done: false,
      date: formInput.date,
    };

    dispatch(addTodo(todo));
    toggleShowForm();
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
          required
        />
        <textarea
          value={formInput.description}
          placeholder="description"
          name="description"
          onChange={(e) => handleInputChange(e)}
          required
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
          required
        >
          <option value="normal">Normal</option>
          <option value="important">Important</option>
        </select>

        <input type="submit" />
      </form>
    </AddTodoFormWrapper>
  );
};
