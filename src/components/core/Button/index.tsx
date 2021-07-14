import { ButtonHTMLAttributes, FunctionComponent } from "react";

type ButtonProps = ButtonHTMLAttributes<HTMLButtonElement> & {
  "data-testid"?: string;
};

const Button: FunctionComponent<ButtonProps> = ({
  "data-testid": testId,
  ...rest
}) => {
  return <button data-testid={testId} {...rest} />;
};

export default Button;
