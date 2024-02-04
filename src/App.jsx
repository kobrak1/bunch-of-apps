import { useContext } from "react";
import { MainContext } from "./context/MainProvider";
import { Route, Routes } from "react-router-dom";
import Homepage from "./pages/Homepage";
import PlanetInfoPage from "./pages/PlanetInfoPage";
import FaqAccordionPage from "./pages/FaqAccordionPage";
import QuoteGenerator from "./components/Apps/QuoteGenerator/QuoteGenerator";
import ShoppingList from "./components/Apps/ShoppingList/ShoppingList";
import GithubuserSearch from "./components/Apps/GithubUserSearch/GithubuserSearch";
import VideoPlayer from "./components/Apps/VideoPlayer/VideoPlayer";
import BmiCalculator from "./components/Apps/BmiCalculator/BmiCalculator";
import BmiCalculatorDetail from "./components/Apps/BmiCalculator/BmiCalculatorDetail";
import ProductTable from "./components/Apps/ProductTable/ProductTable";
import UserList from "./components/Apps/UserList/UserList";
import FormikForms from "./components/Apps/FormikForms/FormikForms";
import Playground from "./components/Apps/Playground/Playground";
import HocExample from "./components/Apps/HOC example/HocExample";

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
      <Route path="/bmi-calculator" element={<BmiCalculator />} />
      <Route path="/bmi-calculator/:id" element={<BmiCalculatorDetail />} />
      <Route path="/product-table" element={<ProductTable />} />
      <Route path="/user-list" element={<UserList />} />
      <Route path="/formik-forms" element={<FormikForms />} />
      <Route path="/playground" element={<Playground />} />
      <Route path="/hoc-example" element={<HocExample />} />
    </Routes>
  );
};

export default App;
