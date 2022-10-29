import * as C from './styled';

export const Button = ({ children, onClick }) => {
    return(
        <C.Button onClick={onClick}>{children}</C.Button>
    )
}