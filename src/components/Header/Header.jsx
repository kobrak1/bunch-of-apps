import { useContext } from "react";
import { MainContext } from "../../context/MainProvider";
import { NavLink } from "react-router-dom";
import "./Header.scss";

const Header = () => {
  const { darkMode, handleDarkMode } = useContext(MainContext);
  return (
    <header>
      <div className="header-wrapper">
        <NavLink to={"/"} style={{width:"70px", height:"70px"}}>
          <img src="../../../public/img/logo3_img.png" alt="img not found" style={{width:"100%"}} />
        </NavLink>
        <div className="container">
          <a href="/">Home</a>
          <a href="#">Blog</a>
          <a href="#">About</a>
          <a href="#">Contact</a>
        </div>
        <div className={`dark-mode ${darkMode === false && "dark"}`}>
          <span
            className={`material-symbols-outlined ${darkMode && "dark"}`}
            onClick={handleDarkMode}
            style={{ cursor: "pointer" }}
          >
            {darkMode ? "light_mode" : "dark_mode"}
          </span>
        </div>
      </div>
    </header>
  );
};

export default Header;
