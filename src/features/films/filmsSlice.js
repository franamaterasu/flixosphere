import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  films: [],
  favoriteFilms: [],
  filmsToWatchMoreLater: [],
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
    removeFavoriteFilm: (state) => {},
    addToWatchMoreLater: (state, action) => {
      state.filmsToWatchMoreLater = [
        action.payload,
        ...state.filmsToWatchMoreLater,
      ];
    },
    removeToWatchMoreLate: (state) => {},
  },
});

export const {
  initialFilms,
  addFavoriteFilm,
  removeFavoriteFilm,
  addToWatchMoreLater,
  removeToWatchMoreLate,
} = filmsSlice.actions;

export default filmsSlice.reducer;
