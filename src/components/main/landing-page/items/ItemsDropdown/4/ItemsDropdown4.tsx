import React from 'react';
import { Link } from 'react-router-dom';

import './ItemsDropdown4.scss';

const DropdownList = [
  { name: 'MAIN LAYOUT', linkTo: '/product/acer-aspire-drone' },
  { name: 'HORIZONTAL THUMBS', linkTo: '/product/cam-mod-by-kryptonite-vapor' },
  { name: 'VERTICAL THUMBS', linkTo: '/product/driptip-kryptonite-1' },
  { name: 'VERTICAL THUMBS - RIGHT', linkTo: '/product/driptip-kryptonite-2' },
  { name: 'IMAGE ROLLOVER - VERTICAL', linkTo: '/product/driptip-kryptonite' },
  {
    name: 'HORIZONTAL - SLIDER',
    linkTo: '/product/mod-cam-by-kryptonite-vapor',
  },
  {
    name: 'HORIZONTAL - GRID',
    linkTo: '/product/drink-de-energy-health-strength',
  },
  { name: 'PRE ORDER', linkTo: '/product/coil-master-kbag' },
  { name: 'VIDEO THUMB', linkTo: '/product/cleansers-de-nano' },
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
