import {createGlobalStyle} from 'styled-components';
import 'bootstrap/dist/css/bootstrap.min.css';

export default createGlobalStyle`
    :root{
        /* Cores globais, para usar chame assim: background-color: var(--purple-color) */
        --white-color: #fff;
        --black-color: #101010;
        
    }
    *{
        box-sizing: border-box;
        font-family: 'Sora', sans-serif;
        margin: 0;
        padding: 0;
        outline: 0;
        
    }
`