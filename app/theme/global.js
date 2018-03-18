import { injectGlobal } from 'styled-components';

// eslint-disable-next-line
injectGlobal`
  html.unsupported {
    .unsupported-page {
      display: block !important;
    }
  
    #app {
      display: none;
    }
  }
   
  *, *:before, *:after {
    box-sizing: inherit;
  }
   
  html, body {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    font-family: 'Roboto', sans-serif;
  }
`;
