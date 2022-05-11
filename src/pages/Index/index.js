import React from 'react';
import { useNavigate } from 'react-router-dom';
import fundo from '../../assets/images/wallpaper.jpg';
import { 
    Background,
    Img,
    Div,
    Form,
    Label,
    Input,
    Button
} from "./style";

export default function Home() {

    const navigate = useNavigate()
    
    async function handleSubmit(e){
        e.preventDefault();
        navigate("/home")
    }

    return (
        <Background>
            <Img src={fundo} className="bg-image"/>
            <Div>
                <Form onSubmit={handleSubmit}>
                    <h2 style={{ textTransform: "uppercase" }}>Cadastro</h2>
                    <Label>Email</Label>
                    <Input type="email" placeholder="usuario@gmail.com" required></Input><br/>

                    <Label>Senha</Label>
                    <Input type="password" placeholder="*******" required></Input><br/>

                    <Label>Confirmar senha</Label>
                    <Input type="password" placeholder="*******" required></Input><br/>

                    <Button>Entrar</Button>
                </Form>
            </Div>
        </Background>
    );
}
