import React from 'react';
import { personalInfo } from '../data/portfolioData';

const Footer = () => {
  return (
    <footer className="site-footer">
      <p>© {new Date().getFullYear()} {personalInfo.name}. All rights reserved.</p>
    </footer>
  );
};

export default Footer;
