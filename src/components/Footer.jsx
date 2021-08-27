import React from 'react';

import Social from './Social';

function Footer() {
  return (
    <div className="Footer">
      <div className="FooterWrapper">
        <Social size="24" bottom="16" />
        <p className="LastUpdated">last updated July 23, 2021</p>
      </div>
    </div>
  );
}

export default Footer;
