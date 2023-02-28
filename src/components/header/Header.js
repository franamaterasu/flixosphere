import { useSelector } from "react-redux";
import { useLocation } from "react-router-dom";
import useFetch from "../../hooks/useFetch";
import {
  Container,
  Logo,
  Form,
  FormInput,
  FormButton,
  FormButtonIcon,
  NavLink,
  NavLinkBadge,
} from "./header.styled.js";

const Header = () => {
  const { setSearchValue } = useFetch();
  const location = useLocation();
  const pendinItems = useSelector((state) => state.films.filmsToWatchMoreLater);

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
      {location.pathname === "/" ? (
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
      ) : null}

      <nav>
        <NavLink to="/">Home</NavLink>
        <NavLink to="/watch-more-later">
          Pending
          {pendinItems.length >= 1 && (
            <NavLinkBadge>{pendinItems.length}</NavLinkBadge>
          )}
        </NavLink>
      </nav>
    </Container>
  );
};

export default Header;
