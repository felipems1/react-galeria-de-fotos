import styled from 'styled-components';

export const Button = styled.button`
    margin: 15px 0 0 10px;
    border: none;
    background-color: chartreuse;
    width: 120px;
    height: 40px;
    border-radius: 10px;
    font-size: 14px;
    font-weight: bold;
    color: #222;
    cursor: pointer;
    transition: all 0.5s ease;

    &:hover {
        background-color: #555;
        color: chartreuse;
    }
`;