import styled from "styled-components"

export const StyledButton = styled.button<{ theme: 'primary' | 'secondary' }>`
    border: none;
    outline: none;
    background: ${props => props.theme === 'primary' ? '#1DAEFF'
        : 'linear-gradient(90deg, rgba(254,172,109,1) 0%, rgba(174,97,237,1) 100%)'};
        color: white;
        font-weight: 600;
        padding: 10px 35px;
        font-size: 15px;
        cursor: pointer;
        border-radius: 33px;
        cursor: pointer;
        box-shadow: 0px 17px 33px rgba(29, 174, 255, 0.2);

    opacity: 0.8;
    transition: all .5s;

    :hover {
        opacity: 1;
    }
`