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
    border-radius: 10px;
    border: solid black 2px;

    text-align: center;

    display: flex;
    flex-direction: column;
    gap: 10px;
    .title {
      display: flex;
      justify-content: space-between;
      p {
        font-weight: bold;
      }
      button {
        padding: 0 5px;
      }
    }
    .selectContainer {
      display: flex;
      align-items: center;
      justify-content: space-around;
      .subTitle {
        font-size: 14px;
      }
    }
  }
`;
