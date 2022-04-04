import CONSTANTS from '../utils/constants';

const { HOST, KEY, PATHS } = CONSTANTS.API;

const {
  POPULAR,
  MOVIE,
} = PATHS;

/**
 * Processa respota da API
 */
function processResponse(res) {
  if (!res.ok) {
    throw Error(res.statusText);
  }

  return res.json();
}

/**
 * Obter a informação da Request
 * @returns {Promise} - Respota da API
 */
function getRequestInfo({ path, params = '' }) {
  const config = `${HOST}/${path}?api_key=${KEY}${params}&page=1&language=pt-BR`;
  return new Request(config);
}


async function get(config) {
  const requestInfo = getRequestInfo(config);

  return fetch(requestInfo)
    .then((response) => processResponse(response));
}

/**
 * Obter os filmes mais populares
 */
function getPopularMovies() {
  const config = {
    path: `${MOVIE}/${POPULAR}`,
  };

  return get(config);
}

/**
 * Obter detalhes do filme
 */
function getMovieDetails(id) {
  const config = {
    path: `${MOVIE}/${id}`,
  };

  return get(config);
}

export default {
  getPopularMovies,
  getMovieDetails
};
