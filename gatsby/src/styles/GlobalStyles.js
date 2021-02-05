import { createGlobalStyle } from 'styled-components';
import stripes from '../assets/images/stripes.svg';
import bg from '../assets/images/bg.png';

const GlobalStyles = createGlobalStyle`
  :root {
    --purple: #682a8d;
    --black: #2E2E2E;
    --pale-yellow: #fCEEA7;
    --white: #fff;
    --grey: #efefef;
  }
  html {
    background-image: url(${bg});
    background-size: 45rem;
    background-attachment: fixed;
    font-size: 10px;
    animation: animation 750s linear infinite;
  }
  @keyframes animation {
    100%{
      background-position:150em -300em;
    }
  }
  body {
    font-size: 2rem;
  }
  fieldset {
    border-color: rgba(0,0,0,0.1);
    border-width: 1px;
  }
  button {
    background: var(--purple);
    color: white;
    border: 0;
    padding: 0.6rem 1rem;
    border-radius: 2px;
    cursor: pointer;
    --cast: 2px;
    box-shadow: var(--cast) var(--cast) 0 var(--grey);
    text-shadow: 0.5px 0.5px 0 rgba(0,0,0,0.2);
    transition: all 0.2s;
    &:hover {
      --cast: 4px;
    }
  }
  .gatsby-image-wrapper img[src*=base64\\,] {
    image-rendering: -moz-crisp-edges;
    image-rendering: pixelated;
  }
  /* Scrollbar Styles */
  body::-webkit-scrollbar {
    width: 12px;
  }
  html {
    scrollbar-width: thin;
    scrollbar-color: var(--purple) var(--white);
  }
  body::-webkit-scrollbar-track {
    background: var(--white);
  }
  body::-webkit-scrollbar-thumb {
    background-color: var(--purple) ;
    border-radius: 6px;
    border: 3px solid var(--white);
  }
  hr {
    border: 0;
    height: 8px;
    background-image: url(${stripes});
    background-size: 1500px;
  }
  img {
    max-width: 100%;
  }
`;

export default GlobalStyles;