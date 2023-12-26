import Header from "../components/header/header";
import Sidebar from "../components/Sidebar/Sidebar";
import Footer from "../components/Footer/Footer";
import Proptypes from "prop-types";
import { useContext } from "react";
import { MainContext } from "../context/mainProvider";
import "./MainLayout.scss";

const MainLayout = ({ children }) => {
  const { darkMode } = useContext(MainContext);
  document.get;
  return (
    <div className="main-layout">
      <Header />
      <div className="content-page">
        <Sidebar />
        <div
          className="component-content"
          style={{ color: !darkMode && "#fff" }}
        >
          {children}
        </div>
        <div></div>
      </div>
      <Footer />
    </div>
  );
};

MainLayout.propTypes = {
  children: Proptypes.node,
};

export default MainLayout;
