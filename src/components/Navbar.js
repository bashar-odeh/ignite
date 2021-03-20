import React from "react";
import styled from "styled-components";
//  ANIMATION
import { motion } from "framer-motion";
import logo from "../img/logo.svg";
// ROUTER
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <NavbarStyled>
      <Logo className="logo">
        <img src={logo} alt="" />
      </Logo>
      <ul>
        <Link to="/">
          <li>Home</li>
        </Link>{" "}
        <Link to="/stores">
          <li>Stores</li>
        </Link>
        <Link to="/Tags/1">
          <li>More Games</li>
        </Link>
      </ul>
    </NavbarStyled>
  );
};
const NavbarStyled = styled(motion.div)`
  padding: 2rem 5rem;
  display: flex;
  justify-content: space-between;
  ul {
    list-style-type: none;
    display: flex;
    li {
      padding: 1rem;
      margin: 0.5rem;
      cursor: pointer;
      font-size: 1.3rem;
      font-weight: bold;
      &:hover {
        color: #ff7676;
      }
    }
  }
`;
const Logo = styled(motion.div)`
  display: flex;
  justify-content: center;
  align-items: center;
  cursor: pointer;
  img {
    height: 40px;
    width: 40px;
    cursor: pointer;
  }
`;
export default Navbar;
