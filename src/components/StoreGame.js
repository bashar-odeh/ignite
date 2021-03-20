import React, { useEffect } from "react";
import styled from "styled-components";
import { useHistory } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import gameDetailsAction from "../actions/gameDetailsAction";
import gameSeriesAction from "../actions/gameSeriesAction";

const StoreGame = ({ id }) => {
  console.log(id);
  const history = useHistory();
  const dispatch = useDispatch();
  const openGame = () => {
    document.querySelector(".shadow").click();
    dispatch(gameSeriesAction(id));
    dispatch({ type: "Loading" });
    setTimeout(() => {
      history.push(`/games/${id}`);
      dispatch(gameDetailsAction(id));
    }, 1000);
  };

  useEffect(() => {
    dispatch(gameDetailsAction(id));
  }, [dispatch]);
  const { game, screenShots, isLoading } = useSelector(
    (state) => state.gameDetails
  );
  return (
    <>
      {!isLoading && (
        <Card layoutId={game.id.toString()} onClick={openGame}>
          <img src={game.image} alt="" />
          <h3>{game.name}</h3>
        </Card>
      )}
    </>
  );
};
const Card = styled.div`
  height: 40vh;
  width: 29%;
  border-radius: 1rem;
  overflow: hidden;
  margin: 1rem;
  cursor: pointer;
  text-align: center;
  @media (max-width: 1200px) {
    width: 100%;
  }
  img {
    display: block;
    width: 100%;
    height: 70%;
  }

  h3 {
    font-size: 1rem;
    padding: 1rem 0rem;
  }
`;
export default StoreGame;
