import styled from "styled-components"

export const StyledButton = styled.button<{ theme: 'primary' | 'secondary', size: 'large' | 'medium' | 'small' }>`
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
    height: ${props => props.size === 'medium' ? '40px' : '30px'};
    display: flex;
    justify-content: center;
    align-items: center;
    :hover {
        opacity: 1;
    }
`
export const StyledCircleButton = styled.button<{theme: 'edit' | 'delete' | 'add'}>`
    border: none;
    outline: none;
    display: flex;
    justify-content: center;
    align-items: center;
    width: 30px;
    height: 30px;
    background:${props => props.theme === 'delete' ? '#DD5E5E' : (props.theme === 'edit' ? '#1DAEFF' : '#09b50b')};
    /* #DD5E5E */
    /* #1DAEFF */
    border-radius: 50%;
    opacity: 0.8;
    transition: all .5s;
    cursor: pointer;
    :hover {
        opacity: 1;
    }
`