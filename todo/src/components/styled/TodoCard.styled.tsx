import styled from "styled-components";

export const TodoWrapper = styled.div`
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
  .date,
  .priority {
    padding-right: 5px;
  }
  .interactButtons {
    flex: 0.5;
    display: flex;
    flex-direction: column;
    gap: 2px;
    button {
      font-size: 13px;
      border-radius: 10px;
      outline: none;
      background-color: transparent;
      border: none;
    }
    #delete {
      color: white;
      background-color: red;
    }
    #edit {
      background-color: lightgreen;
    }
  }
`;
