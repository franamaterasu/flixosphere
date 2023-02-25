import { useDispatch } from "react-redux";
import {
  addFavoriteFilm,
  addToWatchMoreLater,
} from "../../features/films/filmsSlice";

const Card = ({ info }) => {
  const { title, poster_path } = info;
  const itemImage = `https://image.tmdb.org/t/p/w500/${poster_path}`;

  const dispatch = useDispatch();

  const handleFavoriteClick = () => {
    dispatch(addFavoriteFilm(info));
  };

  const handleWatchLaterClick = () => {
    dispatch(addToWatchMoreLater(info));
  };

  return (
    <article>
      <img src={itemImage} alt={title} width="200" height="300" />
      <p>{title}</p>
      <button onClick={handleFavoriteClick}>Favorites</button>
      <button onClick={handleWatchLaterClick}>Watch later</button>
    </article>
  );
};

export default Card;
