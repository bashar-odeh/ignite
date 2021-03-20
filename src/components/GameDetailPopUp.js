import React from "react";
//REDUX
import { useSelector, useDispatch } from "react-redux";
//STYLE
import styled from "styled-components";
// ANIMATION
import { motion } from "framer-motion";
import { fadeIn } from "../animation";
// ROUTER
import { useHistory, Link } from "react-router-dom";
// ICONS
import { smallImage } from "../util";
import { platFormImages } from "../util";
import { stars } from "../util";
import GameSeriesRelatedCard from "./GameSeriesRelatedCard";
//
import gameDetailsAction from "../actions/gameDetailsAction";

const GameDetailPopUp = ({ pathid, popUpType, pageNum, isgner, generId }) => {
  // data
  const { game, screenshots, isLoading } = useSelector(
    (state) => state.gameDetails
  );
  const { gameSeries, gameSuggested } = useSelector((state) => state.series);
  const { storeData, isLoadingSingleStore } = useSelector(
    (state) => state.singleStore
  );
  const { StoresFetched, isLoadingStores } = useSelector(
    (state) => state.stores
  );
  let singleStore = StoresFetched[pathid];

  //dispatch
  const dispatch = useDispatch();

  const history = useHistory();
  //Exit
  const exitDetailHandler = (e) => {
    if (e.target.classList.contains("shadow")) {
      document.body.style.overflow = "auto";
      if (popUpType === "game") {
        history.push("/");
      } else if (popUpType === "allgames") {
        if (isgner) {
          console.log(isgner);
          history.push(`/Tags/gener/${generId}/${pageNum}`);
        } else {
          history.push(`/Tags/${pageNum}`);
        }
      } else {
        history.push("/stores");
      }
    }
  };
  // function
  const renderBaseOnType = (popUpType) => {
    if (popUpType === "game" || popUpType === "allgames") {
      return (
        <>
          {!isLoading && (
            <Details
              layoutId={pathid}
              variants={fadeIn}
              initial="hidden"
              animate="show"
              exit="exit"
            >
              <Stats>
                <div className="rating">
                  <motion.h3 layoutId={`title ${pathid}`}>
                    {game.name}
                  </motion.h3>
                  <p>Rating: {game.rating}</p>
                  <StarsStyled> {stars(game.rating)}</StarsStyled>
                </div>
                <Info>
                  <h3>Platforms</h3>
                  <Platforms>
                    {game.parent_platforms.map((data) => (
                      <img
                        src={platFormImages(data.platform.name)}
                        key={data.platform.id}
                        alt={data.platform.id}
                      />
                    ))}
                  </Platforms>
                </Info>
              </Stats>
              <Media>
                <motion.img
                  layoutId={`image ${pathid}`}
                  src={game.background_image}
                  alt={game.background_image}
                />
              </Media>
              <Description>
                <p>{game.description_raw}</p>
              </Description>

              <div className="gallery">
                {screenshots.map((data) => (
                  <img
                    src={smallImage(data.image, 1280)}
                    key={data.id}
                    alt={data.id}
                  />
                ))}
              </div>
              <SereiesHeader count={gameSeries.length}>
                Game Series sample{" "}
              </SereiesHeader>

              {gameSeries && (
                <Series>
                  {gameSeries.map((game) => (
                    <GameSeriesRelatedCard
                      name={game.name}
                      released={game.released}
                      id={game.id}
                      image={game.background_image}
                      key={game.id}
                      location={
                        popUpType === "game" ? "games" : `Tags/${pageNum}`
                      }
                    ></GameSeriesRelatedCard>
                  ))}
                </Series>
              )}
              <SuggestedHeader count={gameSuggested.length}>
                You may also like
              </SuggestedHeader>
              {gameSuggested && (
                <Series>
                  {gameSuggested.map((game) => (
                    <GameSeriesRelatedCard
                      name={game.name}
                      released={game.released}
                      id={game.id}
                      image={game.background_image}
                      key={game.id}
                      location={
                        popUpType === "game" ? "games" : `Tags/${pageNum}`
                      }
                    ></GameSeriesRelatedCard>
                  ))}
                </Series>
              )}
            </Details>
          )}
        </>
      );
    }
    if (popUpType === "store") {
      return (
        <>
          {!isLoadingSingleStore && (
            <Details
              layoutId={pathid}
              variants={fadeIn}
              initial="hidden"
              animate="show"
              exit="exit"
            >
              <Stats>
                <motion.h3 layoutId={`title ${pathid}`}>
                  {storeData.name}
                </motion.h3>

                <Info>
                  <Link to={storeData.domain}>go to site</Link>
                </Info>
              </Stats>
              <Media>
                <motion.img
                  layoutId={`image ${pathid}`}
                  src={storeData.image_background}
                  alt={storeData.image_background}
                />
              </Media>
              <Description>
                <p>{storeData.description}</p>
              </Description>

              <>
                <h3>List Of games</h3>

                {singleStore &&
                  singleStore.games.map((game) => (
                    <ListGames
                      onClick={() => {
                        history.push(`/`);
                        dispatch(gameDetailsAction(game.id));
                        history.push(`games/${game.id}`);
                      }}
                    >
                      <span key={game.id}>{game.name}</span>
                    </ListGames>
                  ))}
              </>
            </Details>
          )}
        </>
      );
    }
  };
  return (
    <>
      <CardShadow className="shadow" onClick={exitDetailHandler}>
        {renderBaseOnType(popUpType)}
      </CardShadow>
    </>
  );
};

