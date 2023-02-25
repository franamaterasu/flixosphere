import { GrFormSearch } from "react-icons/gr";
import styled from "styled-components";
import { Link } from "react-router-dom";

export const Container = styled.header`
  background-color: #0f0f0f;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
  padding: 20px 50px;

  @media (min-width: 768px) {
    flex-direction: row;
    padding: 20px;
  }
`;

export const Logo = styled.span`
  color: #f0f0f0;
  font-family: "Noto Sans Bassa Vah", sans-serif;
  font-size: 25px;
  margin-bottom: 25px;

  span {
    display: inline-block;
    background-color: #005dff;
    padding: 5px 10px;
    border-radius: 10px;
    margin-left: 5px;
  }

  @media (min-width: 768px) {
    margin-bottom: 0;
  }
`;

export const Form = styled.form`
  position: relative;
  width: 100%;
  max-width: 400px;
  margin: 0 auto 25px;

  @media (min-width: 768px) {
    margin-bottom: 0;
    max-width: 250px;
  }

  @media (min-width: 1200px) {
    max-width: 450px;
  }
`;

export const FormInput = styled.input`
  outline: none;
  border: 0;
  font-family: "Lato", sans-serif;
  color: #f0f0f0;
  padding: 10px 40px 10px 20px;
  border-radius: 10px;
  width: 100%;
  box-sizing: border-box;
  background-color: #333232;

  @media (min-width: 768px) {
    margin-bottom: 0;
  }
`;

export const FormButton = styled.button`
  position: absolute;
  background-color: #005dff;
  border-top-right-radius: 10px;
  border-bottom-right-radius: 10px;
  border: none;
  padding: 0 5px;
  right: 0;
`;

export const FormButtonIcon = styled(GrFormSearch)`
  font-size: 33px;
  position: relative;
  top: 1px;
`;

export const NavLink = styled(Link)`
  font-family: "Lato", sans-serif;
  color: #f0f0f0;
  text-decoration: none;
  margin-right: 25px;

  &:last-of-type {
    margin-right: 0;
  }

  &:hover {
    color: #005dff;
  }
`;
