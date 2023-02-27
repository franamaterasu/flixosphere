import TableItem from "../tableItem";

import { useSelector } from "react-redux";

import {
  Wrapper,
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
    <Wrapper>
      <Container>
        <TableHeader>
          <tr>
            <TableHeadColumn>ID</TableHeadColumn>
            <TableHeadColumn>Image</TableHeadColumn>
            <TableHeadColumn>Name</TableHeadColumn>
            <TableHeadColumn>Description</TableHeadColumn>
            <TableHeadColumn>Actions</TableHeadColumn>
          </tr>
        </TableHeader>
        <TableBody>
          {pendingItems.map((pendingItem, index) => (
            <TableItem key={index} info={pendingItem} />
          ))}
        </TableBody>
      </Container>
    </Wrapper>
  );
};

export default Table;
