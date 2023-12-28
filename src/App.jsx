import { useContext } from "react";
import { MainContext } from "./context/mainProvider";
import { Route, Routes } from "react-router-dom";
import Homepage from "./pages/Homepage";
import PlanetInfoPage from "./pages/PlanetInfoPage";
import FaqAccordionPage from "./pages/FaqAccordionPage";
import QuoteGenerator from "./components/Apps/QuoteGenerator/QuoteGenerator";
import ShoppingList from "./components/Apps/ShoppingList/ShoppingList";
import GithubuserSearch from "./components/Apps/GithubUserSearch/GithubuserSearch";
import VideoPlayer from "./components/Apps/VideoPlayer/VideoPlayer";

const App = () => {
  const {darkMode} = useContext(MainContext);
  document.body.style.backgroundColor = darkMode ? '#ffffff' : '#333333';
  return (
    <Routes>
      <Route path="/" element={<Homepage />} />
      <Route path="/planet-info" element={<PlanetInfoPage />} />
      <Route path="/faq" element={<FaqAccordionPage />} />
      <Route path="/quote-generator" element={<QuoteGenerator />} />
      <Route path="/shopping-list" element={<ShoppingList />} />
      <Route path="/github-user-search" element={<GithubuserSearch />} />
      <Route path="/video-player" element={<VideoPlayer />} />
    </Routes>
  );
};

export default App;
