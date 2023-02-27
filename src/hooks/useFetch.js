import { useDispatch } from "react-redux";
import { useState, useEffect } from "react";
import { initialFilms } from "../features/films/filmsSlice";

const useFetch = () => {
  const [searchValue, setSearchValue] = useState("");

  const url = `https://api.themoviedb.org/3/search/movie?api_key=7cdd6813e009397c594758fe7bce7b47&language=en-US&query=${searchValue}&append_to_response=videos`;

  const dispatch = useDispatch();

  useEffect(() => {
    fetch(url)
      .then((res) => res.json())
      .then((res) => dispatch(initialFilms(res.results)));
  }, [url]);

  return { setSearchValue };
};

export default useFetch;
