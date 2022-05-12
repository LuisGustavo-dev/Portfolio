import styled from 'styled-components'

export const Body = styled.div`
    display: flex;
    justify-content: space-around;
    align-items: center;
    flex-direction: column;
    
    height: 100vh;
    margin: 5% 100px;

    @media screen and (max-width: 768px) {
        margin-top: 25%;
    }

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
        margin-top: 40%;
    }
    
    .middle {
        position: absolute;
        top: 50%;
        left: 50%;
        transition: .5s ease;
        opacity: 0;

        transform: translate(-50%, -50%);
        -ms-transform: translate(-50%, -50%);
        text-align: center;
        
        &:hover .middle {
            opacity: 1;
        }
    }
`;

export const Img = styled.img`
    display: block;
    
    width: 45%;
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
    justify-content: center;

    width: 50%;
    height: 80%;


    box-shadow: rgba(0, 0, 0, 0.24) 0px 3px 8px;
    border-radius: 15px;
    
    &:hover{
    box-shadow: rgba(0, 0, 0, 0.35) 0px 5px 15px;
    border-radius: 15px;
    }

    h1 { 
        margin: 10px 50px;
        font-size: 2rem;
        font-family: 'Nunito', sans-serif;
    }

    p {
        margin: 10px 20px;
        font-size: 1.2rem;
        font-family: 'Nunito', sans-serif;
    }

    @media screen and (max-width: 768px) {
        width: 100%;     
        margin: 10px;
        h1{
            font-size: 1rem;
        }
        p{
            font-size: 1rem;
        }
        .icon {
            size: 40;
        }
    }
`;

export const Icons = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    margin: 30px;
    .icon{
        margin: 100px;
    }
`;

