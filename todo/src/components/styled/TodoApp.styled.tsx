import styled from "styled-components";

export const TodoAppWrapper = styled.div`
  min-height: 100vh;
  min-width: 100vw;

  background-color: gray;

  display: flex;
  flex-direction: column;
`;

export const NavbarWrapper = styled.nav`
  padding: 15px 10px;

  color: white;
  background-color: #494949;

  display: flex;
  justify-content: space-between;
  align-items: center;
  button {
    font-size: 20px;
    padding: 0 10px;
  }
`;

export const TodosContainer = styled.div`
  width: 100%;
  padding: 10px;

  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  gap: 5px;
`;
