import React from 'react';
import { Link } from 'react-router-dom';

import './ItemsDropdown5.scss';

const DropdownList = [
  {
    name: 'COLLECTION',
    linkTo: '/collections',
  },
  {
    name: 'BLOG',
    linkTo: '/blogs/news',
  },
  {
    name: 'BLOG POSTS',
    linkTo: '/blogs/news/:name',
  },
  {
    name: 'CONTACT US',
    linkTo: '/pages/contact-us',
  },
  {
    name: 'FAQS',
    linkTo: 'pages/faqs',
  },
  {
    name: 'ABOUT US',
    linkTo: '/pages/about-us',
  },
  {
    name: 'SERVICES',
    linkTo: '/pages/services',
  },
  {
    name: 'GALLERY',
    linkTo: '/pages/gallery',
  },
  {
    name: 'CART',
    linkTo: '/cart',
  },
  {
    name: 'CHECKOUT',
    linkTo: '/checkout',
  },
  {
    name: 'WISHLIST',
    linkTo: '/pages/wishlist',
  },
  {
    name: 'LOGIN',
    linkTo: '/account/login',
  },
  {
    name: 'REGISTER',
    linkTo: '/account/register',
  },
];

const ItemsDropdown5 = () => {
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

export default ItemsDropdown5;
