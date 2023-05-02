import Link from "next/link";
import styled from "styled-components";

export const StyledRoutes = styled.div`
    width: 100%;
    height: 100%;
`
export const StyledTitles = styled.ul`
    width: 100%;
    list-style: none;
    display: flex;
    flex-direction: row;
    align-items: center;
    padding: 0 20px;
    justify-content: space-between;
`
export const StyledTitle = styled.li<{customWidth?: number}>`
    width: 130px;
    color: #5F5F5F;
    font-size: 13px;
    width: ${props => props.customWidth ? `${props.customWidth}px` : '100px'};
`
export const StyledValue = styled.li<{customWidth?: number}>`
    width: 130px;
    color: white;
    font-size: 13px;
    font-weight: 600;
    width: ${props => props.customWidth ? `${props.customWidth}px` : '100px'};
`
export const StyledRouteList = styled.div`
    list-style: none;
    display: flex;
    flex-direction: column;
    margin-top: 10px;
`
export const StyledRouteItem = styled.div<{backgroundIsLight: boolean}>`
    width: 100%;
    height: 40px;
    background: ${props => props.backgroundIsLight ? '#0E0E0E' : 'rgb(82 82 82 / 10%)'};
    /* background: #0E0E0E; */
    color: white;
    font-size: 15px;
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: space-between;
    padding: 0 20px;
`
export const StyledLink = styled(Link)`
    color: white;
    font-size: 13px;
    font-weight: 600;
`
export const StyledValues = styled.div`
    display: flex;
    flex-direction: row;
    align-items: center;
`
export const StyledButtons = styled.div`
    display: flex;
    flex-direction: row;
    gap: 10px;
    align-items: center;
`
// export const StyledTitles = styled.div`

// `