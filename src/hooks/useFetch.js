import { useDispatch } from "react-redux";
import { useState, useEffect } from "react";
import { initialFilms } from "../features/films/filmsSlice";

const useFetch = () => {
  const [searchValue, setSearchValue] = useState("");

  const initialURL =
    "https://api.themoviedb.org/3/movie/top_rated/?api_key=7cdd6813e009397c594758fe7bce7b47&language=en-US";

  const url = `https://api.themoviedb.org/3/search/movie?api_key=7cdd6813e009397c594758fe7bce7b47&language=en-US&query=${searchValue}`;

  const dispatch = useDispatch();

  useEffect(() => {
    if (searchValue !== "") {
      fetch(url)
        .then((res) => res.json())
        .then((res) => dispatch(initialFilms(res.results)));
    } else {
      fetch(initialURL)
        .then((res) => res.json())
        .then((res) => dispatch(initialFilms(res.results)));
    }
  }, [url]);

  return { setSearchValue };
};

export default useFetch;
