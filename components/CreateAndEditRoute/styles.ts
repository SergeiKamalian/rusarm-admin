import styled from "styled-components";

export const StyledCreateAndEditRoute = styled.div`
    width: 100%;
    display: flex;
    flex-direction: column;
    gap: 10px;
`
export const StyledRowBlock = styled.div`
    display: flex;
    flex-direction: row;
    gap: 10px;

    >div {
        width: 100%;
    }

    >button {
        align-self: flex-end;
    }
`