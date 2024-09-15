import React from 'react';
import drink1 from '@/assets/images/drink1.avif';
import bag3 from '@/assets/images/bag3.webp';
import bag2 from '@/assets/images/bag2.avif';
import ring1 from '@/assets/images/ring1.avif';
import bicycle1 from '@/assets/images/bicycle1.avif';
import wallet1 from '@/assets/images/wallet1.avif';
import light1 from '@/assets/images/light1.avif';
import sky1 from '@/assets/images/sky1.webp';

import './Gallery.scss';
 
const Gallery = () => {
  const listProduct = [
    drink1,
    bag3,
    bag2,
    ring1,
    bicycle1,
    wallet1,
    light1,
    sky1,
  ];
  return (
    <div className="gallery">
      <h2>OUR GALLERY</h2>
      <p>
        A responsive gallery page where you can add images with caption. Only
        one gallery at the moment
      </p>
      <div className="gallery__container">
        {listProduct.map((item, index) => (
          <div key={index}>
            <img src={item} alt={item}></img>
          </div>
        ))}
      </div>
      <hr></hr>
    </div>
  );
};

export default Gallery;
