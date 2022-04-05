export default {
  APP: {
    PATH: {
      HOME: '/itegraFlix',
      DETAILS: '/itegraFlix/details/:id',
    },
  },
  API: {
    HOST: 'https://api.themoviedb.org/3',
    KEY: 'edef56f24b265d6314a7c2641f41ca32',
    PATHS: {
      POPULAR: 'popular',
      MOVIE: 'movie',
    },
  },
  SEARCH: {
    MIN_LENGTH: 3,
  },
  IMAGE: {
    HOST: 'https://image.tmdb.org/t/p/',
    DEFAULT: {
    },
    SIZE: {
      SMALL: {
        DEFAULT: 'w185',
        NO_POSTER: 'https://dummyimage.com/185x278/eeeeee/999999&text=No+poster',
      },
      LARGE: {
        DEFAULT: 'w300',
        NO_POSTER: 'https://dummyimage.com/300x450/eeeeee/999999&text=No+poster',
      },
    },
  },
};
