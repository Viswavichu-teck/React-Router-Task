import React, { useState } from 'react';
import { Link } from 'react-router-dom';

function Nav() {
  const [tab, setTab] = useState("/");

  const handleTab = (fix) => {
    setTab(fix);
  };

  return (
    <nav className="navbar navbar-expand-lg navbar-light bg-light">
      <div className="container-fluid">
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarNavAltMarkup"
          aria-controls="navbarNavAltMarkup"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div
          className="collapse navbar-collapse justify-content-lg-center pe-lg-5 me-lg-5"
          id="navbarNavAltMarkup"
        >
          <div className="navbar-nav">
            <Link
              to="/"
              className={`nav-link ${tab === '/' ? 'select' : ''}`}
              onClick={() => handleTab('/')}
            >
              All
            </Link>

            <Link
              to="/fsd"
              className={`nav-link ${tab === '/fsd' ? 'select' : ''}`}
              onClick={() => handleTab('/fsd')}
            >
              Full Stack Development
            </Link>

            <Link
              to="/science"
              className={`nav-link ${tab === '/science' ? 'select' : ''}`}
              onClick={() => handleTab('/science')}
            >
              Data Science
            </Link>

            <Link
              to="/cyber"
              className={`nav-link ${tab === '/cyber' ? 'select' : ''}`}
              onClick={() => handleTab('/cyber')}
            >
              Cyber Security
            </Link>

            <Link
              to="/career"
              className={`nav-link ${tab === '/career' ? 'select' : ''}`}
              onClick={() => handleTab('/career')}
            >
              Career
            </Link>
          </div>
        </div>
      </div>
    </nav>
  );
}

export default Nav;
