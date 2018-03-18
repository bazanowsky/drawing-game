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
    background: #f2f2f2;
  }
  .app__wrapper {
    display: flex;
    min-height: 100%;    
  }
  #app {
    display: flex;
    flex: 1 0 auto;
  }
`;
