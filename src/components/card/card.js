import { useDispatch, useSelector } from "react-redux";
import {
  addFavoriteFilm,
  addToWatchMoreLater,
  removeFavoriteFilm,
} from "../../features/films/filmsSlice";

import {
  Container,
  Wrapper,
  Image,
  Title,
  FavoriteIcon,
  Button,
} from "./card.styled.js";

const Card = ({ info }) => {
  const dispatch = useDispatch();

  const { title, poster_path } = info;
  const itemImage = `https://image.tmdb.org/t/p/w500/${poster_path}`;

  const pendingItems = useSelector(
    (state) => state.films.filmsToWatchMoreLater
  );

  const favoriteItems = useSelector((state) => state.films.favoriteFilms);

  const isFavorite = favoriteItems.includes(info);

  const handleAddFavoriteClick = () => {
    isFavorite
      ? alert("La peli ya está en favoritos")
      : dispatch(addFavoriteFilm(info));
  };

  const handleWatchLaterClick = () => {
    pendingItems.includes(info)
      ? alert("La peli ya está en pendientes")
      : dispatch(addToWatchMoreLater(info));
  };

  const handleRemoveFavoriteClick = () => {
    dispatch(removeFavoriteFilm(info));
  };

  return (
    <Container>
      <Wrapper>
        {poster_path ? (
          <Image src={itemImage} alt={title} width="250" height="350" />
        ) : (
          <Image
            src={`https://via.placeholder.com/250/?text=${title}`}
            alt={title}
            width="250"
            height="350"
          />
        )}
        <Title>{title}</Title>
        {isFavorite && <FavoriteIcon />}
        {!isFavorite ? (
          <Button onClick={handleAddFavoriteClick}>Favorite</Button>
        ) : (
          <Button onClick={handleRemoveFavoriteClick}>
            Remove from favorites
          </Button>
        )}

        <Button onClick={handleWatchLaterClick}>Watch later</Button>
      </Wrapper>
    </Container>
  );
};

export default Card;
