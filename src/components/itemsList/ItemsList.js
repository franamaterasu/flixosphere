import { useSelector } from "react-redux";
import Item from "../item/item";

export const ItemsList = () => {
  const items = useSelector((state) => state.films.films.flat());

  return (
    <section>
      {items.map((item) => (
        <Item info={item} />
      ))}
    </section>
  );
};

export default ItemsList;
