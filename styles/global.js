import { createGlobalStyle } from "styled-components";
import { minimal, primary } from "./pallete";

const GlobalStyles = createGlobalStyle`
/* font applied start */
@font-face {
  font-family: "Gordita";
  font-style: normal;
  font-weight: 400;
  src: local("Gordita"),
    url("https://fonts.cdnfonts.com/s/27113/Gordita Regular.woff")
      format("woff");
}
@font-face {
  font-family: "Gordita";
  font-style: normal;
  font-weight: 300;
  src: local("Gordita"),
    url("https://fonts.cdnfonts.com/s/27113/Gordita Light.woff") format("woff");
}
@font-face {
  font-family: "Gordita";
  font-style: normal;
  font-weight: 500;
  src: local("Gordita"),
    url("https://fonts.cdnfonts.com/s/27113/Gordita Medium.woff") format("woff");
}
@font-face {
  font-family: "Gordita";
  font-style: normal;
  font-weight: 700;
  src: local("Gordita"),
    url("https://fonts.cdnfonts.com/s/27113/Gordita Bold.woff") format("woff");
}
@font-face {
  font-family: "Gordita";
  font-style: normal;
  font-weight: 900;
  src: local("Gordita"),
    url("https://fonts.cdnfonts.com/s/27113/Gordita Black.woff") format("woff");
}
/* font applied end */

/* global styled maargin padding and font */
    * {
      box-sizing: border-box;
      font-family:"Gordita";
      margin: 0;
      padding:0;
    }
/*font alternates and overflow stop along x-direction  */
    html, body {
      font-family: "Gordita",Helvetica-Neue,Helvetica,Arial,sans-serif;
      width: 100vw;
      overflow-x: hidden;
      margin: 0;
      padding: 0;
    }
/* text selection color */
     /* Code for Firefox */
    ::-moz-selection {
     color: ${minimal.white};
      background: ${primary.cherry};
    }
    /* code for chrome */
    ::selection {
      color: ${minimal.white};
      background: ${primary.cherry};
    }

    ul {
      list-style: none;
      padding: 0;
    }
    a {
      text-decoration: none;
      &:visited {
        color: inherit;
      }
    }
  `;


export default GlobalStyles;

// global styles for single page application applied in _app.js
