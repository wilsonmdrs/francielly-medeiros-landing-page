import styled from "styled-components";
import { theme } from "~/styles/theme";
import { BreakpointsEnum, breakpoints } from "~/utils/breakpoints";

export const Container = styled.section`
    display: flex;
    width: 100%;
    height: 100%;
    min-height: 100%;
    background-color: ${theme.colors.gray_200};
    padding: 20px 0;
    justify-content: center;
    flex-direction: column;
`

export const Title = styled.h4`
    font-size: 43px;
    color: ${theme.colors.gray_700};
    width: 100%;
    text-align: center;
      /* Breakpoints */
  ${breakpoints("font-size", "px", [{ [BreakpointsEnum.MOBILE]: 16 }])}
`