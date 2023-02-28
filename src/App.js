import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { Routes, Route } from "react-router-dom";
import { getFilms } from "./features/films/filmsSlice";

import Header from "./components/header/";
import Home from "./pages/home/";
import WatchMoreLater from "./pages/watchMoreLater";

import EmptyState from "./components/emptyState";

const App = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getFilms());
  }, []);

  return (
    <>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/watch-more-later" element={<WatchMoreLater />} />
        <Route
          path="*"
          element={
            <EmptyState text="You didnt broke internet, visit home and search your favorites films again :)" />
          }
        />
      </Routes>
    </>
  );
};

export default App;
