import React, { useState } from 'react';

import { faHeart, faStar, faTape } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { Carousel } from 'react-bootstrap';
import { Link } from 'react-router-dom';

import watch1 from '@/assets/images/watch1.webp';
import watch2 from '@/assets/images/watch2.webp';
import watch3 from '@/assets/images/watch3.webp';
import watch4 from '@/assets/images/watch4.webp';
import watch5 from '@/assets/images/watch5.webp';
import watch6 from '@/assets/images/watch6.webp';

import './Payment8.scss';

const Payment = () => {
  const imgList = [watch1, watch2, watch3, watch4, watch5, watch6];

  const productInfo = [
    {
      id: 'watch-2',
      rates: [true, true, true, false, false],
      name: 'Coil Master Kbag',
      shortIntro:
        'More room to move. With 80GB or 160GB of storage and up to 40 hours of battery life, the new iPod classic lets you enjoy up to 40,000 songs or...',
      price: 120,
      discount: 33,
      availability: 'Out of stock',
      brand: 'Opple',
      SKU: 123,
      tags: ['smartwatch'],
      collections: ['Home page', 'smartwatches'],
      listColors: ['white', 'gray', 'black', 'brown'],
    },
  ];

  const [quantity, setQuantity] = useState(0);
  return (
    <div className="product-detail-8">
      <div className="product-detail-8__left__carousel">
        <Carousel fade className="product-detail-8__left__carousel--main">
          {imgList.map((img, index) => (
            <Carousel.Item key={index}>
              <img src={img} alt={img}></img>
            </Carousel.Item>
          ))}
        </Carousel>
        <Carousel className="product-detail-8__left__carousel--other">
          <Carousel.Item className="product-detail-8__left__carousel--other__item">
            {imgList.slice(0, 4).map((img, index) => (
              <img src={img} alt={img} key={index}></img>
            ))}
          </Carousel.Item>
        </Carousel>
      </div>
      <div className="product-detail-8__right">
        {productInfo.map((info) => (
          <div key={info.id} className="product-detail-8__right__container">
            <div className="product-detail-8__right__container__rates">
              {info.rates.map((rate, index) =>
                rate ? (
                  <FontAwesomeIcon
                    icon={faStar}
                    key={index}
                    className="product-detail-8__right__container__rates--filled"
                  />
                ) : (
                  <FontAwesomeIcon
                    icon={faStar}
                    key={index}
                    className="product-detail-8__right__container__rates--unfilled"
                  />
                ),
              )}
            </div>
            <div className="product-detail-8__right__container__name">
              <h3>{info.name}</h3>
            </div>
            <div className="product-detail-8__right__container__price">
              <p>
                {info.discount > 0 ? (
                  <span>
                    <span>
                      $
                      {Math.ceil(
                        (info.price * (100 - info.discount)) / 100,
                      ).toFixed(2)}
                    </span>{' '}
                    <small>${info.price.toFixed(2)}</small>
                  </span>
                ) : (
                  <span>${info.price.toFixed(2)}</span>
                )}
              </p>
            </div>
            <div className="product-detail-8__right__container__intro">
              {info.shortIntro}
            </div>
            <hr></hr>
            <div className="product-detail-8__right__container__status">
              <span>
                Availability:
                <p style={{ color: 'red', fontWeight: 'bold' }}>
                  {info.availability}
                </p>
              </span>
              <span className="product-detail-8__right__container__status__brand">
                Brand:{' '}
                <p className="product-detail-8__right__container__status__tags">
                  {info.brand}
                </p>
              </span>
              <p>SKU: {info.SKU}</p>
              <span>
                Tags:
                {info.tags.map((tag, index) => (
                  <p
                    key={index}
                    className="product-detail-8__right__container__status__tags"
                  >
                    {tag},
                  </p>
                ))}
              </span>
              <span>
                Collections:
                {info.collections.map((collection, index) => (
                  <p
                    key={index}
                    className="product-detail-8__right__container__status__tags"
                  >
                    {collection},
                  </p>
                ))}
              </span>
            </div>
            <hr></hr>
            <div className="product-detail-8__right__container__colors">
              <p>Colors</p>
              <div className="product-detail-8__right__container__colors__colorList">
                {info.listColors.map((color, index) => (
                  <label
                    key={index}
                    style={{ display: 'inline-block', marginRight: '8px' }}
                  >
                    <input
                      type="checkbox"
                      value={color}
                      style={{
                        backgroundColor: color,
                        appearance: 'none',
                        border: 'none',
                        cursor: 'pointer',
                        display: 'none',
                      }}
                    />
                    <span
                      style={{
                        display: 'inline-block',
                        width: '50px',
                        height: '30px',
                        backgroundColor: color,
                        cursor: 'pointer',
                      }}
                      className={`label ${index === 0 ? 'first' : ''}`}
                    />
                  </label>
                ))}
              </div>
            </div>

            <div className="product-detail-8__right__container__quality">
              <div className="product-detail-8__right__container__quality__input">
                <p>Qty</p>
                <input type="text" value={quantity} name="count"></input>
              </div>
              <div className="product-detail-8__right__container__quality__input__icon">
                <FontAwesomeIcon icon={faHeart}></FontAwesomeIcon>
              </div>
            </div>
            <div className="product-detail-8__right__container__buttons">
              <Link
                to={'/'}
                className="product-detail-8__right__container__buttons--cart"
              >
                PRE-ORDER
              </Link>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Payment;
