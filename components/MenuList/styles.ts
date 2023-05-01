import styled from "styled-components";

export const StyledMenuList = styled.ul`
    list-style: none;
    display: flex;
    flex-direction: column;
    align-items: center;
    margin-top: 20px;
    width: 100%;
    gap: 10px;
`
export const StyledMenuItem = styled.li<{active: boolean}>`
    color: white;
    width: 90%;
    height: 40px;
    padding-left: 16px;
    cursor: pointer;
    display: flex;
    flex-direction: row;
    align-items: center;
    gap: 12px;
    line-height: 20px;
    letter-spacing: 0.21em; 
    font-size: 15px;
    border-radius: 24px;
    background: ${props => !props.active ? '#0E0E0E' : 'rgba(255, 255, 255, 0.2)' };
`