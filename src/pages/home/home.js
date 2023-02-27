import { useSelector } from "react-redux";
import Card from "../../components/card";
import EmptyState from "../../components/emptyState/";
import { Container } from "./home.styled.js";

export const Home = () => {
  const items = useSelector((state) => state.films.films.flat());

  return items.length > 0 ? (
    <Container>
      {items.map((item, index) => (
        <Card key={index} info={item} />
      ))}
    </Container>
  ) : (
    <EmptyState text="Make a new search..." />
  );
};

export default Home;
