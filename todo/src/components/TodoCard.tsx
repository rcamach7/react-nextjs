import { PriorityType, Todo } from "../features/store.models";
import { MdWarning } from "react-icons/md";
import { format } from "date-fns";
import { useAppDispatch } from "../features/typedHooks";
import { updateTodo, removeTodo } from "../features/todoSlice/todoSlice";
import { TodoWrapper } from "./styled/TodoCard.styled";
import { useState } from "react";
import { TodoForm } from "./TodoForm";
import { formatDate } from "../utilities/utils";

interface Props {
  todo: Todo;
}

export const TodoCard: React.FC<Props> = ({ todo }) => {
  const { date, description, done, id, priority, title } = todo;
  const [showForm, setShowForm] = useState<boolean>(false);
  const dispatch = useAppDispatch();

  const handleDone = () => {
    const updatedTodo: Todo = {
      ...todo,
      done: !done,
    };
    dispatch(updateTodo({ id, todo: updatedTodo }));
  };

  return (
    <TodoWrapper>
      <input
        type="checkbox"
        className="checkbox"
        checked={done}
        onChange={handleDone}
      />
      <div className="todoInfo">
        <p>{title}</p>
        <p className="description">{description}</p>
      </div>

      <div className="extraInfo">
        <span className="date">{formatDate(date)}</span>

        <div className="priority">
          {priority === PriorityType.Important ? (
            <MdWarning color="red" />
          ) : (
            <MdWarning />
          )}
        </div>
      </div>

      <div className="interactButtons">
        <button id="edit" onClick={() => setShowForm((SF) => !SF)}>
          Edit
        </button>
        <button id="delete" onClick={() => dispatch(removeTodo(id))}>
          Delete
        </button>
      </div>

      {showForm && (
        <TodoForm todo={todo} toggleShowForm={() => setShowForm((SF) => !SF)} />
      )}
    </TodoWrapper>
  );
};
