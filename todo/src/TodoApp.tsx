import styled from "styled-components";
import "./index.css";

const TodoAppWrapper = styled.div`
  min-height: 100vh;
  min-width: 100vw;

  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

export const TodoApp = () => {
  return (
    <TodoAppWrapper>
      <h1>Hello World</h1>
    </TodoAppWrapper>
  );
};
