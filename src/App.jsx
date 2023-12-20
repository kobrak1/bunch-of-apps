import { useContext } from "react";
import { MainContext } from "./context/mainProvider";
import { Route, Routes } from "react-router-dom";
import Homepage from "./pages/Homepage";
import PlanetInfoPage from "./pages/PlanetInfoPage";

const App = () => {
  const {darkMode} = useContext(MainContext);
  document.body.style.backgroundColor = darkMode ? '#ffffff' : '#333333';
  return (
    <Routes>
      <Route path="/" element={<Homepage />} />
      <Route path="/planet-info" element={<PlanetInfoPage />} />
    </Routes>
  );
};

export default App;
