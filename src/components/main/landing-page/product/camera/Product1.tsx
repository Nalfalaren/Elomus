import React from 'react';

import quality from '@/assets/images/4K.png';
import diameter from '@/assets/images/diameter.webp';
import product from '@/assets/images/product.webp';
import weight from '@/assets/images/weight.webp';

import './Product1.scss';

const Product1 = () => {
  const productData = [
    {
      id: '1',
      img: diameter,
      number: 58,
      unit: 'mm',
      name: 'Diameter',
    },
    {
      id: '2',
      img: quality,
      number: 40,
      unit: 'fps',
      name: 'Diameter',
    },
    {
      id: '3',
      img: weight,
      number: 450,
      unit: 'g',
      name: 'Diameter',
    },
  ];
  return (
    <div className="product">
      <div className="product__intro">
        <h3>
          Integrated PTZ camera Stabilizes every single pixel in the image
        </h3>
        <p>
          PTZ camera includes a processor that calculates and compensates
          additional movements, and highly sensitive 3-axis gambal stabilizes up
          to 2000 vibrations per second, ± 0.02° accuracy.
        </p>
        <div className="product__intro__container">
          {productData.map((data) => (
            <div key={data.id} className="product__intro__container__info">
              <div className="product__intro__container__info__img">
                <img src={data.img} alt={data.id}></img>
              </div>
              <div className="product__intro__container__data">
                <div>
                  <h2>
                    {data.number}
                    <span>{data.unit}</span>
                  </h2>
                </div>
                <div>
                  <p>{data.name}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
      <div className="product__intro__container__img">
        <img src={product} alt="camera"></img>
      </div>
    </div>
  );
};

export default Product1;
