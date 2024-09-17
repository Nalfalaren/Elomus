import React from 'react';
import { Link } from 'react-router-dom';

import '@/styles/components/_button.scss';
import './Banner.scss';

const Banner = () => {
  return (
    <div className="banner">
      <p>
        Buy Now Phantom 4 Professional offer an immersive, fun flying
        experience.
      </p>
      <Link to="/" className="banner__link">
        SHOP NOW
      </Link>
    </div>
  );
};

export default Banner;
