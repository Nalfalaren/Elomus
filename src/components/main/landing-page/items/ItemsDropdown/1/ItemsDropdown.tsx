import React from 'react';
import { Link } from 'react-router-dom';

import './ItemsDropdown.scss';

const HomeList = {
  title: 'Home',
  content: [
    'HOME - DRONE',
    'HOME - STROLLER',
    'HOME - SMARTWATCH',
    'HOME - SCOTTY',
    'HOME - BEAUTY/HEALTH',
    'HOME - JEWELLERY',
    'HOME - SHOES',
    'HOME - BACKPACKS',
    'HOME - HEADPHONES',
    'HOME - BIKES',
    'HOME - HEADPHONES',
    'HOME - BIKES',
    'HOME - WALLETS',
    'HOME - COFFEEMAKER',
    'HOME - DRINKS',
    'HOME - BAGS',
    'HOME - SHAVER',
  ],
  sub_content: [],
  linkTo: '/',
};

const ItemsDropdown1 = () => {
  return (
    <div className="nav__middle__element">
      {HomeList.content.map((element, index) => (
        <div key={index}>
          <Link to={`/${element}`}>{element}</Link>
        </div>
      ))}
    </div>
  );
};

export default ItemsDropdown1;
