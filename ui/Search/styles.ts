import styled from "styled-components";

export const StyledSearch = styled.div`
    background: #0E0E0E;
    border-radius: 24px;
    width: 450px;
    height: 40px;
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: space-between;
    padding: 0 16px;
    min-height: 40px;
`
export const StyledInput = styled.input`
    height: 100%;
    width: 92%;
    background: none;
    border: none;
    outline: none;
    color: white;

    ::placeholder {
        color: #5F5F5F;
    }
`