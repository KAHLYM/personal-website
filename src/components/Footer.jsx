import React from 'react';

import Social from './Social';

function Footer() {
  return (
    <div className="Footer">
      <div className="FooterWrapper">
        <Social size="2rem" bottom="1rem" />
        <p className="LastUpdated">last updated July 23, 2021</p>
      </div>
    </div>
  );
}

export default Footer;
