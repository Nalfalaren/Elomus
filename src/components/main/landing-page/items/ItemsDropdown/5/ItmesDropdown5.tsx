import React from 'react';
import { Link } from 'react-router-dom';

import './ItemsDropdown5.scss';

const DropdownList = {
  content: [
    'COLLECTION',
    'BLOG',
    'BLOG POSTS',
    'CONTACT US',
    'FAQs',
    'ABOUT US',
    'SERVICES',
    'GALLERY',
    'CART',
    'CHECKOUT',
    'WISHLIST',
    'LOGIN',
    'LOG OUT',
  ],
  sub_content: [],
  linkTo: '/',
};

const ItemsDropdown5 = () => {
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

export default ItemsDropdown5;
