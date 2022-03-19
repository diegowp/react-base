import { createGlobalStyle } from 'styled-components'

export const GlobalStyles = createGlobalStyle`
  * {
    color: var(--bs-gray-800);
  }
  body {
    background-color: var(--bs-gray-200);
  }
  .btn-primary {
    background-color: var(--bs-success);
    color: white;
    border: none;

    &:hover {
      background-color: var(--bs-success);
      opacity: .8;
    }
  }
`
