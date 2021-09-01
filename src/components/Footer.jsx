import React from 'react';

import Social from './Social';

import LastUpdated from '../assets/LastUpdated.js';

function Footer() {
  return (
    <div className="Footer">
      <div className="FooterWrapper">
        <Social size="2rem" bottom="1rem" />
        <p className="LastUpdated">
          last updated
          {LastUpdated}
        </p>
      </div>
    </div>
  );
}

export default Footer;
