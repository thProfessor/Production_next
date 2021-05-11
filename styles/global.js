import { createGlobalStyle } from "styled-components";

const GlobalStyles = createGlobalStyle`
    * {
      box-sizing: border-box;
      font-family:"Gordita"
    }
    html, body {
      font-family: "Gordita",Helvetica-Neue,Helvetica,Arial,sans-serif;
      width: 100vw;
      overflow-x: hidden;
      margin: 0;
      padding: 0;
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

  `;

export default GlobalStyles;
