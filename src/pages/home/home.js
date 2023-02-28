import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { initialFilms, getFilms } from "../../features/films/filmsSlice";
import store from "../../app/store";
import Card from "../../components/card";
import EmptyState from "../../components/emptyState/";
import Modal from "../../components/modal";
import { Container } from "./home.styled.js";

export const Home = () => {
  const dispatch = useDispatch();

  const items = useSelector((state) => state.films.films);

  const searchValue = useSelector((state) => state.films.searchValue);

  const resultsURL = `https://api.themoviedb.org/3/search/movie?api_key=7cdd6813e009397c594758fe7bce7b47&language=en-US&query=${searchValue}`;

  useEffect(() => {
    if (searchValue === "") {
      dispatch(getFilms());
    } else {
      fetch(resultsURL)
        .then((res) => res.json())
        .then((res) => store.dispatch(initialFilms(res.results)));
    }
  }, [searchValue]);

  const showModal = useSelector((state) => state.films.ismodalOpen);

  return (
    <>
      {items.length > 0 ? (
        <Container>
          {items.map((item, index) => (
            <Card key={index} info={item} />
          ))}
        </Container>
      ) : (
        <EmptyState text="Make a new search..." />
      )}
      {showModal && <Modal />}
    </>
  );
};

export default Home;
