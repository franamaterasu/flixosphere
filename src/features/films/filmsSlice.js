import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  films: [],
};

export const filmsSlice = createSlice({
  name: "films",
  initialState,
  reducers: {
    initialFilms: (state, action) => {
      state.films = [action.payload];
    },
    addFavouriteFilm: (state) => {},
    removeFavouriteFilm: (state) => {},
    addToWatchMoreLater: (state) => {},
    removeToWatchMoreLate: (state) => {},
  },
});

export const {
  initialFilms,
  addFavouriteFilm,
  removeFavouriteFilm,
  addToWatchMoreLater,
  removeToWatchMoreLate,
} = filmsSlice.actions;

export default filmsSlice.reducer;
