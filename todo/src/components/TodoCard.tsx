import styled from "styled-components";
import { PriorityType, Todo } from "../features/store.models";
import { MdWarning } from "react-icons/md";

interface Props {
  todo: Todo;
}

const TodoWrapper = styled.div`
  height: 50px;
  width: 300px;
  padding: 5px 10px;

  background-color: white;
  display: flex;
  align-items: center;
  .todoInfo {
    padding-left: 10px;
    flex: 2;
    .description {
      font-size: 12px;
    }
  }
  .date {
    padding-right: 5px;
  }
`;

export const TodoCard: React.FC<Props> = ({ todo }) => {
  const { date, description, done, id, priority, title } = todo;

  return (
    <TodoWrapper>
      <input type="checkbox" className="checkbox" />

      <div className="todoInfo">
        <p>{title}</p>
        <p className="description">{description}</p>
      </div>

      <span className="date">{date}</span>

      <div className="priority">
        {priority === PriorityType.Important ? (
          <MdWarning color="red" />
        ) : (
          <MdWarning />
        )}
      </div>
    </TodoWrapper>
  );
};
