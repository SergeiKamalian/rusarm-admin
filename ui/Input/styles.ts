import styled from "styled-components";

export const StyledInput = styled.input`
    border: none;
    outline: none;
    background: #0E0E0E;
    backdrop-filter: blur(21.5px);
    border-radius: 15px;
    height: 40px;
    color: white;
    padding-left: 16px;
    ::placeholder {
        color: #5F5F5F;
    }
`