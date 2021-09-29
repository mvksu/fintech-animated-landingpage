import {createGlobalStyle} from 'styled-components'


const GlobalStyle = createGlobalStyle`
    :root {
    --purple-primary: #554DDE;
    --accent-pink: #F44E77;
    --neutral-light: #F2F6FF;
    --lavender-secondary: #6A6D9E;
    --dark-primary: #16194F;
    --border-colour: #CAD6F1;
    }
    * {
        margin: 0;
        padding: 0;
        list-style: none;
        box-sizing: border-box;
        text-decoration: none;
    }

    body {
        background-color: var(--neutral-light);
        font-family: 'Be Vietnam Pro', sans-serif;
        color: white;
        font-size: 1.4rem;
    }

    a {
        color: inherit;
    }

    p{
        color: var(--lavender-secondary);
        padding: 1rem 0;
    }
    .secondary-heading {
        font-size: 4.5rem;
        color: var(--purple-primary);
    }
    .small-heading {
        font-size: 3rem;
        color: var(--purple-primary);
        text-align: center;
    }
    span {
        color: var(--accent-pink);
    }

    .c-para {
        text-align: center;
    }

    `;

export default GlobalStyle;