import React from 'react';

import type1 from '@/assets/images/type1.webp';
import type2 from '@/assets/images/type2.webp';
import type3 from '@/assets/images/type3.webp';
import type4 from '@/assets/images/type4.webp';
import type5 from '@/assets/images/type5.webp';
import type6 from '@/assets/images/type6.webp';
import type7 from '@/assets/images/type7.webp';
import type8 from '@/assets/images/type8.webp';
import type9 from '@/assets/images/type9.webp';
import type10 from '@/assets/images/type10.webp';
import type11 from '@/assets/images/type11.webp';
import type12 from '@/assets/images/type12.webp';
import type13 from '@/assets/images/type13.webp';
import type14 from '@/assets/images/type14.webp';
import type15 from '@/assets/images/type15.webp';
import type16 from '@/assets/images/type16.webp';
import type17 from '@/assets/images/type17.webp';
import { Card } from 'react-bootstrap';
import './ItemsList.scss';
import { Link } from 'react-router-dom';

const ItemsList = () => {
  const listItems = [
    {
      id: '1',
      img: type1,
      name: 'Backpacks',
      quantity: 8,
    },
    {
      id: '2',
      img: type2,
      name: 'Bags',
      quantity: 8,
    },
    {
      id: '3',
      img: type3,
      name: 'Bikes',
      quantity: 8,
    },
    {
      id: '4',
      img: type4,
      name: 'Coffee Maker',
      quantity: 6,
    },
    {
      id: '5',
      img: type5,
      name: 'Drink',
      quantity: 6,
    },
    {
      id: '6',
      img: type6,
      name: 'Drone',
      quantity: 8,
    },
    {
      id: '7',
      img: type7,
      name: 'Headphones',
      quantity: 9,
    },
    {
      id: '8',
      img: type8,
      name: 'Home page',
      quantity: 99,
    },
    {
      id: '9',
      img: type9,
      name: 'Jewelery',
      quantity: 8,
    },
    {
      id: '10',
      img: type10,
      name: 'Scooty',
      quantity: 6,
    },
    {
      id: '11',
      img: type11,
      name: 'Shaver',
      quantity: 8,
    },
    {
      id: '12',
      img: type12,
      name: 'Shoes',
      quantity: 9,
    },
    {
      id: '13',
      img: type13,
      name: 'Skin cares',
      quantity: 7,
    },
    {
      id: '14',
      img: type14,
      name: 'Smart watch',
      quantity: 8,
    },
    {
      id: '15',
      img: type15,
      name: 'Staff picks',
      quantity: 12,
    },
    {
      id: '16',
      img: type16,
      name: 'Stroller',
      quantity: 6,
    },
    {
      id: '17',
      img: type17,
      name: 'Wallet',
      quantity: 5,
    },
  ];
  return (
    <div>
      <div className="title">
        <h2>COLLECTIONS</h2>
      </div>
      <div className="items">
        {listItems.map((item) => (
          <Link to={`/collections/${item.name.toLowerCase()}`}>
            <Card className="items__card">
              <img src={item.img} alt={item.id}></img>
              <Card.Body className="items__card__title">
                <div>
                  <Card.Title>
                    {item.name} <small>({item.quantity} items)</small>
                </Card.Title>
                </div>
              </Card.Body>
            </Card>
          </Link>
        ))}
      </div>
    </div>
  );
};

export default ItemsList;
