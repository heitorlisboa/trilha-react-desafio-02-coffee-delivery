import { createGlobalStyle, css } from 'styled-components';

/* Using `css` function instead of using `createGlobalStyle` function directly
because the latter isn't formatting correctly */
const globalStyleCss = css`
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }

  body,
  input,
  textarea,
  button {
    color: ${(props) => props.theme['base-text']};
    font-family: 'Roboto', sans-serif;
    font-size: 1rem;
    line-height: 1.3;
    font-weight: 400;
    -webkit-font-smoothing: antialiased;
  }

  body {
    background-color: ${(props) => props.theme['background']};
  }

  h1,
  h2,
  h3,
  h4,
  h5,
  h6 {
    font-family: 'Baloo 2', sans-serif;
  }

  ul,
  ol {
    list-style: none;
  }

  button:not(:disabled) {
    cursor: pointer;
  }

  button:disabled {
    cursor: not-allowed;
  }

  :focus-visible {
    outline: 0.125rem solid ${(props) => props.theme['yellow']};
  }
`;

export const GlobalStyle = createGlobalStyle`${globalStyleCss}`;
