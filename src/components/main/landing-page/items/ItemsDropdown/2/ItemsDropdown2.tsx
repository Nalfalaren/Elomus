import React from 'react';

import './ItemsDropdown2.scss';

const ItemsDropdown2 = () => {
  const shopList = [
    {
      id: '1',
      subTitle: 'DRONE',
      subLink: [
        'Home',
        'Shop',
        'Top Products',
        'Product Pages',
        'Pages / Layouts',
      ],
      linkTo: '/collections',
    },
    {
      id: '2',
      subTitle: 'STROLLER',
      subLink: [
        'Home',
        'Shop',
        'Top Products',
        'Product Pages',
        'Pages / Layouts',
      ],
      linkTo: '/collections',
    },
    {
      id: '3',
      subTitle: 'SMARTWATCH',
      subLink: [
        'Home',
        'Shop',
        'Top Products',
        'Product Pages',
        'Pages / Layouts',
      ],
      linkTo: '/collections',
    },
    {
      id: '4',
      subTitle: 'SCOTTER',
      subLink: [
        'Home',
        'Shop',
        'Top Products',
        'Product Pages',
        'Pages / Layouts',
      ],
      linkTo: '/collections',
    },
  ];

  return (
    <div className='shop'>
      {shopList.map((element) => (
        <div key={element.id} className="shop__element">
          <h3>{element.subTitle}</h3>
          <ul>
            {element.subLink.map((link, index) => (
              <li key={index}>{link}</li>
            ))}
          </ul>
        </div>
      ))}
    </div>
  );
};

export default ItemsDropdown2;
