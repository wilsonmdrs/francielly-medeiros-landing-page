import styled from "styled-components";

const getHeight = () => {
    if (typeof window === 'undefined') return '100vh'
    const documentHeight = Math.max(
        window.document.body.scrollHeight,
        window.document.documentElement.scrollHeight
      );
    return documentHeight + 'px'
}

export const Main = styled.main`
    display: flex;
    width: 100%;
    height:${getHeight()};
    background-color: ${({ theme }) => theme.colors.black};
`