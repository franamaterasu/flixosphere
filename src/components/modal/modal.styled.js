import { GrAdd, GrList } from "react-icons/gr";
import styled from "styled-components";

export const Container = styled.section`
  position: fixed;
  background-color: rgba(0, 0, 0, 0.7);
  display: flex;
  justify-content: center;
  align-items: center;
  top: 0;
  width: 100%;
  height: 100%;
`;

export const Wrapper = styled.div`
  width: 90%;
  max-width: 340px;
  text-align: center;
`;

export const Header = styled.header`
  background-color: #005dff;
  padding: 10px 20px;
  border-top-left-radius: 10px;
  border-top-right-radius: 10px;
  text-align: right;
`;

export const IconClose = styled(GrAdd)`
  font-size: 20px;
  transform: rotate(135deg);
  cursor: pointer;
`;

export const Info = styled.div`
  background-color: #f0f0f0;
  padding: 40px 20px;
  border-bottom-left-radius: 10px;
  border-bottom-right-radius: 10px;
`;

export const IconList = styled(GrList)`
  font-size: 30px;
  background-color: #005dff;
  padding: 10px;
  border-radius: 100%;
  margin-bottom: 15px;
`;

export const Text = styled.p`
  color: #0f0f0f;
  font-family: "Noto Sans Bassa Vah", sans-serif;
  font-size: 21px;
`;
