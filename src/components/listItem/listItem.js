import { useDispatch } from "react-redux";
import { removeToWatchMoreLater } from "../../features/films/filmsSlice";

const ListItem = ({ info }) => {
  const dispatch = useDispatch();

  const { title, backdrop_path } = info;
  const itemImage = `https://image.tmdb.org/t/p/w500/${backdrop_path}`;

  const handleDeleteFromPending = () => {
    dispatch(removeToWatchMoreLater(info));
  };

  return (
    <li>
      <img src={itemImage} alt={title} width="150" height="100" />
      <span>{title}</span>
      <button onClick={() => handleDeleteFromPending(info)}>Delete</button>
    </li>
  );
};

export default ListItem;
