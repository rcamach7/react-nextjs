import styled from "styled-components";

export const AddTodoFormWrapper = styled.div`
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
