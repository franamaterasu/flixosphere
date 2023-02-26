import { createSlice, current } from "@reduxjs/toolkit";

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
    removeToWatchMoreLater: (state, action) => {
      let filmsToWatchMoreLaterList = current(state.filmsToWatchMoreLater);
      const id = action.payload.id;

      filmsToWatchMoreLaterList = filmsToWatchMoreLaterList.filter(
        (item) => item.id !== id
      );

      state.filmsToWatchMoreLater = filmsToWatchMoreLaterList;
    },
  },
});

export const {
  initialFilms,
  addFavoriteFilm,
  removeFavoriteFilm,
  addToWatchMoreLater,
  removeToWatchMoreLater,
} = filmsSlice.actions;

export default filmsSlice.reducer;
