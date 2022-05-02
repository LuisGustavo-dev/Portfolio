import React, {useEffect, useState} from "react";
import { useNavigate } from 'react-router-dom';
import { useLocation } from "react-router-dom";
import { 
  Background,
  Button,
  H1,
  A,
} from "./style";

export default function Navbar() {

  const [show, setShow] = useState(false);
  const location = useLocation();
  const navigate = useNavigate();

  useEffect(() => {
    setShow(location.pathname === "/")
  }, [location.pathname]);

  async function handleSubmit(){
     
      navigate("/")
  }

  return (
    <Background show = {show}>
      <H1>Portfólio</H1>
      <A href="/projetos">Projetos</A>
      <A href="/contato">Contato</A>
      <A href="/">Em breve</A>
      <Button type="submit" onSubmit={handleSubmit}>Sair</Button>
    </Background>
  );
}
