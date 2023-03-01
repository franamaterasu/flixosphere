import Gallery from "../../components/gallery";
import EmptyState from "../../components/emptyState/";
import Modal from "../../components/modal";
import { useSelector } from "react-redux";

export const Home = () => {
  const items = useSelector((state) => state.films.films);
  const showModal = useSelector((state) => state.films.ismodalOpen);

  return (
    <section data-test-id="home">
      {items.length >= 1 ? (
        <Gallery />
      ) : (
        <EmptyState text="Make a new search..." />
      )}
      {showModal && <Modal />}
    </section>
  );
};

export default Home;
