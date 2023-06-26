import { createGlobalStyle } from "styled-components";

const getHeight = () => {
  if (typeof window === 'undefined') return '100vh'
  const documentHeight = Math.max(
      window.document.body.scrollHeight,
      window.document.documentElement.scrollHeight
    );
  return documentHeight + 'px'
}
export default createGlobalStyle`
    *{
        margin: 0;
        padding: 0;
        outline:0;
        box-sizing:border-box;
        font-family: 'Open Sans', sans-serif; 
    }
    body {
      margin: 0;
      width: 100vw;
      height: ${getHeight()};
    }
 `;