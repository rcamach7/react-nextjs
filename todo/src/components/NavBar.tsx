import { NavbarWrapper } from "./styled/TodoApp.styled";

interface Props {
  toggleShowForm: () => void;
}

export const NavBar = ({ toggleShowForm }: Props) => {
  return (
    <NavbarWrapper>
      <h1>Todo App</h1>
      <button onClick={() => toggleShowForm()}>+</button>
    </NavbarWrapper>
  );
};
