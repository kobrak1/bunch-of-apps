import { NavLink } from "react-router-dom";
import "./Sidebar.scss";

const Sidebar = () => {
  return (
    <aside>
      <div className="component-container">
        <NavLink to={"/"}> Image Carousel </NavLink>
        <NavLink to={"/planet-info"}> Planet Info </NavLink>
        <NavLink to={"/quote-generator"}> Quote Generator </NavLink>
        <NavLink to={"/shopping-list"}> Shopping List </NavLink>
        <NavLink to={"/github-user-search"}> GitHub User Search </NavLink>
        <NavLink to={"/video-player"}> Video Player </NavLink>
        <NavLink to={"/bmi-calculator"}> BMI Calculator </NavLink>
      </div>    </aside>
  );
};

export default Sidebar;
