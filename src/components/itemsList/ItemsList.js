import { useSelector } from "react-redux";
import Item from "../item";

export const ItemsList = () => {
  const items = useSelector((state) => state.films.films.flat());

  return (
    <section>
      {items.map((item, index) => (
        <Item key={index} info={item} />
      ))}
    </section>
  );
};

export default ItemsList;
