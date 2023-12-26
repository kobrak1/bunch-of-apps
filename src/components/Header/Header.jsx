import { useContext } from "react";
import { MainContext } from "../../context/mainProvider";
import "./Header.scss";

const Header = () => {
  const {darkMode, handleDarkMode} = useContext(MainContext);
  return (
    <header>
      <div className="header-wrapper">
        <a href="#">LOGO</a>
        <div className="container">
          <a href="#">Home</a>
          <a href="#">Blog</a>
          <a href="#">About</a>
          <a href="#">Contact</a>
        </div>
        <div className={`dark-mode ${darkMode === false && "dark"}`}>
          <span
            className={`material-symbols-outlined ${darkMode && "dark"}`}
            onClick={handleDarkMode}
            style={{cursor:"pointer"}}
          >{darkMode ? "light_mode" : "dark_mode"}</span>
        </div>
      </div>
    </header>
  );
};

export default Header;
