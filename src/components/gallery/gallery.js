import { useEffect } from "react";
import { initialFilms, getFilms } from "../../features/films/filmsSlice";
import { useDispatch, useSelector } from "react-redux";
import { Container } from "../../components/gallery/gallery.styled.js";
import store from "../../app/store";

import Card from "../../components/card";

const Gallery = () => {
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
  return (
    <Container>
      {items.map((item, index) => (
        <Card key={index} info={item} />
      ))}
    </Container>
  );
};

export default Gallery;
