import { ButtonProps } from "./types";
import ButtonStyles from "./styles";

const Button = ({ children, onClick }: ButtonProps) => (
  <ButtonStyles.StyledButton onClick={onClick}>
    {children}
  </ButtonStyles.StyledButton>
);

export default Button;
