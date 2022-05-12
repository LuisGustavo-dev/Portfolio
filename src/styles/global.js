import {createGlobalStyle} from 'styled-components';
import 'bootstrap/dist/css/bootstrap.min.css';

export default createGlobalStyle`
    :root{
        /* Cores globais, para usar chame assim: background-color: var(--primary-color) */
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

        ::-webkit-scrollbar {
            width: 10px;
        }

        ::-webkit-scrollbar-track {
            border-radius: 5px;
            box-shadow: inset 0 0 10px rgba(0, 0, 0, 0.25);
        }
        ::-webkit-scrollbar-thumb {
            border-radius: 5px;
            box-shadow: inset 0 0 10px rgba(0, 0, 0, 0.25);
            background-color: var(--primary-color)
        }
    }
`;