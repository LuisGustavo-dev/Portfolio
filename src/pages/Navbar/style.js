import styled from 'styled-components'
import { NavLink as Link } from "react-router-dom";
import { FaBars } from "react-icons/fa";

export const Nav = styled.nav`
  display: ${(props) => (props.show ? "none" : "flex")};
  justify-content: space-around;

  height: 7vh;
  padding: 0.5rem;
  z-index: 10;
    opacity: 0.9;

  background-color: var(--primary-color);
`;

export const NavLink = styled(Link)`
  display: flex;
  align-items: center;

  height: 100%;
  padding: 0 1rem;

  font-size: 1.2rem;
  letter-spacing: 1.5px;
  text-decoration: none;
  color: var(--white-color);
  cursor: pointer;

  :hover {
    color: var(--hover-color);
    opacity: 0.3s;
  }
  &.active {
    color: var(--hover-color);
  }
`;

export const Bars = styled(FaBars)`
  display: none;
  color: var(--white-color);

  @media screen and (max-width: 768px) {
    display: block;
    position: absolute;
    top: 0;
    right: 0;

    transform: translate(-100%, 75%);
    font-size: 1.8rem;
    cursor: pointer;
  }
`;

export const NavMenu = styled.div`
  display: flex;
  margin-right: 24px;

  @media screen and (max-width: 768px) {
    display: none;
  }
`;

export const NavBtn = styled.nav`
  display: flex;
  align-items: center;

  @media screen and (max-width: 768px) {
    display: none;
  }
`;

export const NavBtnLink = styled(Link)`
  padding: 10px 22px;

  background: var(--button-color);
  border-radius: 25px;
  border: none;
  outline: none;
  
  color: var(--white-color);
  letter-spacing: 1.5px;
  cursor: pointer;

  transition: all 0.2s ease-in-out;
  text-decoration: none;

  :hover {
    text-decoration: none;
    transition: all 0.2s ease-in-out;
    background: var(--white-color);
    color: var(--black-color);
  }
`;