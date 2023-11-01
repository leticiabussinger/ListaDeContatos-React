import { createGlobalStyle } from 'styled-components';
import fundoContactList from '../assets/img/fundoListContactHalloween.jpg';

export const GlobalStyle = createGlobalStyle`
    *{
        margin: 0;
        padding: 0;
        box-sizing: border-box;
        font-family: 'Montserrat', sans-serif;
        font-size: 1.08rem;
    }
`;

export const GlobalStyleContactList = createGlobalStyle`
    body{
        background-image: url(${fundoContactList});
        color: #DCDCDC;
        background-repeat: no-repeat;
        background-position: center;
        background-size: cover;
        background-attachment: fixed;
    }
`;
