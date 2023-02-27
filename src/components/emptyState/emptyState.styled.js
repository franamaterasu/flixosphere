import styled from "styled-components";
import { GrVideo } from "react-icons/gr";

export const Container = styled.section`
  height: calc(100vh - 75px);
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
`;

export const Icon = styled(GrVideo)`
  font-size: 100px;
  margin-bottom: 10px;
`;

export const Text = styled.p`
  font-family: "Noto Sans Bassa Vah", sans-serif;
  font-size: 16px;
`;
