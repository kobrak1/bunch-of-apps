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
          <NavLink to={"/product-table"}> <p>Product Table</p> </NavLink>
          <NavLink to={"/user-list"}> <p>User List</p> </NavLink>
          <NavLink to={"/formik-forms"}> <p>Formik Forms</p> </NavLink>
          <NavLink to={"/playground"}> <p>Playground</p> </NavLink>
          <NavLink to={"/hoc-example"}> <p>HOC example</p> </NavLink>
      </div>    
    </aside>
  );
};

export default Sidebar;