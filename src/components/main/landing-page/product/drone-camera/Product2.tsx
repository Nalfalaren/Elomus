import React from 'react';

import DroneCamera from '@/assets/images/product2.webp';

import './Product2.scss';

const Product2 = () => {
  const listText = [
    {
      id: 'text1',
      title: 'Robust Structure',
      content: 'Even after falling down, your drone will rise the phoenix',
    },
    {
      id: 'text2',
      title: 'Simple Disassembly',
      content: 'Need a new detail? No problem at all!',
    },
    {
      id: 'text3',
      title: 'HD Video Recording',
      content: 'Get the drone with a spectacular 4k camera.',
    },
    {
      id: 'text4',
      title: 'Advanced Technology',
      content: 'We offer only the latest technologies on the market',
    },
  ];

  return (
    <div className="product2">
      <div>
        <div className="product2__img">
          <img src={DroneCamera} alt="drone_camera" loading="lazy"></img>
        </div>
        {listText.map((text) => (
          <div key={text.id} className={`product2__${text.id}`}>
            <h3>{text.title}</h3>
            <p>{text.content}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Product2;
