import TableItem from "../tableItem";

import { useSelector } from "react-redux";

import {
  Table as Container,
  TableHeader,
  TableHeadColumn,
  TableBody,
} from "./table.styled.js";

const Table = () => {
  const pendingItems = useSelector(
    (state) => state.films.filmsToWatchMoreLater
  );

  return (
    <Container>
      <TableHeader>
        <TableHeadColumn>ID</TableHeadColumn>
        <TableHeadColumn>Image</TableHeadColumn>
        <TableHeadColumn>Name</TableHeadColumn>
        <TableHeadColumn>Description</TableHeadColumn>
        <TableHeadColumn>Actions</TableHeadColumn>
      </TableHeader>
      <TableBody>
        {pendingItems.map((pendingItem, index) => (
          <TableItem key={index} info={pendingItem} />
        ))}
      </TableBody>
    </Container>
  );
};

export default Table;
