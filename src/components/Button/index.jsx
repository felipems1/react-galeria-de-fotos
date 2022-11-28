import * as C from "./styled";

const Button = ({ children, onClick }) => {
  return <C.Button onClick={onClick}>{children}</C.Button>;
};

export default Button;
