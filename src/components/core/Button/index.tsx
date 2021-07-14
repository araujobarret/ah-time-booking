import { ButtonHTMLAttributes, FunctionComponent } from "react";
import styled from "styled-components";

const BaseButton = styled.button`
  appearance: none;
  cursor: pointer;
  background-color: ${({ theme }) => theme.button.backgroundColor};
  border: none;
  border-radius: 4px;
  padding: 4px;
  width: 100%;
`;

type ButtonProps = ButtonHTMLAttributes<HTMLButtonElement>;

const Button: FunctionComponent<ButtonProps> = (props) => {
  return <BaseButton {...props} />;
};

export default Button;
