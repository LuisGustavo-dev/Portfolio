import styled from 'styled-components'

export const Background = styled.div`
    display: flex;
    justify-content: center;
    height: 100vh;
`;

export const Img = styled.img`
    position: fixed;
    width: 100%;
    height: 100%;
    object-fit: cover;
    :before{
        content: "";
        position: fixed;
        width: 100vh;
        height: 100vh;
        background-position: center center; 
    }
`;

export const Div = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;

    border: 1px solid #fff;
    background: rgba(0,0,0,.6);
    border-top-left-radius: 40px;
    border-bottom-right-radius: 40px;

    padding: 10px;
    margin: 100px;
    width: 50vh;
    height: 80%;
    z-index: 1;

    @media (max-width: 450px) {
        width: 80%;
    }
`;

export const Form = styled.form`
    width: 80vw;
    height: 75vh;

    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;

    color: #fff;
    text-align: center;
`;

export const Label = styled.label`
    margin-top: 50px;
    text-align: center;
    @media (max-width: 450px) {
        font-size: 13.5px;
    }
`;

export const Input = styled.input`
    height: 35px;
    width: 70%;

    background: transparent;
    border-bottom: 1px solid #fff; 
    border-top: 0px;
    border-left: 0px;
    border-right: 0px;

    font-size: 15px;
    color: #fff;
    text-align: center;

    ::placeholder{
        color: #fff;
        opacity: 0.5;
    }

    @media (max-width: 450px) {
        width: 70%;
        font-size: 15px;    
    }
`;

export const Button = styled.button`
    margin-top: 15%;
    height: 50px;
    width: 300px;

    background: var(--secundary-color);
    border-radius: 25px;
    border: none;
    outline: none;
    
    color: var(--white-color);
    align-items: center;    
    font-size: 15px;
    cursor: pointer;

    @media (max-width: 450px) {
        width: 60%;
    }
`;

