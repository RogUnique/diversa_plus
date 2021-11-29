import { createGlobalStyle } from "styled-components";

const GlobalStyle = createGlobalStyle`

:root {
    --primaryColor: #3A4894;
    --neutralColor: #FFFFFF;
    --red: #E44622;
    --orange: #ED8F20;
    --yellow: #F6DD18;
    --green: #057931;
    --purple: #0013FF;
}
    
    /* body, div, ul, button, p, img, nav, a, input, h1, h2, h3, h4, h5, h6, select, figure{
        margin: 0;
        padding: 0;
        list-style-type: none;
        box-sizing: border-box;
        text-decoration: none;
        outline: none;
        font-family: 'Signika', sans-serif;
    }
    body{
        background-color: var(--color-base-default);
    }

    h1{
        font-size: 38px;
    }

    h2{
        font-size: 34px;
    }

    h3 {
        font-size: 24px;
    }

    h4 {
        font-size: 20px;
    } */

    /* button{
        cursor: pointer;
    } */
    `;

export default GlobalStyle;
