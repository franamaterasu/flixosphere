import { useSelector, useDispatch } from "react-redux";
import { previousPage, nextPage } from "../../features/films/filmsSlice";
import { Container, Button } from "./pagination.styled";

const Pagination = () => {
  const dispatch = useDispatch();

  const totalPages = useSelector((state) => state.films.totalPages);
  const pageNumber = useSelector((state) => state.films.page);

  const handlePrevPageClick = () => {
    dispatch(previousPage());
  };

  const handleNextPageClick = () => {
    dispatch(nextPage());
  };

  return (
    <Container>
      <Button disabled={pageNumber === 1} onClick={handlePrevPageClick}>
        Prev Page
      </Button>
      <Button
        disabled={pageNumber === totalPages}
        onClick={handleNextPageClick}
      >
        Next Page
      </Button>
    </Container>
  );
};

export default Pagination;
