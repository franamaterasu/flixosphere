import { createSlice, current } from "@reduxjs/toolkit";

const initialState = {
  films: [],
  favoriteFilms: [],
  filmsToWatchMoreLater: [],
  ismodalOpen: false,
};

export const filmsSlice = createSlice({
  name: "films",
  initialState,
  reducers: {
    initialFilms: (state, action) => {
      state.films = [action.payload];
    },

    addFavoriteFilm: (state, action) => {
      state.favoriteFilms = [action.payload, ...state.favoriteFilms];
    },

    removeFavoriteFilm: (state, action) => {
      let filmsToFavoriteList = current(state.favoriteFilms);
      const id = action.payload.id;

      filmsToFavoriteList = filmsToFavoriteList.filter(
        (item) => item.id !== id
      );

      state.favoriteFilms = filmsToFavoriteList;
    },

    addToWatchMoreLater: (state, action) => {
      let filmsToWatchMoreLater = current(state.filmsToWatchMoreLater);
      const film = action.payload;

      const isIntheList = filmsToWatchMoreLater.find(
        (item) => item.id === film.id
      );

      if (isIntheList) {
        state.ismodalOpen = true;
      } else {
        state.filmsToWatchMoreLater = [
          action.payload,
          ...state.filmsToWatchMoreLater,
        ];
      }
    },

    removeToWatchMoreLater: (state, action) => {
      let filmsToWatchMoreLaterList = current(state.filmsToWatchMoreLater);
      const id = action.payload.id;

      filmsToWatchMoreLaterList = filmsToWatchMoreLaterList.filter(
        (item) => item.id !== id
      );

      state.filmsToWatchMoreLater = filmsToWatchMoreLaterList;
    },

    closeModal: (state) => {
      state.ismodalOpen = false;
    },
  },
});

export const {
  initialFilms,
  addFavoriteFilm,
  removeFavoriteFilm,
  addToWatchMoreLater,
  removeToWatchMoreLater,
  closeModal,
} = filmsSlice.actions;

export default filmsSlice.reducer;
