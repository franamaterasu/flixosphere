import { useDispatch, useSelector } from "react-redux";
import { useLocation } from "react-router-dom";
import { searchValue, resetPage } from "../../features/films/filmsSlice";
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
  const dispatch = useDispatch();
  const location = useLocation();
  const pendinItems = useSelector((state) => state.films.filmsToWatchMoreLater);

  const handleSubmit = (e) => {
    e.preventDefault();
    const form = e.target;
    dispatch(searchValue(form.filmName.value));
    dispatch(resetPage(1));
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
