import { useEffect } from "react";
import {
  initialFilms,
  getFilms,
  totalPages,
} from "../../features/films/filmsSlice";
import { useDispatch, useSelector } from "react-redux";
import { Container } from "../../components/gallery/gallery.styled.js";
import store from "../../app/store";

import Card from "../../components/card";

const Gallery = () => {
  const dispatch = useDispatch();

  const items = useSelector((state) => state.films.films);

  const searchValue = useSelector((state) => state.films.searchValue);

  const page = useSelector((state) => state.films.page);

  const resultsURL = `https://api.themoviedb.org/3/search/movie?api_key=7cdd6813e009397c594758fe7bce7b47&language=en-US&query=${searchValue}&page=${page}`;

  useEffect(() => {
    if (searchValue === "") {
      dispatch(getFilms());
    } else {
      fetch(resultsURL)
        .then((res) => res.json())
        .then((res) => {
          store.dispatch(initialFilms(res.results));
          store.dispatch(totalPages(res.total_pages));
        });
    }
  }, [searchValue, page]);
  return (
    <Container>
      {items.map((item, index) => (
        <Card key={index} info={item} />
      ))}
    </Container>
  );
};

export default Gallery;
