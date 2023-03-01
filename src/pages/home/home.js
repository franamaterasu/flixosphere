import Gallery from "../../components/gallery";
import EmptyState from "../../components/emptyState/";
import Pagination from "../../components/pagination";
import Modal from "../../components/modal";
import { useSelector } from "react-redux";

export const Home = () => {
  const items = useSelector((state) => state.films.films);
  const showModal = useSelector((state) => state.films.ismodalOpen);

  return (
    <section data-test-id="home">
      <Gallery />
      {items.length !== 0 && <Pagination />}
      {items.length === 0 && <EmptyState text="Make a new search..." />}
      {showModal && <Modal />}
    </section>
  );
};

export default Home;
