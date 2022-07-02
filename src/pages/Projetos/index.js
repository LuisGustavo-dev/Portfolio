import { React } from 'react';
import rh from '../../assets/images/Rh.png'
import aluno from '../../assets/images/AlunoSaudavel.png'
import { 
    Body,
    Container,
    Card,
    Text,
    Img,
} from "./style";


export default function Projetos() {
    return(
        <Body>  
            <Container> 
                <Img src={aluno}></Img>
                <Card>
                    <Text>
                    <h1>Aluno Saudável</h1>
                    <p>O projeto foi criado na intenção de auxiliar os estudantes 
                       de enfermagem na manibulação de dados dos alunos.</p>
                    </Text>
                </Card>
            </Container>
            <Container>
                <Img src={rh}></Img>
                <Card>
                    <Text>
                    <h1>RH</h1>
                    <p>O projeto foi criado na intenção de auxiliar o setor de RH 
                       na adição de novos funcionarios, criação de planilhas e tabelas.</p>
                    </Text>
                </Card>
            </Container>
            <Container>
                <Img src={rh}></Img>
                <Card>
                    <Text>
                    <h1>RH</h1>
                    <p>O projeto foi criado na intenção de auxiliar o setor de RH 
                       na adição de novos funcionarios, criação de planilhas e tabelas.</p>
                    </Text>
                </Card>
            </Container>
        </Body>
    );
}