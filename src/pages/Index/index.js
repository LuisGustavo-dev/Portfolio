import React from 'react';
import Swal from 'sweetalert2'  
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
        Swal.fire({
        position: 'top-end',
        icon: 'success',
        title: 'Bem-Vindo',
        showConfirmButton: false,
        timer: 1000
        })
    }

    return (
        <Background>
            <Img src={fundo} className="bg-image"/>
            <Div>
                <Form onSubmit={handleSubmit}>
                    <h2 style={{ textTransform: "uppercase", marginBottom: "50px"}}>Portfólio</h2>
                    <Label>Email</Label>
                    <Input type="email" placeholder="usuario@gmail.com" required></Input><br/>

                    <Label>Senha</Label>
                    <Input type="password" placeholder="*******" required></Input><br/>

                    <Button>Entrar</Button>
                </Form>
            </Div>
        </Background>
    );
}
