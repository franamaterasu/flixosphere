import ListItem from "../../components/listItem";

import { useSelector } from "react-redux";

const WatchMoreLater = () => {
  const pendingItems = useSelector(
    (state) => state.films.filmsToWatchMoreLater
  );

  return (
    <section>
      <ul>
        {pendingItems.map((pendingItem, index) => (
          <ListItem key={index} info={pendingItem} />
        ))}
      </ul>
    </section>
  );
};

export default WatchMoreLater;
