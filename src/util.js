import playstation from "./img/playstation.svg";
import steam from "./img/steam.svg";
import xbox from "./img/xbox.svg";
import nintendo from "./img/nintendo.svg";
import apple from "./img/apple.svg";
import gamepad from "./img/gamepad.svg";
import starFull from "./img/star-full.png";
import starEmpty from "./img/star-empty.png";
/////
import axios from "axios";
export const smallImage = (imagePath, size) => {
  if (imagePath !== null) {
    const image = imagePath.match(/media\/screenshots/)
      ? imagePath.replace(
          "media/screenshots",
          `media/resize/${size}/-/screenshots`
        )
      : imagePath.replace("media/games", `media/resize/${size}/-/games`);
    return image;
  }
  return null;
};

export const platFormImages = (platform) => {
  switch (platform) {
    case "PlayStation":
      return playstation;
    case "Xbox":
      return xbox;
    case "Apple":
      return apple;
    case "PC":
      return steam;
    case "Nintendo Switch":
      return nintendo;
    default:
      return gamepad;
  }
};

export const stars = (rating) => {
  let newRating = Math.floor(rating);
  let starsarr = [];
  for (let i = 0; i < 5; i++) {
    if (i < newRating) {
      starsarr.push(<img src={starFull} alt={i} key={i}></img>);
    } else {
      starsarr.push(<img src={starEmpty} alt={i} key={i}></img>);
    }
  }
  return starsarr;
};

export const getGame = async (id) => {
  let data = await axios.get(`https://api.rawg.io/api/games/${id}`);
  return data;
};
