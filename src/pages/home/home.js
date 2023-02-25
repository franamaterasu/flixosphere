import { useSelector } from "react-redux";
import Card from "../../components/card";

export const Home = () => {
  const items = useSelector((state) => state.films.films.flat());

  return (
    <section>
      {items.map((item, index) => (
        <Card key={index} info={item} />
      ))}
    </section>
  );
};

export default Home;
