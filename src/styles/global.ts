import { createGlobalStyle } from "styled-components";

const  documentHeight = Math.max(
    document.body.scrollHeight,
    document.documentElement.scrollHeight
  );

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
      height: ${documentHeight + 'px'};
    }
 `;