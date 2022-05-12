import React, { useEffect, useState } from "react";
import { IoLogoReact } from "react-icons/io5";
import { useLocation } from "react-router-dom";
import { 
  Nav,
  Logo,
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
          <Logo to="/home">
            <IoLogoReact  size={50} ></IoLogoReact>
          </Logo>
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
