import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { loadGames } from "../actions/gamesAction";
import Game from "../components/Card";
import { motion, AnimatePresence, AnimateSharedLayout } from "framer-motion";
import styled from "styled-components";
import GameDetailPopUp from "../components/GameDetailPopUp";
import { fadeIn } from "../animation";
import loading from "../img/loading.gif";
// import location
import { useLocation } from "react-router-dom";
const Home = () => {
  //useSelector to get Games from the state 'games' is the name at store
  const { popular, newGames, upcoming, isLoading } = useSelector(
    (state) => state.games
  );
  console.log(popular);
  //useSelector to get search from the state 'search' is the name at store

  const { isSearching, Searchedgames } = useSelector((state) => state.search);
  const { isLoadingTransfer } = useSelector((state) => state.series);
  // pathId
  const pathId = useLocation().pathname.split("/")[2];

  // dispatch
  const dispatch = useDispatch();
  //useEffect
  useEffect(() => {
    dispatch(loadGames());
  }, [dispatch]);
  return (
    <>
      {(isLoading || isLoadingTransfer) && (
        <Loading>
          <img src={loading} alt="" />
        </Loading>
      )}
      {!isLoading && (
        <GameList variants={fadeIn} initial="hidden" animate="show">
          <AnimateSharedLayout type="crossfade">
            <AnimatePresence>
              {pathId && <GameDetailPopUp pathid={pathId} popUpType="game" />}
            </AnimatePresence>
            {isSearching && isLoading && (
              <Loading>
                <img src={loading} alt="" />
              </Loading>
            )}
            {isSearching && (
              <Games>
                {Searchedgames.map((game) => (
                  <Game
                    name={game.name}
                    released={game.released}
                    id={game.id}
                    image={game.background_image}
                    key={game.id}
                    path="games"
                  />
                ))}
              </Games>
            )}
            <h2>Upcoming Games </h2>
            <Games>
              {upcoming.map((game) => (
                <Game
                  name={game.name}
                  released={game.released}
                  id={game.id}
                  image={game.background_image}
                  key={game.id}
                  path="games"
                />
              ))}
            </Games>
            <h2>Popular Games </h2>
            <Games>
              {popular.map((game) => (
                <Game
                  name={game.name}
                  released={game.released}
                  id={game.id}
                  image={game.background_image}
                  key={game.id}
                  path="games"
                />
              ))}
            </Games>
            <h2>New Games </h2>
            <Games>
              {newGames.map((game) => (
                <Game
                  name={game.name}
                  released={game.released}
                  id={game.id}
                  image={game.background_image}
                  key={game.id}
                  height="30vh"
                  path="games"
                />
              ))}
            </Games>
          </AnimateSharedLayout>
        </GameList>
      )}
    </>
  );
};

const GameList = styled(motion.div)`
  padding: 0rem 5rem;
  h2 {
    padding: 5rem 0rem;
  }
`;
const Games = styled(motion.div)`
  min-height: 80vh;
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(500px, 1fr));
  grid-column-gap: 3rem;
  grid-row-gap: 3rem;
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
export default Home;
