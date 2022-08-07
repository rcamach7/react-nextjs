import { PriorityType, Todo } from "../features/store.models";
import { MdWarning } from "react-icons/md";
import { format } from "date-fns";
import { useAppDispatch } from "../features/typedHooks";
import { updateTodo, removeTodo } from "../features/todoSlice/todoSlice";
import { TodoWrapper } from "./styled/TodoCard.styled";

interface Props {
  todo: Todo;
}

export const TodoCard: React.FC<Props> = ({ todo }) => {
  const { date, description, done, id, priority, title } = todo;
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
        onClick={handleDone}
      />
      <div className="todoInfo">
        <p>{title}</p>
        <p className="description">{description}</p>
      </div>

      <div className="extraInfo">
        <span className="date">{format(new Date(date), "MM/dd")}</span>

        <div className="priority">
          {priority === PriorityType.Important ? (
            <MdWarning color="red" />
          ) : (
            <MdWarning />
          )}
        </div>
      </div>

      <div className="interactButtons">
        <button id="edit">Edit</button>
        <button id="delete" onClick={() => dispatch(removeTodo(id))}>
          Delete
        </button>
      </div>
    </TodoWrapper>
  );
};
