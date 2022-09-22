import styled from "styled-components";

const StyledButton = styled.button`
  color: #555;
  fill: #555;
  background-color: hsla(0, 0%, 100%, 0.9);
  display: inline-block;
  height: 32px;
  padding: 0 11px;
  font-size: 14px;
  font-weight: bold;
  line-height: 29px;
  cursor: pointer;
  border: 1px solid transparent;
  border-radius: 4px;
  text-decoration: none;
  transition: all 0.1s ease-in-out;
  box-shadow: 0 1px 1px rgb(0 0 0 / 4%);

  &:hover {
    color: #111;
    fill: currentColor;
    background-color: #fff;
  }
`;

export default { StyledButton };
