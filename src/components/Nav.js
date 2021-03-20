import React, { useState } from "react";
import { motion } from "framer-motion";
import logo from "../img/logo.svg";
import styled from "styled-components";
import { useDispatch } from "react-redux";
import searchAction from "../actions/searchAction";
import { fadeIn } from "../animation";
const Nav = () => {
  const dispatch = useDispatch();
  const [search, setSearch] = useState("");
  const searchHandler = (e) => {
    dispatch(searchAction(search));
  };
  const clearSearchHandler = () => {
    dispatch({ type: "Clear_Search" });
  };
  return (
    <StyledNav variants={fadeIn} initial="hidden" animate="show">
      <Logo onClick={clearSearchHandler}>
        <img src={logo} alt="" />
        <h1>Ignite Search</h1>
      </Logo>
      <div className="serch">
        <input
          onChange={(e) => setSearch(e.target.value)}
          type="text"
          name="search"
          id="search"
        />
        <button onClick={searchHandler}>Search</button>
      </div>
    </StyledNav>
  );
};

const StyledNav = styled(motion.nav)`
  padding: 3rem 5rem;
  text-align: center;
  input {
    width: 40%;
    border: none;
    padding: 0.5rem;
    font-size: 1.5rem;
    margin-top: 1rem;
    box-shadow: 0px 0px 15px rgb(0, 0, 0, 0.2);
    outline: none;
  }
  button {
    font-size: 1.5rem;
    border: none;
    padding: 0.55rem 2rem;
    cursor: pointer;
    background: #ff7676;
    color: white;
  }
`;
const Logo = styled(motion.div)`
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 1rem;
  cursor: pointer;
  img {
    height: 40px;
    width: 40px;
  }
`;
export default Nav;
