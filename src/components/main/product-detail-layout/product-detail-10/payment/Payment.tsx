import React, { useState } from 'react';

import { faHeart, faStar, faTape } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { Carousel } from 'react-bootstrap';
import { Link } from 'react-router-dom';

import coffee1 from '@/assets/images/coffee1.webp';
import coffee2 from '@/assets/images/coffee2.webp';
import coffee3 from '@/assets/images/coffee3.webp';
import coffee4 from '@/assets/images/coffee4.webp';
import coffee5 from '@/assets/images/coffee5.webp';
import coffee6 from '@/assets/images/coffee6.webp';

import paypal from '@/assets/images/paypal.svg';
import badge from '@/assets/images/trust-badge.avif';
import './Payment10.scss';

const Payment = () => {
  const imgList = [coffee1, coffee2, coffee3, coffee4, coffee5, coffee6];

  const productInfo = [
    {
      id: 'coffee-2',
      rates: [true, true, true, false, false],
      name: 'Brewer CE251 60 oz 12-Cup Coffee Maker',
      shortIntro:
        'More room to move. With 80GB or 160GB of storage and up to 40 hours of battery life, the new iPod classic lets you enjoy up to 40,000 songs or...',
      price: 79,
      discount: 11,
      availability: 'In Stock',
      brand: 'Nanja',
      SKU: '137-3',
      tags: ['coffee maker'],
      collections: ['coffee maker', 'Home page'],
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
    <div className="product-detail-10">
      <div className="product-detail-10__left__carousel">
        <Carousel fade className="product-detail-10__left__carousel--main">
          {imgList.map((img, index) => (
            <Carousel.Item key={index}>
              <img src={img} alt={img}></img>
            </Carousel.Item>
          ))}
        </Carousel>
        <Carousel className="product-detail-10__left__carousel--other">
          <Carousel.Item className="product-detail-10__left__carousel--other__item">
            {imgList.slice(0, 4).map((img, index) => (
              <img src={img} alt={img} key={index}></img>
            ))}
          </Carousel.Item>
        </Carousel>
      </div>
      <div className="product-detail-10__right">
        {productInfo.map((info) => (
          <div key={info.id} className="product-detail-10__right__container">
            <div className="product-detail-10__right__container__rates">
              {info.rates.map((rate, index) =>
                rate ? (
                  <FontAwesomeIcon
                    icon={faStar}
                    key={index}
                    className="product-detail-10__right__container__rates--filled"
                  />
                ) : (
                  <FontAwesomeIcon
                    icon={faStar}
                    key={index}
                    className="product-detail-10__right__container__rates--unfilled"
                  />
                ),
              )}
            </div>
            <div className="product-detail-10__right__container__name">
              <h3>{info.name}</h3>
            </div>
            <div className="product-detail-10__right__container__price">
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
            <div className="product-detail-10__right__container__intro">
              {info.shortIntro}
            </div>
            <hr></hr>
            <div className="product-detail-10__right__container__status">
              <span>
                Availability:
                <p>{info.availability}</p>
              </span>
              <span className="product-detail-10__right__container__status__brand">
                Brand:{' '}
                <p className="product-detail-10__right__container__status__tags">
                  {info.brand}
                </p>
              </span>
              <p>SKU: {info.SKU}</p>
              <span>
                Tags:
                {info.tags.map((tag, index) => (
                  <p
                    key={index}
                    className="product-detail-10__right__container__status__tags"
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
                    className="product-detail-10__right__container__status__tags"
                  >
                    {collection},
                  </p>
                ))}
              </span>
            </div>
            <hr></hr>
            <div className="product-detail-10__right__container__link">
              <FontAwesomeIcon icon={faTape} />
              <Link to={'/'}>Size chart</Link>
            </div>
            <div className="product-detail-10__right__container__quality">
              <div className="product-detail-10__right__container__quality__input">
                <p>Qty</p>
                <input type="text" value={quantity} name="count"></input>
              </div>
              <div className="product-detail-10__right__container__quality__input__icon">
                <FontAwesomeIcon icon={faHeart}></FontAwesomeIcon>
              </div>
            </div>
            <div className="product-detail-10__right__container__buttons">
              <Link
                to="/"
                className="product-detail-10__right__container__buttons--cart"
              >
                ADD TO CART
              </Link>
              <Link
                to="/"
                className="product-detail-10__right__container__buttons--paypal"
              >
                Pay with <img src={paypal} alt="paypal"></img>
              </Link>
            </div>
            <div className="product-detail-10__right__container__badge">
              <img src={badge} alt="badge"></img>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Payment;
