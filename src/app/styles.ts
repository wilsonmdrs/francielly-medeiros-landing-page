import styled from "styled-components";



export const Main = styled.main`
    display: flex;
    width: 100%;
    height:100%;
    flex-direction: column;
    overflow-y: scroll ;
    background-color: ${({ theme }) => theme.colors.black};

    scrollbar-width: thin;
  scrollbar-color: transparent transparent;

  &::-webkit-scrollbar-thumb {
    background-color: transparent;
  }
  &::-webkit-scrollbar {
    display: none;
  }
`