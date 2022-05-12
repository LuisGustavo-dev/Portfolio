import { React } from 'react';

import { IoLogoGithub } from "react-icons/io5";
import rh from '../../assets/images/Rh.png'
import aluno from '../../assets/images/AlunoSaudavel.png'
import { 
    Body,
    Container,
    Card,
    Img,
} from "./style";


export default function Projetos() {
    return(
        <Body> 
            <Container>
                    <Img src={aluno}></Img>
                    <div className="middle">
                        <IoLogoGithub ></IoLogoGithub> //continuar depois
                    </div>
                <Card>
                    <h1>Aluno Saudável</h1>
                </Card>
            </Container>
            <Container>
                    <Img src={rh}></Img>
                <Card>
                    <h1>RH</h1>
                </Card>
            </Container>
        </Body>
    );
}