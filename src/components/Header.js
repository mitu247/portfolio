import React from 'react';
import { personalInfo } from '../data/portfolioData';

const Header = () => {
  return (
    <header className="header-section">
      <div className="container">
        <h1 className="header-name">{personalInfo.name}</h1>
        <p className="header-tagline">{personalInfo.tagline}</p>
      </div>
    </header>
  );
};

export default Header;
