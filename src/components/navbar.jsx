function Navbar() {
  return (
    <nav className="navbar navbar-expand-sm m-auto">
      <div className="container-fluid">
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarNav"
          aria-controls="navbarNav"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarNav">
          <ul className="navbar-nav">
            <li className="nav-item">
              <a className="nav-link" aria-current="page" href="#home">
                HOME
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#aboutme-title">
                ABOUT ME
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#achivement-title">
                ACHIVEMENT
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#news-title">
                NEWS
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#joinme-title">
                JOIN ME
              </a>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
