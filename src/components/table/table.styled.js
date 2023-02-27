import styled from "styled-components";

export const Table = styled.table`
  width: 90%;
  margin: 50px auto;
  max-width: 1200px;
`;

export const TableHeader = styled.thead`
  border-right: 2px solid #0f0f0f;
  border-left: 2px solid #0f0f0f;
`;

export const TableHeadColumn = styled.th`
  background-color: #0f0f0f;
  color: #f0f0f0;
  font-family: "Noto Sans Bassa Vah", sans-serif;
  padding: 20px;
  line-height: 0;
`;

export const TableBody = styled.tbody`
  border-right: 2px solid #0f0f0f;
  border-bottom: 2px solid #0f0f0f;
  border-left: 2px solid #0f0f0f;
`;
