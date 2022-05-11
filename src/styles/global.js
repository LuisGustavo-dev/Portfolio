import {createGlobalStyle} from 'styled-components';
import 'bootstrap/dist/css/bootstrap.min.css';

export default createGlobalStyle`
    :root{
        /* Cores globais, para usar chame assim: background-color: var(--purple-color) */
        --white-color: #fff;
        --black-color: #101010;

        --primary-color: #1E3F20;
        --secundary-color: #5D9570;

        --hover-color: #FCF7FF;
        --button-color: #131515;
        
    }
    *{
        box-sizing: border-box;
        font-family: 'Sora', sans-serif;
        margin: 0;
        padding: 0;
        outline: 0;
    }
`;