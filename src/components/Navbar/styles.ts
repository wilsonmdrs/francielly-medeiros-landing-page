import Image from "next/image";
import styled from "styled-components";

export const Container = styled.nav`
    display: flex;
    position: fixed;
    width: 100%;
    height: 10%;
    padding: 10px 30px;
    z-index: 2;
`

export const Logo = styled(Image)`
    width: 100px;
    height: auto;
`

export const Button = styled.button`
  border: none;
  font-size: 18px;
  padding: 10px;
  height: 40px;
  cursor: pointer;
  text-transform: uppercase;
  border-radius: 8px;
  background-color: ${({ theme }) => theme.colors.gray_700};
  color: ${({ theme }) => theme.colors.white};
  margin-left: 40px;
`