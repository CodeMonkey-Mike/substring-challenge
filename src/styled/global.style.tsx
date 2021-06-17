import { createGlobalStyle } from 'styled-components';
import { themeGet } from '@styled-system/theme-get';

export const GlobalStyle = createGlobalStyle`
  html {
    box-sizing: border-box;
    height: 100%;
  }
  *, *:before, *:after {
    box-sizing: inherit;
    outline: none;
  }
  body{
    margin: 0;
    font-family: ${themeGet('fontFamily.0', 'sans-serif')};
    height: 100%;
  }

  h1,h2,h3,h4,h5,h6  {
    font-family: ${themeGet('fontFamily.1', 'sans-serif')};
    margin: 0;
  }

  p,a,span,button,li,div  {
    font-family: ${themeGet('fontFamily.0', 'sans-serif')};
    margin: 0;
  }
  ul{
    margin: 0;
    padding: 0;
  }
  li{
    list-style: none;
  }

  a{
    text-decoration: none;
  }

  #__next {
    height: 100%;
  }

  :root {
    /* Colors */
    --blue: #0077cc;
    --black: #000000;
    --white: #ffffff;
    --dark-grey: #3a3a3a;
    --light-grey: #c9c9c9;

    /* Spacing */
    --space-0: 0;
    --space-px: 1px;
    /* 4px */
    --space-1: 0.25rem;
    /* 8px */
    --space-2: 0.5rem;
    /* 12px */
    --space-3: 0.75rem;
    /* 16px */
    --space-4: 1rem;
    /* 20px */
    --space-5: 1.25rem;
    
    /* font-size */
    /* 10px */
    --text-xxs: 0.625rem;
    /* 12px */
    --text-xs: 0.75rem;
    /* 14px */
    --text-sm: 0.875rem;
    /* 16px */
    --text-base: 1rem;
    /* 18px */
    --text-lg: 1.125rem;
  }
`;
