import useFetch from "../../hooks/useFetch";
import {
  Container,
  Logo,
  Form,
  FormInput,
  FormButton,
  FormButtonIcon,
  NavLink,
} from "./header.styled.js";

const Header = () => {
  const { setSearchValue } = useFetch();

  const handleSubmit = (e) => {
    e.preventDefault();
    const form = e.target;
    setSearchValue(form.filmName.value);
  };

  return (
    <Container>
      <Logo>
        FLIXO<span>SPHERE</span>
      </Logo>
      <Form onSubmit={handleSubmit}>
        <FormInput
          id="filmName"
          name="filmName"
          type="text"
          placeholder="Search your favorite film"
        />
        <FormButton type="submit">
          <FormButtonIcon type="submit" />
        </FormButton>
      </Form>
      <nav>
        <NavLink to="/">Home</NavLink>
        <NavLink to="/watch-more-later">Pending</NavLink>
      </nav>
    </Container>
  );
};

export default Header;
