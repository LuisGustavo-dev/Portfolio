import React, {useEffect, useState} from "react";
import { useLocation } from "react-router-dom";
import { 
  Nav,
  NavLink,
  Bars,
  NavMenu,
  NavBtn,
  NavBtnLink,
} from "./style";

export default function Navbar() {

  const [show, setShow] = useState(false);
  const location = useLocation();

  useEffect(() => {
    setShow(location.pathname === "/")
  }, [location.pathname]);

  return (
        <Nav show = {show}>
          <Bars/>
          <NavLink to="/"> Portfólio </NavLink>
          <NavMenu>
              <NavLink to="/home"> Home </NavLink>
              <NavLink to="/projetos"> Projetos </NavLink>
              <NavLink to="/contato"> Contato </NavLink>
          </NavMenu >
          <NavBtn>
              <NavBtnLink to="/"> Sair </NavBtnLink>
          </NavBtn>
        </Nav> 
  );
}
