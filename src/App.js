import Header from "./components/header/";
import Home from "./pages/home/";
import WatchMoreLater from "./pages/watchMoreLater";
import { Routes, Route } from "react-router-dom";

const App = () => {
  return (
    <>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/watch-more-later" element={<WatchMoreLater />} />
      </Routes>
    </>
  );
};

export default App;
