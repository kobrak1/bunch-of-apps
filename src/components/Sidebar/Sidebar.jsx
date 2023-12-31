import { NavLink } from "react-router-dom";
import "./Sidebar.scss";

const Sidebar = () => {
  return (
    <aside>
      <div className="component-container">
        <p><NavLink to={"/"}> Image Carousel </NavLink></p>
        <p><NavLink to={"/planet-info"}> Planet Info </NavLink></p>
        <p><NavLink to={"/quote-generator"}> Quote Generator </NavLink></p>
        <p><NavLink to={"/shopping-list"}> Shopping List </NavLink></p>
        <p><NavLink to={"/github-user-search"}> GitHub User Search </NavLink></p>
        <p><NavLink to={"/video-player"}> Video Player </NavLink></p>
        <p><NavLink to={"/bmi-calculator"}> BMI Calculator </NavLink></p>
      </div>    
    </aside>
  );
};

export default Sidebar;
