import React, { useEffect } from "react";
import styled from "styled-components";
import { useHistory } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import gameDetailsAction from "../actions/gameDetailsAction";
import gameSeriesAction from "../actions/gameSeriesAction";

const GameSeriesRelatedCard = ({
  name,
  image,
  id,
  type,
  location = "games",
}) => {
  console.log(location);
  const history = useHistory();
  const dispatch = useDispatch();
  const openGame = () => {
    document.querySelector(".shadow").click();
    dispatch(gameSeriesAction(id));
    dispatch({ type: "Loading" });
    setTimeout(() => {
      history.push(`/${location}/${id}`);
      dispatch(gameDetailsAction(id));
    }, 1000);
  };
  useEffect(() => {
    if (type === "store") {
      dispatch(gameDetailsAction(id));
    }
  }, []);
  const { game, screenshots, isLoading } = useSelector(
    (state) => state.gameDetails
  );
  return (
    <>
      <Card layoutId={id.toString()} onClick={openGame}>
        <img src={image} alt="" />
        <h3>{name}</h3>
      </Card>
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
export default GameSeriesRelatedCard;
