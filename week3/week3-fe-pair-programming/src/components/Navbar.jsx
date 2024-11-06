import PageLinks from "./PageLinks";

const Navbar = () => {
  return (
<>
  {/* Navbar section starts */}
  <div>
    <nav className="navbar">
      <div className="nav-center">
        <div className="nav-header">
          <img src="images/logo.svg" className="nav-logo" alt="backroads" />
          <button type="button" className="nav-toggle" id="nav-toggle">
            <i className="fas fa-bars" />
          </button>
        </div>
        <PageLinks parentClass='nav-links' itemClass='nav-link' />
        <ul className="nav-icons">
          <li>
            <a
              href="https://www.facebook.com"
              target="_blank"
              rel="noreferrer"
              className="nav-icon"
            >
              <i className="fab fa-facebook" />
            </a>
          </li>
          <li>
            <a
              href="https://www.x.com"
              target="_blank"
              rel="noreferrer"
              className="nav-icon"
            >
              <i className="fab fa-x-twitter" />
            </a>
          </li>
          <li>
            <a
              href="https://www.squarespace.com/"
              target="_blank"
              rel="noreferrer"
              className="nav-icon"
            >
              <i className="fab fa-squarespace" />
            </a>
          </li>
        </ul>
      </div>
    </nav>
    {/* Navbar section ends */}
  </div>
</>

  );
};

export default Navbar;