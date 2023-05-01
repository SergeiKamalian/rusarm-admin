import styled from "styled-components";

export const StyledDays = styled.ul`
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
    list-style: none;
    gap: 5px;
`
export const StyledDay = styled.li<{ active: boolean }>`
    background: ${props => props.active ? 'rgba(255,255,255,0.2)' : '#0E0E0E'};
    width: 40px;
    height: 40px;
    border-radius: 15px;
    color: white;
    display: flex;
    justify-content: center;
    align-items: center;
    cursor: pointer;
    font-size: 13px;
`