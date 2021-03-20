import React, { useEffect } from "react";
//  STYLE
import styled from "styled-components";
//  ANIMATION
import { motion, AnimatePresence, AnimateSharedLayout } from "framer-motion";
//ROUTER
import { useLocation } from "react-router-dom";
//REDUX
import { useDispatch, useSelector } from "react-redux";
import storesAction from "../actions/storesAction";
//IMAGES
import loading from "../img/loading.gif";
// COMPONENT
import Store from "../components/Card";
import GameDetailPopUp from "../components/GameDetailPopUp";

const Stores = () => {
  // DISPATCH
  const dispatch = useDispatch();
  // DATA
  const { StoresFetched, isLoadingStores } = useSelector(
    (state) => state.stores
  );

  const pathId = useLocation().pathname.split("/")[2];

  useEffect(() => {
    dispatch(storesAction());
  }, [dispatch]);

  return (
    <AnimateSharedLayout>
      <AnimatePresence>
        {pathId && <GameDetailPopUp pathid={pathId} popUpType="store" />}
      </AnimatePresence>
      <StroesStyled>
        <Header>Stroes </Header>
        {isLoadingStores && (
          <Loading>
            <img src={loading} alt="loading" />
          </Loading>
        )}
        <StoreList>
          {!isLoadingStores &&
            StoresFetched.map((store) => (
              <Store
                key={store.id}
                name={store.name}
                relased={store.domain}
                image={store.image_background}
                id={store.id}
                path="stores"
                height="70vh"
                width="100%"
              />
            ))}
        </StoreList>
      </StroesStyled>
    </AnimateSharedLayout>
  );
};

const StroesStyled = styled(motion.div)`
  min-height: 100vh;
  padding: 2rem 5rem;
  width: 100%;
`;
const Header = styled(motion.h2)`
  padding: 3rem 0rem;
`;
const Loading = styled.div`
  display: flex;
  height: 100%;
  width: 100%;
  position: fixed;
  top: 0;
  left: 0;

  justify-content: center;
  align-items: center;
  margin-top: 10rem;
  z-index: 10;
  img {
    height: 40%;
    width: 20%;
  }
`;
const StoreList = styled(motion.div)`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(500px, 1fr));
  grid-column-gap: 1rem;
`;
export default Stores;
