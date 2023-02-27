import { useSelector } from "react-redux";
import Card from "../../components/card";
import EmptyState from "../../components/emptyState/";
import Modal from "../../components/modal";
import { Container } from "./home.styled.js";

export const Home = () => {
  const items = useSelector((state) => state.films.films.flat());
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
