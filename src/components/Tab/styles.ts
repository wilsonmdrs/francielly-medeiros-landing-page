import styled from "styled-components";
import { theme } from "~/styles/theme";
import { BreakpointsEnum, breakpoints } from "~/utils/breakpoints";

export const Container = styled.div`
    display: flex;
    width: 100%;
    flex:1;
    flex-direction: column;
    gap: 20px;
`

export const TabHeader = styled.div`
    display: flex;
    justify-content: center;
    padding: 10px 0;
    height: fit-content;
    width: 100%;
`

export const TabContent = styled.div`
    display: flex;
    flex: 1;
    width: 100%;
    padding: 10px;
`

export const TimeLine = styled.span`
    display: flex;
    justify-content: space-evenly;
    width: 100%;
    border-bottom: 3px solid ${theme.colors.gray_700};
`

export const TimelineItem = styled.span`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    transform: translateY(80%);
    cursor: pointer;
    gap: 5px;
    flex: 1;
`

export const Icon = styled.span`
    width: 20px;
    height: 20px;
    border-radius: 50%;
    background-color: ${theme.colors.gray_700};
    transition: transform .3s ease-in-out;
    &:hover {
        transform: scale(1.3);
    }
`

export const Text = styled.p`
    font-size: 16px;
    color: ${theme.colors.gray_700};

      /* Breakpoints */
    ${breakpoints("font-size", "px", [{ [BreakpointsEnum.MOBILE]: 12 }])}
`
