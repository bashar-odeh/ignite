import React from "react";
// import style
import styled from "styled-components";
//  import animation
import { motion } from "framer-motion";
import gameDetailsAction from "../actions/gameDetailsAction";
import gameSeriesAction from "../actions/gameSeriesAction";
import singleStoreAction from "../actions/singleStoreAction";
import { Link } from "react-router-dom";
import { useDispatch } from "react-redux";
import { smallImage } from "../util";
import { Popup } from "../animation";

const Game = ({
  name,
  released,
  id,
  image,
  height = "40vh",
  width,
  path,
  isgner,
  generId,
}) => {
  const stringId = id.toString();
  const dispatch = useDispatch();
  // console.log(isgner);
  // console.log(generId);
  const fetchDetailsHandler = (e) => {
    document.body.style.overflow = "hidden";
    if (isgner) {
      path = `gener/${generId}`;
    }
    if (
      path === "games" ||
      path === "Tags/allgames" ||
      path.includes("gener")
    ) {
      dispatch(gameDetailsAction(id));
      dispatch(gameSeriesAction(id));
    }

    if (path === "stores") {
      dispatch(singleStoreAction(id));
    }
  };
  return (
    <StyledGame
      variants={Popup}
      initial="hidden"
      animate="show"
      layoutId={stringId}
      onClick={fetchDetailsHandler}
      height={height}
      width={width}
    >
      <Link to={`/${path}/${id}`}>
        <motion.h3 layoutId={`title ${stringId}`}>{name}</motion.h3>
        <span>{released}</span>
        <motion.img
          layoutId={`image ${stringId}`}
          src={smallImage(image, 640)}
          alt="pic"
        />
      </Link>
    </StyledGame>
  );
};

const StyledGame = styled(motion.div)`
  min-height: ${(props) => props.height};
  width: ${(props) => props.width};
  box-shadow: 0px 5px 20px rgb(0, 0, 0, 0.2);
  text-align: center;
  border-radius: 1rem;
  overflow: hidden;
  margin-bottom: 1rem;
  position: relative;
  img {
    width: 100%;
    height: ${(props) => props.height};
    object-fit: cover;
  }
`;
const Badge = styled(motion.div)`
  height: 50px;
  width: 100px;
  text-align: center;
  padding: 1rem;

  position: absolute;
  background: black;
  color: white;
`;
export default Game;
