import { createGlobalStyle } from 'styled-components';

import background from '../assets/background.svg';

export default createGlobalStyle`
    * {
        margin: 0;
        padding: 0;
        outline: 0;
        box-sizing: border-box;
    }

    body {
        background-color: #f0f0f5;
        background-image: url(${background});
        background-repeat: no-repeat;
        background-position: 70% top;
    }

    body, input, button {
        font-family: 'Roboto', sans-serif;
        font-size: 16px;
        font-weight: 400;
    }

    button {
        cursor: pointer;
    }

    h1, h2, h3, h4, h5, h6 {
        font-weight: 500;
    }

    a {
        text-decoration: none;
        color: #a8a8b3;
    }

    #root {
        max-width: 940px;
        margin: 0 auto;
        padding: 40px 20px;
    }

`;