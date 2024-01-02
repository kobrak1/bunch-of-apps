import { createContext, useState } from "react";
import PropTypes from "prop-types";

export const MainContext = createContext();

const MainProvider = ({ children }) => {
  const [darkMode, setDarkMode] = useState(true);
  

  // function to handle dark mode
  const handleDarkMode = () => {
    setDarkMode(!darkMode);
  };

  return (
    <MainContext.Provider
      value={{
        darkMode,
        handleDarkMode,
      }}
    >
      {children}
    </MainContext.Provider>
  );
};

MainProvider.propTypes = {
  children: PropTypes.node,
};

export default MainProvider;
