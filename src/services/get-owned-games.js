const request = require('request');

const basePath = 'https://api.steampowered.com/IPlayerService/GetOwnedGames/v1/';

const buildQueryString = query => Object.keys(query)
  .map(k => encodeURIComponent(k) + '=' + encodeURIComponent(query[k]))
  .join('&');

export const getOwnedGames = (steamid, key) => {
  const query = {
    format: 'json',
    key,
    include_appinfo: 1,
    include_played_free_games: 1,
    steamid
  };
  const queryString = buildQueryString(query);
  const url = `${basePath}?${queryString}`;

  return new Promise((resolve, reject) => {
    request.get(
      url,
      function (error, steamHttpResponse, steamHttpBody) {
        if (error) {
          reject(error);
        } else {
          resolve(JSON.parse(steamHttpBody));
        }
      });
  });
};
