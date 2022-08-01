import { useState } from "react";
import { AddTodoFormWrapper } from "./styled/AddTodoForm.styled";
import { Todo, TodoFormInput, PriorityType } from "../features/store.models";
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
    priority: PriorityType.Normal,
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
        [name]:
          options[selectedIndex].textContent === "important"
            ? PriorityType.Important
            : PriorityType.Normal,
      };
    });
  };

  const closeForm = (e: React.MouseEvent<HTMLButtonElement, MouseEvent>) => {
    e.preventDefault();
    toggleShowForm();
  };

  return (
    <AddTodoFormWrapper onClick={() => toggleShowForm()}>
      <form
        onSubmit={(e) => handleSubmit(e)}
        // Prevents any eventListeners to trigger on parent components.
        onClick={(e) => e.stopPropagation()}
      >
        <div className="title">
          <p className="text">Create Todo</p>
          <button className="closeBtn" onClick={(e) => closeForm(e)}>
            X
          </button>
        </div>
        <input
          value={formInput.title}
          type="text"
          placeholder="Title"
          name="title"
          onChange={(e) => handleInputChange(e)}
          required
        />
        <textarea
          value={formInput.description}
          placeholder="Description"
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
        <div className="selectContainer">
          <p className="subTitle">Priority :</p>
          <select
            name="priority"
            defaultChecked
            onChange={(e) => {
              handleSelectChange(e);
            }}
            required
          >
            <option value="normal">normal</option>
            <option value="important">important</option>
          </select>
        </div>

        <input type="submit" />
      </form>
    </AddTodoFormWrapper>
  );
};
