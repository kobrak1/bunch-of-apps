import "./Sidebar.css";

const Sidebar = () => {
  return (
    <aside>
      <div className="component-container">
        <a href="/">Image Carousel</a>
        <a href="/planet-info">Planet Info</a>
        <a href="/faq">FAQ Accordion</a>
        <a href="/quote-generator">Quote Generator</a>
        <a href="/shopping-list">Shopping List</a>
      </div>
    </aside>
  );
};

export default Sidebar;
