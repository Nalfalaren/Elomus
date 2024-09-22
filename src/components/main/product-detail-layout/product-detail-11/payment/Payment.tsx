import React, { useState } from 'react';

import { faHeart, faStar, faTape } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { Carousel } from 'react-bootstrap';
import { Link } from 'react-router-dom';

import stroller1 from '@/assets/images/stroller1.webp';
import stroller2 from '@/assets/images/stroller2.webp';
import stroller3 from '@/assets/images/stroller3.webp';
import stroller4 from '@/assets/images/stroller4.webp';
import stroller5 from '@/assets/images/stroller5.webp';
import stroller6 from '@/assets/images/stroller6.webp';
import paypal from '@/assets/images/paypal.svg';
import badge from '@/assets/images/trust-badge.avif';
import './Payment11.scss';

const Payment = () => {
  const imgList = [
    stroller1,
    stroller2,
    stroller3,
    stroller4,
    stroller5,
    stroller6,
  ];

  const productInfo = [
    {
      id: 'stroller-3',
      rates: [true, true, true, false, false],
      name: 'CAM MOD By Kryptonite Vapor',
      shortIntro:
        'More room to move. With 80GB or 160GB of storage and up to 40 hours of battery life, the new iPod classic lets you enjoy up to 40,000 songs or...',
      price: 200,
      discount: 0,
      availability: 'In Stock',
      brand: 'Canona',
      SKU: 126,
      tags: ['stroller'],
      collections: ['Home page', 'Stroller'],
      listColors: ['#2ecc40', '#ff4136', '#111'],
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
    <div className="product-detail-11">
      <div className="product-detail-11__left__carousel">
        <Carousel fade className="product-detail-11__left__carousel--main">
          {imgList.map((img, index) => (
            <Carousel.Item key={index}>
              <img src={img} alt={img}></img>
            </Carousel.Item>
          ))}
        </Carousel>
        <Carousel className="product-detail-11__left__carousel--other">
          <Carousel.Item className="product-detail-11__left__carousel--other__item">
            {imgList.slice(0, 4).map((img, index) => (
              <img src={img} alt={img} key={index}></img>
            ))}
          </Carousel.Item>
        </Carousel>
      </div>
      <div className="product-detail-11__right">
        {productInfo.map((info) => (
          <div key={info.id} className="product-detail-11__right__container">
            <div className="product-detail-11__right__container__rates">
              {info.rates.map((rate, index) =>
                rate ? (
                  <FontAwesomeIcon
                    icon={faStar}
                    key={index}
                    className="product-detail-11__right__container__rates--filled"
                  />
                ) : (
                  <FontAwesomeIcon
                    icon={faStar}
                    key={index}
                    className="product-detail-11__right__container__rates--unfilled"
                  />
                ),
              )}
            </div>
            <div className="product-detail-11__right__container__name">
              <h3>{info.name}</h3>
            </div>
            <div className="product-detail-11__right__container__price">
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
            <div className="product-detail-11__right__container__intro">
              {info.shortIntro}
            </div>
            <hr></hr>
            <div className="product-detail-11__right__container__status">
              <span>
                Availability:
                <p>{info.availability}</p>
              </span>
              <span className="product-detail-11__right__container__status__brand">
                Brand:{' '}
                <p className="product-detail-11__right__container__status__tags">
                  {info.brand}
                </p>
              </span>
              <p>SKU: {info.SKU}</p>
              <span>
                Tags:
                {info.tags.map((tag, index) => (
                  <p
                    key={index}
                    className="product-detail-11__right__container__status__tags"
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
                    className="product-detail-11__right__container__status__tags"
                  >
                    {collection},
                  </p>
                ))}
              </span>
            </div>
            <hr></hr>
            <div className="product-detail-11__right__container__link">
              <FontAwesomeIcon icon={faTape} />
              <Link to={'/'}>Size chart</Link>
            </div>
            <div className="product-detail-11__right__container__colors">
              <p>Colors</p>
              <div className="product-detail-11__right__container__colors__colorList">
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
              <div className="product-detail-11__right__container__sizes">
                {info.sizes.map((size, index) => (
                  <div
                    className={
                      isClick[index]
                        ? 'product-detail-11__right__container__sizes__option active'
                        : 'product-detail-11__right__container__sizes__option'
                    }
                    key={index}
                    onClick={() => handleClick(index)}
                  >
                    {size}
                  </div>
                ))}
              </div>
            </div>
            <div className="product-detail-11__right__container__quality">
              <div className="product-detail-11__right__container__quality__input">
                <p>Qty</p>
                <input type="text" value={quantity} name="count"></input>
              </div>
              <div className="product-detail-11__right__container__quality__input__icon">
                <FontAwesomeIcon icon={faHeart}></FontAwesomeIcon>
              </div>
            </div>
            <div className="product-detail-11__right__container__buttons">
              <Link
                to="/"
                className="product-detail-11__right__container__buttons--cart"
              >
                ADD TO CART
              </Link>
              <Link
                to="/"
                className="product-detail-11__right__container__buttons--paypal"
              >
                Pay with <img src={paypal} alt="paypal"></img>
              </Link>
            </div>
            <div className="product-detail-11__right__container__badge">
              <img src={badge} alt="badge"></img>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Payment;
