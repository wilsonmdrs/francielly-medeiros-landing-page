import Image, { ImageProps } from "next/image";
import styled from "styled-components";
import { theme } from "~/styles/theme";
import { BreakpointsEnum, breakpoints } from "~/utils/breakpoints";

export const Container = styled.section`
  display: flex;
  width: 100%;
  height: 100%;
  min-height: 100%;
  padding: 30px 0;
  position: relative;

  /* Breakpoints */
  ${breakpoints("flex-direction", "", [{ [BreakpointsEnum.MOBILE]: "column" }])}
`;

export const BackgroundImage = styled(Image).attrs(() => ({
  layout: "fill",
}))<ImageProps>`
  position: absolute;
  width: 100%;
  height: unset;
  object-fit: cover;
  z-index: 1;

  /* Breakpoints */
  ${breakpoints("filter", "", [
    { [BreakpointsEnum.MOBILE]: "brightness(40%)" },
  ])}
`;

export const LeftContainer = styled.div`
  display: flex;
  height: 100%;
  width: 45%;
  flex-direction: column;
  z-index: 2;
  align-items: start;
  gap: 30%;
  padding: 30px;
  padding-top: 10%;

  /* Breakpoints */
  ${breakpoints("flex", "", [{ [BreakpointsEnum.MOBILE]: 1 }])}
  ${breakpoints("gap", "px", [{ [BreakpointsEnum.MOBILE]: 20 }])}
  ${breakpoints("padding", "px", [{ [BreakpointsEnum.MOBILE]: 10 }])}
   ${breakpoints("width", "%", [{ [BreakpointsEnum.MOBILE]: 100 }])}
   ${breakpoints("justify-content", "", [{ [BreakpointsEnum.MOBILE]: 'space-evenly' }])}
`;

export const RightContainer = styled.div`
  display: flex;
  height: 100%;
  width: 55%;
  flex-direction: column;
  z-index: 2;
  padding: 30px;
  gap: 30px;
  padding-left: 30%;
  padding-top: 10%;

  /* Breakpoints */
  ${breakpoints("padding", "", [{ [BreakpointsEnum.MOBILE]: '20px 10px' }])}
  ${breakpoints("width", "%", [{ [BreakpointsEnum.MOBILE]: 100 }])}
  ${breakpoints("height", "", [{ [BreakpointsEnum.MOBILE]: 'fit-content' }])}
  ${breakpoints("gap", "px", [{ [BreakpointsEnum.MOBILE]: 20 }])}
`;

export const TextContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 25px;

  /* Breakpoints */
  ${breakpoints("justify-content", "", [
    { [BreakpointsEnum.MOBILE]: "center" },
  ])}
`;

export const Title = styled.h3`
  color: ${theme.colors.gray_700};
  font-size: 41px;
  text-transform: uppercase;
  line-height: 4rem;

  /* Breakpoints */
  ${breakpoints("color", "", [
    { [BreakpointsEnum.MOBILE]: theme.colors.primary },
  ])}
  ${breakpoints("font-size", "px", [{ [BreakpointsEnum.MOBILE]: 18 }])}
    ${breakpoints("line-height", "rem", [{ [BreakpointsEnum.MOBILE]: 1.5 }])}
   ${breakpoints("text-align", "", [{ [BreakpointsEnum.MOBILE]: "center" }])}
`;

export const Subtitle = styled.p`
  font-size: 18px;
  line-height: 1.5rem;
  text-align: start;
  padding-right: 30%;

  /* Breakpoints */
  ${breakpoints("color", "", [
    { [BreakpointsEnum.MOBILE]: theme.colors.white },
  ])}
  ${breakpoints("font-size", "px", [{ [BreakpointsEnum.MOBILE]: 14 }])}
     ${breakpoints("text-align", "", [{ [BreakpointsEnum.MOBILE]: "center" }])}
    ${breakpoints("padding", "px", [{ [BreakpointsEnum.MOBILE]: 0 }])}
`;

export const Button = styled.button`
  border: none;
  font-size: 18px;
  padding: 10px 25px;
  height: 70px;
  cursor: pointer;
  text-transform: uppercase;
  border-radius: 8px;
  background-color: ${theme.colors.primary};
  color: ${theme.colors.white};
  margin-left: 40px;

  /* Breakpoints */
  ${breakpoints("margin", "", [{ [BreakpointsEnum.MOBILE]: "0" }])}
  ${breakpoints("width", "%", [{ [BreakpointsEnum.MOBILE]: 100 }])}
  ${breakpoints("height", "px", [{ [BreakpointsEnum.MOBILE]: 55 }])}
  ${breakpoints("font-size", "px", [{ [BreakpointsEnum.MOBILE]: 12 }])}
`;

export const BenefitContainer = styled.span`
  display: flex;
  gap: 20px;
  align-items: center;

   /* Breakpoints */
   ${breakpoints("gap", "px", [{ [BreakpointsEnum.MOBILE]: 10 }])}
`;

export const Icon = styled(Image)`
  width: 30px;
  height: auto;

   /* Breakpoints */
   ${breakpoints("width", "px", [{ [BreakpointsEnum.MOBILE]: 20 }])}
`;

export const Text = styled.p`
  font-size: 18px;
  color: ${theme.colors.gray_700};

  /* Breakpoints */
  ${breakpoints("font-size", "px", [{ [BreakpointsEnum.MOBILE]: 12 }])}
  ${breakpoints("color", "", [
    { [BreakpointsEnum.MOBILE]: theme.colors.white },
  ])}
`;
