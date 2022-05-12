import {createGlobalStyle} from 'styled-components';
import 'bootstrap/dist/css/bootstrap.min.css';

export default createGlobalStyle`
    :root{
        /* Cores globais, para usar chame assim: background-color: var(--purple-color) */
        --white-color: #fff;
        --black-color: #101010;

        --primary-color: #3772FF;
        --secundary-color: #5D9570;

        --hover-color: #3772FF;
        --button-color: #3772FF;
        
    }
    *{
        box-sizing: border-box;
        font-family: 'Sora', sans-serif;
        margin: 0;
        padding: 0;
        outline: 0;
    }
`;