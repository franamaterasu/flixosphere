import { useDispatch } from "react-redux";
import { removeToWatchMoreLater } from "../../features/films/filmsSlice";
import {
  TableRow,
  TableData,
  TableDataImage,
  TableDataIcon,
} from "./tableItem.styled";

const TableItem = ({ info }) => {
  const dispatch = useDispatch();

  const { id, title, overview, poster_path } = info;

  const itemImage = `https://image.tmdb.org/t/p/w500/${poster_path}`;

  const shortOverview = overview.slice(0, 150);

  const handleDeleteFromPending = () => {
    dispatch(removeToWatchMoreLater(info));
  };

  return (
    <TableRow>
      <TableData>
        <span>{id}</span>
      </TableData>
      <TableData>
        {poster_path ? (
          <TableDataImage
            src={itemImage}
            alt={title}
            width="150"
            height="100"
          />
        ) : (
          <TableDataImage
            src={`https://via.placeholder.com/150/?text=${title}`}
            alt={title}
            width="150"
            height="100"
          />
        )}
      </TableData>
      <TableData>
        <span>{title}</span>
      </TableData>
      <TableData>
        <p>{shortOverview}</p>
      </TableData>
      <TableData>
        <TableDataIcon onClick={() => handleDeleteFromPending(info)} />
      </TableData>
    </TableRow>
  );
};

export default TableItem;
