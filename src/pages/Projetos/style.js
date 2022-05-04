import styled from 'styled-components'

export const Div = styled.div`
    /* display: grid;
    place-items: center; */
    
    width: 100vw;
`;

export const Carousel = styled.div`
    /* display: flex; */
    
    width: 100%;
    height: 200px;
`;

export const Img = styled.img`
    width: 100%;
    height: 100%;

    object-fit: cover;
`;

export const Button = styled.button`
    width: 45px;
    height: 45px;

    border: 1px solid #fff;
    background: rgba(0,0,0,.1);
    border-radius: 45px;
    cursor: pointer;

    @media (max-width: 450px) {
        width: 25px;
    }
`;