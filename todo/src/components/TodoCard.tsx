import styled from "styled-components";
import { PriorityType, Todo } from "../features/store.models";
import { MdWarning } from "react-icons/md";
import { format } from "date-fns";
import { useAppDispatch } from "../features/typedHooks";
import { updateTodo } from "../features/todoSlice/todoSlice";
import { TodoWrapper } from "./styled/TodoCard.styled";

interface Props {
  todo: Todo;
}

export const TodoCard: React.FC<Props> = ({ todo }) => {
  const { date, description, done, id, priority, title } = todo;
  const dispatch = useAppDispatch();

  return (
    <TodoWrapper>
      <input type="checkbox" className="checkbox" checked={done} />

      <div className="todoInfo">
        <p>{title}</p>
        <p className="description">{description}</p>
      </div>

      <span className="date">{format(new Date(date), "MM/dd")}</span>

      <div className="priority">
        {priority === PriorityType.Important ? (
          <MdWarning color="red" />
        ) : (
          <MdWarning />
        )}
      </div>

      <div className="interactButtons">
        <button id="edit">Edit</button>
        <button id="delete">Delete</button>
      </div>
    </TodoWrapper>
  );
};
