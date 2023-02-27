import styled from "styled-components";
import { GrFormTrash } from "react-icons/gr";

export const TableRow = styled.tr`
  border-bottom: 2px solid #0f0f0f;

  &:last-of-type {
    border-bottom: 0;
  }
`;

export const TableData = styled.td`
  vertical-align: middle;
  padding: 20px;
  font-family: "Lato", sans-serif;
  font-weight: 300;
  font-size: 15px;
  line-height: 20px;
`;

export const TableDataImage = styled.img`
  border-radius: 10px;
`;

export const TableDataIcon = styled(GrFormTrash)`
  font-size: 45px;
  cursor: pointer;
`;
