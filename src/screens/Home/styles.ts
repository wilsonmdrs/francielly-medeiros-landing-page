import Image from "next/image";
import styled from "styled-components";
export const Container = styled.section`
  display: flex;
  width: 100%;
  height: 100%;
  position: relative;
`;

export const BackgroundImage = styled(Image)`
  display: flex;
  position: absolute;
  width: 100vw;
  height: auto;
  z-index: 1;
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
`

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
`

export const TextContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 25px;
`

export const Title = styled.h3`
  color: ${({ theme }) => theme.colors.gray_700};
  font-size: 41px;
  text-transform: uppercase;
  line-height: 4rem;
`

export const Subtitle = styled.p`
  font-size: 18px;
  line-height: 1.5rem;
  text-align: start;
  justify-content: start;
  padding-right: 30%;
`

export const Button = styled.button`
  border: none;
  font-size: 18px;
  padding: 10px 25px;
  height: 70px;
  cursor: pointer;
  text-transform: uppercase;
  border-radius: 8px;
  background-color: ${({ theme }) => theme.colors.primary};
  color: ${({ theme }) => theme.colors.white};
  margin-left: 40px;
`

export const BenefitContainer = styled.span`
  display: flex;
  gap: 20px;
`

export const Icon = styled(Image)`
  width: 30px;
  height: auto;
`

export const Text = styled.p`
  font-size: 18px;
  color: ${({ theme }) => theme.colors.gray_700};
`