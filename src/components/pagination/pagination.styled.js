import styled from "styled-components";

export const Container = styled.section`
  width: 100%;
  text-align: center;
  margin-bottom: 30px;
`;

export const Button = styled.button`
  font-family: "Lato", sans-serif;
  color: #f0f0f0;
  background-color: #005dff;
  border-radius: 10px;
  outline: none;
  border: 0;
  padding: 21px 10px;
  font-size: 16px;
  line-height: 0;
  margin-right: 20px;
  cursor: pointer;
  transition: background-color 0.5s ease-in-out;
  font-weight: 300;

  &:last-of-type {
    margin-right: 0;
  }

  &:hover {
    background-color: #0451d6;
  }

  &: disabled;
  &[disabled] {
    background-color: #9fc1fc;
    cursor: default;
  }
`;
