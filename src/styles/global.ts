import { createGlobalStyle } from 'styled-components'

export const GlobalStyle = createGlobalStyle`
   * {
      margin: 0;
      padding: 0;
      box-sizing: border-box;
   }

   :focus {
      outline: 0;
      box-shadow: 0 0 0 2px ${(props) => props.theme['green-500']};
   }


   body {
      background: ${(props) => props.theme['gray-900']};
      color: ${(props) => props.theme['gray-100']};
      -webkit-font-smoothing: antialiased;
   }

   body,input-security, textarea, button {
      font-family: 'Roboto', sans-serif;
      font-weight: 400;
      font-size: 1rem;
   }
   input,button {
      cursor: pointer;
   }

   .react-modal-overlay {
   background: rgba(0,0,0,0.5);
   position: fixed;
   top: 0;
   bottom: 0;
   left: 0;
   right: 0;
   display: flex;
   z-index: 2;
   align-items: center;
   justify-content: center;
}
.react-modal-content {
   width: 100%;
   max-width: 700px;
   margin: auto;
   background:  ${(props) => props.theme['gray-100']};
   padding: 0.5rem;
   position: relative;
   border-radius: 0.75rem;
}

`
