import React from 'react';
import { Link } from 'react-router-dom';

import './ItemsDropdown4.scss';

const DropdownList = {
  content: [
    'MAIN LAYOUT',
    'HORIZONTAL THUMBS',
    'VERTICAL THUMBS',
    'VERTICAL THUMBS - RIGHT',
    'VERTICAL THUMBS',
    'IMAGE ROLLOVER - VERTICAL',
    'HORIZONTAL - SLIDER',
    'HORIZONTAL - GRID',
    'PRE ORDER',
    'VIDEO THUMB',
    'TRUST BADGE',
    'DEAL COUNTER',
  ],
  sub_content: [],
  linkTo: '/',
};

const ItemsDropdown4 = () => {
  return (
    <div className="nav__middle__element">
      {DropdownList.content.map((element, index) => (
        <div key={index}>
          <Link to={`/${element}`}>{element}</Link>
        </div>
      ))}
    </div>
  );
};

export default ItemsDropdown4;
