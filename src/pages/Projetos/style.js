import styled from 'styled-components'

export const Body = styled.div`
    display: flex;
    justify-content: space-around;
    align-items: center;
    flex-direction: column;
    
    height: 90vh;
    margin: 0 100px;

    
`;
export const Container = styled.div`
    display: flex;
    justify-content: space-around;
    align-items: center;

    position: relative;

    width: 90%;
    height: 350px;


    @media screen and (max-width: 768px) {
        flex-direction: column;
    }

    .middle {
        position: absolute;
        top: 00%;
        left: 00%;
        transition: .5s ease;
        opacity: 0;

        transform: translate(-50%, -50%);
        -ms-transform: translate(-50%, -50%);
        text-align: center;
        
        &:hover .middle {
            opacity: 1;
        }
    }
    .text {
        background-color: #04AA6D;
        color: white;
        font-size: 16px;
        padding: 16px 32px;
    }
`;

export const Img = styled.img`
    display: block;
    
    width: 40%;
    height: auto;
    
    opacity: 1;
    transition: .5s ease;
    backface-visibility: hidden;

    box-shadow: rgba(0, 0, 0, 0.24) 0px 3px 8px;
    border-radius: 15px;

    &:hover{
        opacity: 0.3;
    }

    @media screen and (max-width: 768px) {
        width: 100%;
    }
`;

export const Card = styled.div`
    display: flex;
    justify-content: center;

    width: 50%;
    height: 350px;

    box-shadow: rgba(0, 0, 0, 0.1) 0px 4px 12px;
    border-radius: 15px;
    
    &:hover{
    box-shadow: rgba(0, 0, 0, 0.24) 0px 3px 8px;
    border-radius: 15px;
    }

    h1{ 
        margin: 10px 50px;
        font-size: 2rem;
        font-family: 'Nunito', sans-serif;
    }

    @media screen and (max-width: 768px) {
        width: 100%;     
        margin: 10px;
    }
`;