const CardShadow = styled(motion.div)`
  width: 100%;
  min-height: 100vh;
  overflow-y: scroll;
  position: fixed;
  top: 0;
  left: 0;
  background: rgb(0, 0, 0, 0.3);
  z-index: 10;

  &::-webkit-scrollbar {
    width: 0.5rem;
  }
  &::-webkit-scrollbar-thumb {
    background-color: #ff7676;
    border-radius: 1rem;
  }

  &::-webkit-scrollbar-track {
    background: white;
  }
`;
const Details = styled(motion.div)`
  width: 80%;
  border-radius: 1rem;
  padding: 2rem 5rem;
  background: white;
  position: absolute;
  top: 5%;
  left: 10%;
  color: black;
  img {
    width: 100%;
  }
  z-index: 10;
  .gallery {
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
    @media (max-width: 1200px) {
      display: block;
    }
    img {
      @media (max-width: 1200px) {
        height: 100%;
        width: 100%;
      }
      height: 60vh;
      margin: 0.5rem;
      width: 45%;
    }
  }
`;

const ListGames = styled(motion.div)`
  padding: 1rem 0rem;
  display: flex;
  flex-wrap: wrap;
  span {
    font-weight: bolder;

    cursor: pointer;
  }
`;

const Stats = styled(motion.div)`
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

const Info = styled(motion.div)`
  text-align: center;
`;
const Platforms = styled(motion.div)`
  display: flex;
  justify-content: space-between;
  img {
    margin-left: 3rem;
  }
`;
const Media = styled(motion.div)`
  margin-top: 5rem;
  img {
    width: 100%;
  }
`;
const Description = styled(motion.div)`
  margin: 5rem 0rem;
`;
const StarsStyled = styled(motion.div)`
  display: flex;
  width: 200px;
  height: 50px;
  img {
    height: 50%;
    width: 10%;
    display: block;
  }
`;
const Series = styled.div`
  display: flex;
  flex-wrap: wrap;
  align-items: center;
  @media (max-width: 1200px) {
    display: block;
  }
`;
const SereiesHeader = styled.h3`
  display: ${(props) => (props.count ? "block" : "none")};
  padding: 2rem 0rem;
`;
const SuggestedHeader = styled.h3`
  display: ${(props) => (props.count ? "block" : "none")};
  padding: 2rem 0rem;
`;
export default GameDetailPopUp;
