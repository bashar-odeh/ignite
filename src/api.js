// base url for api
const base_url = "https://api.rawg.io/api/";

// Getting Date

const getCurrentDate = () => {
  var fullDate = new Date().toISOString().slice(0, 10);
  let year = fullDate.substring(0, 4); //year
  let month = fullDate.substring(5, 7); //month
  let day = fullDate.substring(8, 10); // day
  return [fullDate, year, month, day];
};
const [currentDate, year, month, day] = getCurrentDate();
const lastYear = `${parseInt(year) - 1}-${month}-${day}`;
const nextYear = `${parseInt(year) + 1}-${month}-${day}`;

// popular_games ;

const popular_games = `games?dates=${lastYear},${currentDate}&ordering=-rating&page_size=10`;
const upcoming_games = `games?dates=${currentDate},${nextYear}&ordering=-added&page_size=10`;
const new_games = `games?dates=${currentDate}&ordering=-released&page_size=10`;
export const popularGamesURL = () => `${base_url}${popular_games}`;
export const upcomingGamesURL = () => `${base_url}${upcoming_games}`;
export const newGamesURL = () => `${base_url}${new_games}`;
export const getGameDetailsURL = (id) => `${base_url}games/${id}`;
export const getAllGameURL = () => `${base_url}games`;
export const getGameScreenshotsURL = (id) =>
  `${base_url}games/${id}/screenshots`;
export const getGameSearchURL = (game_name) =>
  `${base_url}games?search=${game_name}&page_size=9`;
export const getGameSeriesURL = (id) =>
  `${base_url}games/${id}/game-series?page_size=3`;
export const getGameSuggetedURL = (id) =>
  `${base_url}games/${id}/suggested?page_size=3`;
export const getStoresURL = () => `${base_url}stores`;
export const getStoreDetailsURL = (id) => `${base_url}stores/${id}`;
export const getTags = (id) => `${base_url}tags`;
