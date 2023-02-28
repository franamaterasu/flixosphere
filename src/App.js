import Header from "./components/header/";
import Home from "./pages/home/";
import WatchMoreLater from "./pages/watchMoreLater";
import { Routes, Route } from "react-router-dom";
import EmptyState from "./components/emptyState";

const App = () => {
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
