import styled from 'styled-components'

export const Background = styled.div`
    display: ${props => props.show ? "none" : "flex"};
    justify-content: center;
    align-items: center;

    padding: 5px 100px;

    background-color: #91171F; 
`;

export const H1 = styled.h1`
    margin-bottom: 2px;
    margin-right: 350px;
    
    color: #fff;
    font-size: 35px;   
`;

export const A = styled.a`
    margin: 0 50px;
    text-decoration: none;
    list-style: none;
    color: #fff;
    font-size: 20px;  
    
    :hover { 
        padding: 0 5px;
        background: white;
        transition: .5s;
        border-radius: 5px;
        color: black;
    }
    :active{
        padding: 0 5px;
        background: white;
        transition: .5s;
    }
`;

export const Button = styled.button`
    width: 100px;
    height: 40px;

    margin-left: 350px;

    background: #410B13;
    border-radius: 25px;
    border: none;
    outline: none;
    
    color : #fff;
    align-items: center;    
    font-size: 18px;    
    cursor: pointer;    

    @media (max-width: 450px) {
        width: 60%;
    }
`;