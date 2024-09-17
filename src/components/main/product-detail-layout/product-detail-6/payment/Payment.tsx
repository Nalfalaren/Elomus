import React, { useState } from 'react';

import { faHeart, faStar, faTape } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { Carousel } from 'react-bootstrap';
import { Link } from 'react-router-dom';

import clock1 from '@/assets/images/clock1.webp';
import clock2 from '@/assets/images/clock2.webp';
import clock3 from '@/assets/images/clock3.webp';
import clock4 from '@/assets/images/clock4.webp';
import clock5 from '@/assets/images/clock5.webp';
import clock6 from '@/assets/images/clock6.webp';

import './Payment6.scss';

// Function to split an array into chunks of size `size`
const chunkArray = (array, size) => {
  const result = [];
  for (let i = 0; i < array.length; i += size) {
    result.push(array.slice(i, i + size));
  }
  return result;
};

const Payment = () => {
  const imgList = [clock1, clock2, clock3, clock4, clock5, clock6];
  const imgChunks = chunkArray(imgList, 3);

  const productInfo = [
    {
      id: 'watch',
      rates: [true, true, true, false, false],
      name: 'Driptip Kryptonite',
      shortIntro:
        'More room to move. With 80GB or 160GB of storage and up to 40 hours of battery life, the new iPod classic lets you enjoy up to 40,000 songs or...',
      price: 120,
      discount: 33,
      availability: 'In Stock',
      brand: 'Canada',
      SKU: 123,
      tags: ['smart watch'],
      collections: ['Home page', 'Smart watches'],
    },
  ];

  const [quantity, setQuantity] = useState(0);

  const handleQuantityChange = (event) => {
    const value = Math.max(0, parseInt(event.target.value, 10) || 0);
    setQuantity(value);
  };

  return (
    <div className="product-detail-6">
      <div className="product-detail-6__left__carousel">
        <Carousel className="product-detail-6__left__carousel--other">
          {imgChunks.map((chunk, chunkIndex) => (
            <Carousel.Item
              key={chunkIndex}
              className="product-detail-6__left__carousel--other__item"
            >
              <div className="d-flex">
                {chunk.map((img, imgIndex) => (
                  <img
                    src={img}
                    alt={`Clock ${chunkIndex * 3 + imgIndex + 1}`}
                    key={imgIndex}
                  />
                ))}
              </div>
            </Carousel.Item>
          ))}
        </Carousel>
      </div>
      <div className="product-detail-6__right">
        {productInfo.map((info) => (
          <div key={info.id} className="product-detail-6__right__container">
            <div className="product-detail-6__right__container__rates">
              {info.rates.map((rate, index) => (
                <FontAwesomeIcon
                  icon={faStar}
                  key={index}
                  className={`product-detail-6__right__container__rates--${rate ? 'filled' : 'unfilled'}`}
                />
              ))}
            </div>
            <div className="product-detail-6__right__container__name">
              <h2>{info.name}</h2>
            </div>
            <div className="product-detail-6__right__container__price">
              <p>
                {info.discount > 0 ? (
                  <span>
                    <span>
                      ${((info.price * (100 - info.discount)) / 100).toFixed(2)}
                    </span>{' '}
                    <small>${info.price.toFixed(2)}</small>
                  </span>
                ) : (
                  <span>${info.price.toFixed(2)}</span>
                )}
              </p>
            </div>
            <div className="product-detail-6__right__container__shortIntro">
              {' '}
              <p className="">{info.shortIntro}</p>
            </div>
            <hr />
            <div className="product-detail-6__right__container__status">
              <p>Availability: {info.availability}</p>
              <span className="product-detail-6__right__container__status__brand">
                Brand: <p>{info.brand}</p>
              </span>
              <p>SKU: {info.SKU}</p>
              <div className="product-detail-6__right__container__status__tags">
                Tags:
                {info.tags.map((tag, index) => (
                  <p
                    key={tag}
                    className="product-detail-6__right__container__status__tags__para"
                  >
                    {tag}
                    {index < info.tags.length - 1 && ','}
                  </p>
                ))}
              </div>
              <div className="product-detail-6__right__container__status__tags">
                Collections:
                {info.collections.map((collection, index) => (
                  <p
                    key={collection}
                    className="product-detail-6__right__container__status__tags__para"
                  >
                    {collection}
                    {index < info.collections.length - 1 && ','}
                  </p>
                ))}
              </div>
            </div>
            <hr />
            <div className="product-detail-6__right__container__link">
              <FontAwesomeIcon icon={faTape} />
              <Link to="/">Size chart</Link>
            </div>
            <div className="product-detail-6__right__container__colors">
              <div className="product-detail-6__right__container__colors__imgList">
                {imgList.slice(0, 4).map((img, index) => (
                  <img
                    src={img}
                    alt={`Color variant ${index + 1}`}
                    key={index}
                  />
                ))}
              </div>
            </div>
            <div className="product-detail-6__right__container__quality">
              <div className="product-detail-6__right__container__quality__input">
                <p>Qty</p>
                <input
                  type="number"
                  value={quantity}
                  onChange={handleQuantityChange}
                  min="0"
                />
              </div>
              <div className="product-detail-6__right__container__quality__input__icon">
                <FontAwesomeIcon icon={faHeart} />
              </div>
            </div>
            <div className="product-detail-6__right__container__buttons">
              <Link
                to="/"
                className="product-detail-6__right__container__buttons--cart"
              >
                ADD TO CART
              </Link>
              <Link
                to="/"
                className="product-detail-6__right__container__buttons--paypal"
              >
                Pay with Paypal
              </Link>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Payment;
