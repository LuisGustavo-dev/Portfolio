import styled from 'styled-components'

export const Body = styled.div`
    display: flex;
    justify-content: space-around;
    align-items: center;
    flex-direction: column;
    
    height: 100vh;
    margin: 15% 100px;

    @media screen and (max-width: 768px) {
        height: 100vh;
        margin: 15% 100px;
    }
`;

export const Container = styled.div`
    display: flex;
    justify-content: space-around;
    align-items: center;

    margin: 50px;
    position: relative;

    width: 90%;
    height: 450px;

    @media screen and (max-width: 768px) {
        width: 100%;
        flex-direction: column;
        margin-top: 40vw;
    }
`;

export const Img = styled.img`
    display: block;
    
    width: 45%;
    height: 100%;
    
    opacity: 1;
    transition: .5s ease;
    backface-visibility: hidden;

    box-shadow: rgba(0, 0, 0, 0.24) 0px 3px 8px;
    border-radius: 15px;

    &:hover{
        opacity: 0.3;
    }

    @media screen and (max-width: 768px) {
        width: 90vw;
        margin-top: 100%;
    }
`;

export const Card = styled.div`
    width: 45%;
    height: 100%;

    padding: 50px;
    box-shadow: rgba(0, 0, 0, 0.24) 0px 3px 8px;
    border-radius: 15px;
    
    &:hover{
    box-shadow: rgba(0, 0, 0, 0.35) 0px 5px 15px;
    border-radius: 15px;
    }
    
    @media screen and (max-width: 768px) {
        width: 90vw;     
        margin: 50px
    }
`;

export const Text = styled.div`
    h1{
        margin: 10px 50px;
        font-size: 2rem;
        font-family: 'Nunito', sans-serif;
    }
    p{
        margin: 10px 50px;
        font-size: 1.5rem;
        font-family: 'Nunito', sans-serif;
    }

    @media screen and (max-width: 768px) {
        h1{
            font-size: 1.5em;
        }
        p{
            font-size: 1.2rem;
        }
    }
`;

export const Icons = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
`;

