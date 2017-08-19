const basePath = `https://api.steampowered.com/IPlayerService/GetOwnedGames/v1/`;
const header = new Headers({
  'Access-Control-Allow-Origin': '*',
  'Content-Type': 'application/json'
});

const options = {
  mode: 'cors',
  header,
  query: {
    more: 1
  }
};

const buildQueryString = query => Object.keys(query)
  .map(k => encodeURIComponent(k) + '=' + encodeURIComponent(query[k]))
  .join('&');

export const getOwnedGames = () => {
  const query = {
    format: 'json',
    key: global.API_KEY,
    include_appinfo: 1,
    include_played_free_games: 1,
    steamid: global.STEAM_ID
  };
  const queryString = buildQueryString(query);
  const url = `${basePath}?${queryString}`;

  return fetch(url, options).then(response => response.json());
};
