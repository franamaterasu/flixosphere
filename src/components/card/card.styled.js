import styled from "styled-components";
import { GrFavorite } from "react-icons/gr";

export const Container = styled.article`
  text-align: center;
`;

export const Wrapper = styled.div`
  position: relative;
`;

export const ButtonsContainer = styled.div`
  width: 100%;
  display: flex;
  position: absolute;
  bottom: -45px;
  transition: bottom 0.5s ease-in-out;
`;

export const ImageContainer = styled.div`
  position: relative;
  overflow: hidden;
  font-size: 0;
  border-bottom-left-radius: 10px;
  border-bottom-right-radius: 10px;

  &:hover ${ButtonsContainer} {
    bottom: 0;
  }
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
  padding: 15px 10px;
  flex: 1;

  &:hover {
    cursor: pointer;
    background-color: #0451d6;
  }

  &:first-of-type {
    border-bottom-left-radius: 10px;
    border-right: 1px solid #0451d6;
    text-overflow: ellipsis;
    overflow: hidden;
    white-space: nowrap;
  }

  &:last-of-type {
    border-bottom-right-radius: 10px;
  }
`;
