import React from 'react';
import { Link } from 'react-router-dom';

import './ItemsDropdown4.scss';

const DropdownList = [
  { name: 'MAIN LAYOUT', linkTo: '/products/acer-aspire-drone' },
  {
    name: 'HORIZONTAL THUMBS',
    linkTo: '/products/cam-mod-by-kryptonite-vapor',
  },
  { name: 'VERTICAL THUMBS', linkTo: '/products/driptip-kryptonite-2' },
  { name: 'VERTICAL THUMBS - RIGHT', linkTo: '/products/driptip-kryptonite-1' },
  { name: 'IMAGE ROLLOVER - VERTICAL', linkTo: '/products/driptip-kryptonite' },
  {
    name: 'HORIZONTAL - SLIDER',
    linkTo: '/products/mod-cam-by-kryptonite-vapor',
  },
  {
    name: 'HORIZONTAL - GRID',
    linkTo: '/products/drink-de-energy-health-strength',
  },
  { name: 'PRE ORDER', linkTo: '/products/coil-master-kbag' },
  { name: 'VIDEO THUMB', linkTo: '/products/cleansers-de-nano' },
  { name: 'TRUST BADGE', linkTo: '/brewer-ce251-60-oz-12-cup-coffee-maker-1' },
  { name: 'DEAL COUNTER', linkTo: '/cam-mod-by-kryptonite-vapor' },
];

const ItemsDropdown4 = () => {
  return (
    <div className="nav__middle__element">
      {DropdownList.map((element) => (
        <div key={element.name}>
          <Link to={`${element.linkTo}`}>{element.name}</Link>
        </div>
      ))}
    </div>
  );
};

export default ItemsDropdown4;
