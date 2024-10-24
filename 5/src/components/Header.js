import React from 'react';
import { Link } from 'react-router-dom';

import logo from '../images/Logo.svg';
import lupa from '../images/lupa.svg';
import burger from '../images/burger.svg';
import people from '../images/people.svg';
import korzina from '../images/korzina.svg';

const Header = () => {
  return (
    <header className="header-block">
      <div className="container">
        <div className="header-group">
          <div className="header-left">
            <div className="header-left__logo">
              <Link to="/">
                <img className="header-left__logo-img" src={logo} alt="Logo" />
              </Link>
            </div>
            <div className="header-left__lupa">
              <img src={lupa} alt="Search" className="header-left__lupa-image" />
            </div>
          </div>
          <div className="header-right">
            <div className="header-right__burger">
              <img src={burger} alt="Menu" className="header-right__burger-image" />
            </div>
            <div className="header-right__people">
              <img src={people} alt="Profile" className="header-right__people-image" />
            </div>
            <div className="header-right__korzina">
              <Link to="/cart">
                <img src={korzina} alt="Cart" className="header-right__korzina-image" />
              </Link>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
