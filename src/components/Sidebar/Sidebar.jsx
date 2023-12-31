import { NavLink } from "react-router-dom";
import "./Sidebar.scss";

const Sidebar = () => {
  return (
    <aside>
      <div className="component-container">
        <NavLink to={"/"}> <p>Image Carousel</p> </NavLink>
        <NavLink to={"/planet-info"}> <p>Planet Info</p> </NavLink>
        <NavLink to={"/quote-generator"}> <p>Quote Generator</p> </NavLink>
        <NavLink to={"/shopping-list"}> <p>Shopping List</p> </NavLink>
        <NavLink to={"/github-user-search"}> <p>GitHub User Search</p> </NavLink>
        <NavLink to={"/video-player"}> <p>Video Player</p> </NavLink>
        <NavLink to={"/bmi-calculator"}> <p>BMI Calculator</p> </NavLink>
      </div>
    </aside>
  );
};

export default Sidebar;
