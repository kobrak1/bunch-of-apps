import "./Sidebar.scss";

const Sidebar = () => {
  return (
    <aside>
      <div className="component-container">
        <a href="./">Image Carousel</a>
        <a href="./planet-info">Planet Info</a>
        <a href="./faq">FAQ Accordion</a>
        <a href="./quote-generator">Quote Generator</a>
        <a href="./shopping-list">Shopping List</a>
        <a href="./github-user-search">Github User Search</a>
        <a href="./video-player">Video Player</a>
        <a href="./bmi-calculator">BMI Calculator</a>
      </div>
    </aside>
  );
};

export default Sidebar;
