import { useEffect, useState } from "react";
import { AddTodoFormWrapper } from "./styled/AddTodoForm.styled";
import { Todo, TodoFormInput, PriorityType } from "../features/store.models";
import { v4 } from "uuid";
import { useAppDispatch } from "../features/typedHooks";
import { addTodo, updateTodo } from "../features/todoSlice/todoSlice";

interface Props {
  toggleShowForm: () => void;
  todo?: Todo;
}

export const TodoForm: React.FC<Props> = ({ toggleShowForm, todo }) => {
  const [formInput, setFormInput] = useState<TodoFormInput>({
    title: todo ? todo.title : "",
    description: todo ? todo.description : "",
    priority: todo ? todo.priority : PriorityType.Normal,
    date: todo ? todo.date : "",
  });
  const dispatch = useAppDispatch();

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    if (todo) {
      const updatedTodo: Todo = {
        ...formInput,
        id: todo.id,
        done: todo.done,
      };
      dispatch(updateTodo({ id: todo.id, todo: updatedTodo }));
    } else {
      const todo: Todo = {
        ...formInput,
        id: v4(),
        done: false,
      };

      dispatch(addTodo(todo));
    }
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
            onChange={(e) => {
              handleSelectChange(e);
            }}
            defaultValue={todo ? todo.priority : "normal"}
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
