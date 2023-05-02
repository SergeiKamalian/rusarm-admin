import styled from "styled-components";

export const StyledLayout = styled.div`
    width: 100vw;
    height: 100vh;
    padding: 20px;
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
    background: #010101;
`
export const StyledLeftContent = styled.div`
    width: 25%;
    height: 100%;
    background: #161616;
    border-radius: 24px;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    align-items: center;
`
export const StyledLogo = styled.img`
    width: 50%;
    margin-bottom: 20px;
`
export const StyledRightConent = styled.div`
    width: 73%;
    height: 100%;
    background: #161616;
    border-radius: 24px;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    align-items: center;
    display: flex;
    flex-direction: column;
    padding: 20px 0;
    gap: 20px;
`
export const StyledBody = styled.div`
    width: 100%;
    height: 100%;
`