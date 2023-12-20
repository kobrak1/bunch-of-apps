import "./Sidebar.css";

const Sidebar = () => {
  return (
    <aside>
      <div className="component-container">
        <a href="/">Image Carousel</a>
        <a href="/planet-info">Planet Info</a>
        <a href="#about">About</a>
        <a href="#contact">Contact</a>
      </div>
    </aside>
  );
};

export default Sidebar;
