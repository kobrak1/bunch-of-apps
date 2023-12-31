import "./Footer.scss";

const Footer = () => {
  return (
    <footer>
      <div className="footer-container">
        <div className="widgets-row">
          <div className="brand-info">
            <div className="footer-logo">
              <a href="#">LOGO</a>
            </div>
            <div className="footer desc">
              The primary goal of this project is to show the implementation of routing, state management and SASS basics. It serves as a learning ground for advanced
              React concepts, providing hands-on experience with state <br />
              management, routing, and algorithmic problem-solving in a React
              environment.
            </div>
            <div className="footer-contact">(+10)123 456 789</div>
          </div>
          <div className="widget-nav-menu">
            <h4>Information</h4>
            <ul className="menu-list">
              <li>
                <a href="#">About Us</a>
              </li>
              <li>
                <a href="#">Privacy Policy</a>
              </li>
            </ul>
          </div>
        </div>
        <div className="copyright-row">
          <div className="site-copyright">
            Copyright 2023 © E-Commerce Theme. All right reserved. Powered by
            Burak Karhan
          </div>
          <div className="footer-menu">
            <a href="#">Privacy Policy</a>
            <a href="#">Terms and Conditions</a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
