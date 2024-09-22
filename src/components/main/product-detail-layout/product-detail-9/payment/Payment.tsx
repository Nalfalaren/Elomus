import React, { useState } from 'react';

import { faHeart, faStar, faTape } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { Carousel } from 'react-bootstrap';
import { Link } from 'react-router-dom';

import cream1 from '@/assets/images/cream1.webp';
import cream2 from '@/assets/images/cream2.webp';
import cream3 from '@/assets/images/cream3.jpg';
import cream4 from '@/assets/images/cream4.webp';
import cream5 from '@/assets/images/cream5.webp';
import cream6 from '@/assets/images/cream6.webp';

import paypal from '@/assets/images/paypal.svg';
import './Payment9.scss';

const Payment = () => {
  const imgList = [
    cream1,
    cream2,
    cream3,
    cream4,
    cream5,
    cream6,
    'https://elomus-theme.myshopify.com/cdn/shop/files/preview_images/hqdefault.jpg?crop=center&v=1706689446',
  ];

  const productInfo = [
    {
      id: 'cream-2',
      rates: [true, true, true, false, false],
      name: 'Cleansers De Nano',
      shortIntro:
        'The 30-inch Apple Cinema HD Display delivers an amazing 2560 x 1600 pixel resolution. Designed specifically for the creative professional, this display provides more space for easier access to all...',
      price: 120,
      discount: 33,
      availability: 'In Stock',
      brand: 'colora-1',
      SKU: 123,
      tags: ['beauty', 'cosmetics', 'organic'],
      collections: ['SkinCare'],
      listColors: ['pink', '#2ecc40', '#ffdc00'],
      sizes: ['SMALL', 'LARGE'],
    },
  ];

  const [isClick, setIsClick] = useState([true, false]);

  const handleClick = (id: number) => {
    setIsClick((prevState) => {
      const currentState = [false, false];
      currentState[id] = true;
      return currentState;
    });
  };

  const [quantity, setQuantity] = useState(0);
  return (
    <div className="product-detail-9">
      <div className="product-detail-9__left__carousel">
        <Carousel fade className="product-detail-9__left__carousel--main">
          {imgList.map((img, index) => (
            <Carousel.Item key={index}>
              <img src={img} alt={img}></img>
            </Carousel.Item>
          ))}
        </Carousel>
        <Carousel className="product-detail-9__left__carousel--other">
          <Carousel.Item className="product-detail-9__left__carousel--other__item">
            {imgList.slice(0, 4).map((img, index) => (
              <img src={img} alt={img} key={index}></img>
            ))}
          </Carousel.Item>
        </Carousel>
      </div>
      <div className="product-detail-9__right">
        {productInfo.map((info) => (
          <div key={info.id} className="product-detail-9__right__container">
            <div className="product-detail-9__right__container__rates">
              {info.rates.map((rate, index) =>
                rate ? (
                  <FontAwesomeIcon
                    icon={faStar}
                    key={index}
                    className="product-detail-9__right__container__rates--filled"
                  />
                ) : (
                  <FontAwesomeIcon
                    icon={faStar}
                    key={index}
                    className="product-detail-9__right__container__rates--unfilled"
                  />
                ),
              )}
            </div>
            <div className="product-detail-9__right__container__name">
              <h3>{info.name}</h3>
            </div>
            <div className="product-detail-9__right__container__price">
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
            <div className="product-detail-9__right__container__intro">
              {info.shortIntro}
            </div>
            <hr></hr>
            <div className="product-detail-9__right__container__status">
              <span>
                Availability:
                <p>{info.availability}</p>
              </span>
              <span className="product-detail-9__right__container__status__brand">
                Brand:{' '}
                <p className="product-detail-9__right__container__status__tags">
                  {info.brand}
                </p>
              </span>
              <p>SKU: {info.SKU}</p>
              <span>
                Tags:
                {info.tags.map((tag, index) => (
                  <p
                    key={index}
                    className="product-detail-9__right__container__status__tags"
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
                    className="product-detail-9__right__container__status__tags"
                  >
                    {collection},
                  </p>
                ))}
              </span>
            </div>
            <hr></hr>
            <div className="product-detail-9__right__container__colors">
              <p>Colors</p>
              <div className="product-detail-9__right__container__colors__colorList">
                {info.listColors.map((color, index) => (
                  <label
                    key={index}
                    style={{ display: 'inline-block', marginRight: '9px' }}
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
                    />
                  </label>
                ))}
              </div>
            </div>
            <div
              style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}
            >
              <p>Sizes</p>
              <div className="product-detail-9__right__container__sizes">
                {info.sizes.map((size, index) => (
                  <div
                    className={
                      isClick[index]
                        ? 'product-detail-9__right__container__sizes__option active'
                        : 'product-detail-9__right__container__sizes__option'
                    }
                    key={index}
                    onClick={() => handleClick(index)}
                  >
                    {size}
                  </div>
                ))}
              </div>
            </div>
            <div className="product-detail-9__right__container__quality">
              <div className="product-detail-9__right__container__quality__input">
                <p>Qty</p>
                <input type="text" value={quantity} name="count"></input>
              </div>
              <div className="product-detail-9__right__container__quality__input__icon">
                <FontAwesomeIcon icon={faHeart}></FontAwesomeIcon>
              </div>
            </div>
            <div className="product-detail-9__right__container__buttons">
              <Link
                to="/"
                className="product-detail-9__right__container__buttons--cart"
              >
                ADD TO CART
              </Link>
              <Link
                to="/"
                className="product-detail-9__right__container__buttons--paypal"
              >
                Pay with <img src={paypal} alt="paypal"></img>
              </Link>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Payment;
