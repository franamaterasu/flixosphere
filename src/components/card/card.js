import { useDispatch, useSelector } from "react-redux";
import {
  addFavoriteFilm,
  addToWatchMoreLater,
  removeFavoriteFilm,
} from "../../features/films/filmsSlice";

import {
  Container,
  Wrapper,
  ImageContainer,
  Image,
  Title,
  FavoriteIcon,
  ButtonsContainer,
  Button,
} from "./card.styled.js";

const Card = ({ info }) => {
  const dispatch = useDispatch();

  const { title, poster_path } = info;
  const itemImage = `https://image.tmdb.org/t/p/w500/${poster_path}`;

  const favoriteItems = useSelector((state) => state.films.favoriteFilms);

  const isFavorite = favoriteItems.find((item) => item.id === info.id);

  const handleAddFavoriteClick = () => {
    dispatch(addFavoriteFilm(info));
  };

  const handleWatchLaterClick = () => {
    dispatch(addToWatchMoreLater(info));
  };

  const handleRemoveFavoriteClick = () => {
    dispatch(removeFavoriteFilm(info));
  };

  return (
    <Container data-testid="card">
      <Wrapper>
        <ImageContainer>
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
          <ButtonsContainer>
            {!isFavorite ? (
              <Button
                data-testid="card-add-favorite-button"
                onClick={handleAddFavoriteClick}
              >
                Favorite
              </Button>
            ) : (
              <Button
                data-testid="card-delete-favorite-button"
                onClick={handleRemoveFavoriteClick}
              >
                Remove from favorites
              </Button>
            )}

            <Button onClick={handleWatchLaterClick}>Watch later</Button>
          </ButtonsContainer>
        </ImageContainer>
        <Title>{title}</Title>
        {isFavorite && <FavoriteIcon data-testid="card-favorite-icon" />}
      </Wrapper>
    </Container>
  );
};

export default Card;
