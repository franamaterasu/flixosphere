import { createAsyncThunk, createSlice, current } from "@reduxjs/toolkit";

const initialState = {
  searchValue: "",
  films: [],
  favoriteFilms: [],
  filmsToWatchMoreLater: [],
  ismodalOpen: false,
  page: 1,
  totalPages: 1,
};

const initialURL = `https://api.themoviedb.org/3/movie/top_rated/?api_key=7cdd6813e009397c594758fe7bce7b47&language=en-US&page`;

export const getFilms = createAsyncThunk("films/getFilms", async () => {
  return fetch(initialURL)
    .then((res) => res.json())
    .then((res) => res.results);
});

export const filmsSlice = createSlice({
  name: "films",
  initialState,
  reducers: {
    searchValue: (state, action) => {
      state.searchValue = action.payload;
    },
    nextPage: (state) => {
      state.page += 1;
    },
    previousPage: (state) => {
      state.page -= 1;
    },
    resetPage: (state, action) => {
      state.page = action.payload;
    },
    totalPages: (state, action) => {
      state.totalPages = action.payload;
    },
    initialFilms: (state, action) => {
      state.films = [...action.payload];
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
  extraReducers: {
    [getFilms.fulfilled]: (state, action) => {
      state.films = action.payload;
    },
  },
});

export const {
  searchValue,
  initialFilms,
  addFavoriteFilm,
  removeFavoriteFilm,
  addToWatchMoreLater,
  removeToWatchMoreLater,
  closeModal,
  nextPage,
  previousPage,
  totalPages,
  resetPage,
} = filmsSlice.actions;

export default filmsSlice.reducer;
