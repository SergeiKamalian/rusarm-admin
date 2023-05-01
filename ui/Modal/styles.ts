import styled from "styled-components"

export const StyledModalWrapper = styled.div<{ hide: boolean }>`
    width: 100%;
    height: 100%;
    position: absolute;
    top: 0;
    left: 0;
    background: rgba(0, 0, 0, 0.15);
    backdrop-filter: blur(4px);
    opacity: ${props => props.hide ? 0 : 1};
    z-index: ${props => props.hide ? -1 : 21};
    transition: all .2s;
    display: flex;
    justify-content: center;
    align-items: center;
`
export const StyledModal = styled.div`
    background: #0A0A0A;
    box-shadow: 0px 0px 40px rgba(255, 255, 255, 0.1);
    border-radius: 40px;
    width: 560px;
    padding: 20px 30px;
`
export const StyledModalHeader = styled.div`
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: space-between;
`
export const StyledModalTitle = styled.span`
    color: #FFFFFF;
    font-size: 20px;
    font-weight: 600;
`
export const StyledCloseBtn = styled.button`
    border: none;
    outline: none;
    background: none;
    display: flex;
    justify-content: center;
    align-items: center;
    font-size: 20px;
    cursor: pointer;
`
export const StyledModalBody = styled.div`
    width: 100%;
    margin-top: 20px;
`