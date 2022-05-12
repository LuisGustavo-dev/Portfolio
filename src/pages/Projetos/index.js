import { React } from 'react';
import { IoLogoGithub, IoLogoReact, IoLogoNodejs } from "react-icons/io5";
import rh from '../../assets/images/Rh.png'
import aluno from '../../assets/images/AlunoSaudavel.png'
import { 
    Body,
    Container,
    Card,
    Icons,
    Img,
} from "./style";


export default function Projetos() {
    return(
        <Body> 
            <Container>
                    <Img src={aluno}></Img>
                <Card>
                    <h1>Aluno Saudável</h1>
                    <p>O projeto foi criado na intenção de auxiliar os estudantes 
                       de enfermagem na manibulação de dados dos alunos.</p>
                    <Icons>
                        <IoLogoGithub size={70} className="Icon"/>
                        <IoLogoReact size={70} className="Icon"/>
                        <IoLogoNodejs size={70} className="Icon"/>
                    </Icons>
                </Card>
            </Container>
            <Container>
                    <Img src={rh}></Img>
                <Card>
                    <h1>RH</h1>
                    <p>O projeto foi criado na intenção de auxiliar o setor de RH 
                       na adição de novos funcionarios, criação de planilhas e tabelas.</p>
                    <Icons>
                        <IoLogoGithub size={70} className="Icon"/>
                        <IoLogoReact size={70} className="Icon"/>
                        <IoLogoNodejs size={70} className="Icon"/>
                    </Icons>
                </Card>
            </Container>
        </Body>
    );
}