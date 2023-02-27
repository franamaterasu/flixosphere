import styled from "styled-components";
import { GrFavorite } from "react-icons/gr";

export const Container = styled.article`
  text-align: center;
`;

export const Wrapper = styled.div`
  position: relative;
`;

export const Image = styled.img`
  border-radius: 10px;
  width: 100%;
  min-height: 389px;
`;

export const Title = styled.h4`
  font-weight: 300;
  font-family: "Noto Sans Bassa Vah", sans-serif;
  font-size: 14px;
  margin: 10px 0 20px;
  line-height: 20px;
`;

export const FavoriteIcon = styled(GrFavorite)`
  font-size: 25px;
  padding: 6px;
  position: absolute;
  top: 15px;
  right: 20px;
  background-color: #005dff;
  border-radius: 10px;
`;

export const Button = styled.button`
  background-color: #005dff;
  color: #f0f0f0;
  font-family: "Lato", sans-serif;
  font-weight: 300;
  border: none;
  border-radius: 5px;
  padding: 5px 10px;
  margin-right: 10px;

  &:hover {
    cursor: pointer;
  }

  &:last-of-type {
    margin-right: 0;
  }
`;
