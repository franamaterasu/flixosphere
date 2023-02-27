import Table from "../../components/table";
import EmptyState from "../../components/emptyState";
import { useSelector } from "react-redux";

const WatchMoreLater = () => {
  const pendingItems = useSelector(
    (state) => state.films.filmsToWatchMoreLater
  );

  return (
    <section>
      {pendingItems.length > 0 ? (
        <Table />
      ) : (
        <EmptyState text="Pending list is empty" />
      )}
    </section>
  );
};

export default WatchMoreLater;
