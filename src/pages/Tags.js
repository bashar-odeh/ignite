import React, { useEffect, useState, useRef } from "react";
import { useSelector, useDispatch } from "react-redux";
import styled from "styled-components";
import { motion } from "framer-motion";
import { Link, useHistory, useLocation } from "react-router-dom";
//ACTIONS
import allGamesAction from "../actions/allGamesAction";
import genersAction from "../actions/genersAction";
//
import Game from "../components/Card";
import GameDetailPopUp from "../components/GameDetailPopUp";
import loading from "../img/loading.gif";

const Tags = () => {
  //selector
  const { allGames, nextPage, previousPage, isLoadingAllGames } = useSelector(
    (state) => state.allGames
  );
  const { genres, isLoadingGeners } = useSelector((state) => state.geners);
  const [counter, setCounter] = useState(1);
  // dispatch
  const dispatch = useDispatch();
  // useHistory
  const history = useHistory();
  const location = useLocation();
  // url
  const baseURL = useRef(`https://api.rawg.io/api/games`);
  let page = 1;
  let gameId = undefined;
  let gener = undefined;
  function determineURL() {
    if (location.pathname.includes("gener")) {
      gener = location.pathname.split("/")[3];
      page = location.pathname.split("/")[4];
      console.log(page);
    } else {
      page = location.pathname.split("/")[2];
      gameId = location.pathname.split("/")[3];
    }
  }
  const [url, setUrl] = useState(baseURL.current);
  const getGenre = (generid) => {
    if (generid === undefined) {
      setUrl(`${baseURL.current}?page=${page}`);
    } else {
      setUrl(`${baseURL.current}?page=${page}&genres=${generid}`);
    }
  };
  useEffect(() => {
    determineURL();
    dispatch({ type: "emptyAllGames" });
    setTimeout(() => {
      dispatch(allGamesAction(url));
      dispatch(genersAction());
    }, 500);
    history.push(`${counter}`);
  }, [url]);
  //EVENTS

  const changeCounter = (direction) => {
    dispatch({ type: "emptyAllGames" });

    if (direction === "next") {
      if (nextPage !== null) {
        dispatch(allGamesAction(nextPage));
      } else {
        dispatch(allGamesAction(`https://api.rawg.io/api/games?page=1`));
      }
    } else {
      if (previousPage !== null) {
        dispatch(allGamesAction(previousPage));
      } else {
        dispatch(allGamesAction(`https://api.rawg.io/api/games?page=1`));
      }
    }
  };
  const [toggleGenres, setToggleGenres] = useState(false);
  return (
    <>
      <Button onClick={() => setToggleGenres(!toggleGenres)}>
        Select Genres
      </Button>

      <ListOfGenres toggleGenres={toggleGenres}>
        {!isLoadingGeners && (
          <>
            <ul>
              <Link to="/Tags/1">
                <li
                  onClick={() => {
                    getGenre(undefined);
                  }}
                >
                  All Games
                </li>
              </Link>
              {genres.map((el) => (
                <Link to={`/Tags/gener/${el.id}/${counter}`}>
                  <li
                    key={el.id}
                    onClick={() => {
                      getGenre(el.id);
                    }}
                  >
                    {el.name}
                  </li>
                </Link>
              ))}
            </ul>
          </>
        )}
      </ListOfGenres>
      {isLoadingAllGames && (
        <Loading>
          <img src={loading} alt="loading" />
        </Loading>
      )}
      {!isLoadingAllGames && (
        <>
          <Navigate>
            <button onClick={() => changeCounter("back")}>Back </button>
            <button onClick={() => changeCounter("next")}>Next </button>
          </Navigate>
          {gameId && (
            <GameDetailPopUp
              pathid={gameId}
              popUpType="allgames"
              pageNum={counter}
              isgner={toggleGenres}
              generId={gener}
            />
          )}
          <List>
            {!isLoadingAllGames &&
              allGames.map((game) => (
                <Game
                  name={game.name}
                  released={game.released}
                  id={game.id}
                  image={game.background_image}
                  height="40vh"
                  width="100%"
                  path="Tags/allgames"
                  key={game.id}
                  isgner={toggleGenres}
                  generId={gener}
                />
              ))}
          </List>
          <Navigate>
            <button onClick={changeCounter}>Back </button>
            <button onClick={changeCounter}>Next </button>
          </Navigate>
        </>
      )}
    </>
  );
};
const List = styled(motion.div)`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(450px, 1fr));
  grid-column-gap: 1rem;
  padding: 2rem;
`;
const Navigate = styled(motion.div)`
  width: 100%;
  display: flex;
  justify-content: space-around;
  padding: 2rem;
  margin-bottom: 1rem;
  justify-items: center;
  align-items: center;
  justify-content: center;
  height: 50px;
  background: linear-gradient(
    to right,
    rgba(255, 118, 118, 0.295),
    rgb(255, 255, 255)
  );
  button {
    background: none;
    padding: 1rem 2rem;
    color: black;
    font-weight: bold;
    border: none;
    font-size: 1.3rem;
    cursor: pointer;
  }
`;
const Loading = styled.div`
  display: flex;
  height: 100vh;
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
const ListOfGenres = styled(motion.div)`
  padding: 2rem;
  height: ${(props) => (props.toggleGenres ? "350px" : 0)};
  pointer-events: ${(props) => (props.toggleGenres ? "all" : "none")};
  transition: all 1s ease;
  background: white;
  ul {
    transition: all 0.5s ease;

    display: flex;
    flex-wrap: wrap;
    list-style-type: none;
    padding: 1rem;
    opacity: ${(props) => (props.toggleGenres ? 1 : 0)};
    li {
      padding: 1rem;
      background: #ff7676;
      color: white;
      font-weight: bold;
      margin: 1rem;
      cursor: pointer;
      border-radius: 5px;
      &:hover {
        opacity: 0.5;
        color: black;
      }
    }
  }
`;
const Button = styled(motion.button)`
  padding: 1rem;
  margin-left: 2rem;
  color: white;
  background: black;
  border: none;
  font-weight: bold;
  font-size: 1.2rem;
  border-radius: 5px;
`;
export default Tags;
