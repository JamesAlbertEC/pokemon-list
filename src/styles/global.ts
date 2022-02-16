import styled, { createGlobalStyle } from 'styled-components';
import { lighten } from 'polished';

export const GlobalStyle = createGlobalStyle`
  :root {
    --blue: #4512e2;
    --snow: #FFFAFA;
    --purple: #5c1ac6;

    --scroll-width: 15px;
  }

  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box
  }

  ul,
  ol,
  li {
    list-style: none;
  }

  html {
    @media (max-width: 1080px){
      font-size: 93.75%;
    }

    @media (max-width: 720px){
      font-size: 87.5%;
    }

    body {
      font-family: 'Festive', cursive;
      -webkit-font-smoothing: antialised;
    }

    button {
      cursor: pointer;
    }

    [disabled] {
      opacity: 0.6;
      cursor: not-allowed;
    }
  }
`;

export const Scroll = styled.div`

  &::-webkit-scrollbar {
    width: var(--scroll-width);
  }

  &::-webkit-scrollbar-track {
    box-shadow: inset 0 0 5px grey; 
    border-radius: 10px;
  }
  
  &::-webkit-scrollbar-thumb {
    background-color: var(--purple);
    border-radius: 10px;
  }

  &::-webkit-scrollbar-thumb:hover {
    background-color: ${lighten(0.1, '#5c1ac6')}; 
  }
`