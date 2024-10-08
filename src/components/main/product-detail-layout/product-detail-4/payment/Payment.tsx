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
import clock6 from '@/assets/images/clock5.webp';
import paypal from '@/assets/images/paypal.svg';

import './Payment3.scss';

const Payment = () => {
  const imgList = [clock1, clock2, clock3, clock4, clock5, clock6];

  const productInfo = [
    {
      id: 'watch',
      rates: [true, true, true, false, false],
      name: 'Driptip Kryptonite',
      shortIntro:
        'More room to move. With 80GB or 160GB of storage and up to 30 hours of battery life, the new iPod classic lets you enjoy up to 30,000 songs or...',
      price: 120,
      discount: 33,
      availability: 'In Stock',
      brand: 'Canada',
      SKU: 123,
      tags: ['smart watch'],
      collections: ['Home page', 'Smart watches'],
      intro:
        'Capture the World from Above with SkyExplorer X20 - Your Eye in the Sky!',
      overview: {
        title: 'Overview:',
        content:
          "Discover the unmatched capabilities of the SkyExplorer X20 Drone, engineered for enthusiasts and professionals alike. Our latest model combines advanced technology with user-friendly features, making aerial photography and videography more accessible than ever. Whether you're capturing stunning landscapes, filming action-packed adventures, or simply exploring the skies, the SkyExplorer X20 is your perfect companion.",
      },
      keyFeatures: [
        {
          title: 'Ultra-High-Definition 3K Camera',
          content:
            'Experience breathtaking clarity and detail with our 3K HD camera, stabilized with a 3-axis gimbal for smooth, cinematic shots.',
        },
        {
          title: 'Advanced Flight Time',
          content:
            'Enjoy extended flight time with our high-capacity battery, allowing you to capture more footage without frequent recharges.',
        },
        {
          title: 'Intelligent Flight Modes',
          content:
            'Choose from various intelligent flight modes like Follow Me, Orbit, and Waypoints to enhance your aerial photography experience.',
        },
        {
          title: 'Obstacle Avoidance System',
          content:
            'Navigate safely with the built-in obstacle avoidance system, designed to prevent collisions and ensure a smooth flight.',
        },
      ],
      bonusItems: [
        '1 x SkyExplorer X20 Drone',
        '1 x Remote Controller',
        '1 x High-Capacity Battery',
      ],
      otherInfo: [
        {
          title: 'Perfect for Everyone',
          content:
            "Whether you're a budding photographer, a seasoned drone pilot, or just looking for a new hobby, the SkyExplorer X20 offers a unique perspective on the world. Its intuitive controls and safety features make it ideal for beginners, while its advanced capabilities satisfy even the most demanding users.",
        },
      ],
    },
  ];

  const [quantity, setQuantity] = useState(0);

  const handleQuantityChange = (event) => {
    const value = Math.max(0, parseInt(event.target.value, 10) || 0);
    setQuantity(value);
  };

  return (
    <div className="product-detail-3">
      <div className="product-detail-3__left__carousel">
        <div className="product-detail-3__left__carousel--other">
          {imgList.map((img, index) => (
            <div
              className="product-detail-3__left__carousel--other__item"
              key={index}
            >
              <img
                src={img}
                alt={`Thumbnail ${index + 1}`}
                className="sub-img"
              />
            </div>
          ))}
        </div>
        <div
          style={{ position: 'sticky', top: '3.5rem', height: 'fit-content' }}
        >
          <Carousel fade className="product-detail-3__left__carousel--main">
            {imgList.map((img, index) => (
              <Carousel.Item key={index}>
                <img src={img} alt={`Main ${index + 1}`} />
              </Carousel.Item>
            ))}
          </Carousel>
        </div>
      </div>
      <div className="product-detail-3__right">
        {productInfo.map((info) => (
          <div key={info.id} className="product-detail-3__right__container">
            <div className="product-detail-3__right__container__rates">
              {info.rates.map((rate, index) => (
                <FontAwesomeIcon
                  icon={faStar}
                  key={index}
                  className={`product-detail-3__right__container__rates--${rate ? 'filled' : 'unfilled'}`}
                />
              ))}
            </div>
            <div className="product-detail-3__right__container__name">
              <h2>{info.name}</h2>
            </div>
            <div className="product-detail-3__right__container__price">
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
            <div className="product-detail-3__right__container__intro">
              {info.shortIntro}
            </div>
            <hr />
            <div className="product-detail-3__right__container__status">
              <span>
                Availability: <p>{info.availability}</p>
              </span>
              <span className="product-detail-3__right__container__status__brand">
                Brand:{' '}
                <p className="product-detail-3__right__container__status__content">
                  {info.brand}
                </p>
              </span>
              <span>
                SKU:{' '}
                <p className="product-detail-3__right__container__status__content">
                  {info.SKU}
                </p>
              </span>
              <div>
                Tags:
                <span className="product-detail-3__right__container__status__content">
                  {info.tags.join(', ')}
                </span>
              </div>
              <div style={{ display: 'flex', gap: '3px' }}>
                Collections:
                <span className="product-detail-3__right__container__status__content">
                  {info.collections.join(', ')}
                </span>
              </div>
            </div>
            <hr />
            <div className="product-detail-3__right__container__link">
              <FontAwesomeIcon icon={faTape} />
              <Link to="/">Size chart</Link>
            </div>
            <div className="product-detail-3__right__container__colors">
              <div className="product-detail-3__right__container__colors__imgList">
                {imgList.slice(0, 3).map((img, index) => (
                  <img
                    src={img}
                    alt={`Color variant ${index + 1}`}
                    key={index}
                  />
                ))}
              </div>
            </div>
            <div className="product-detail-3__right__container__quality">
              <div className="product-detail-3__right__container__quality__input">
                <p>Qty</p>
                <input
                  type="number"
                  value={quantity}
                  onChange={handleQuantityChange}
                  min="0"
                />
              </div>
              <div className="product-detail-3__right__container__quality__input__icon">
                <FontAwesomeIcon icon={faHeart} />
              </div>
            </div>
            <div className="product-detail-3__right__container__buttons">
              <Link
                to="/"
                className="product-detail-3__right__container__buttons--cart"
              >
                ADD TO CART
              </Link>
              <Link
                to="/"
                className="product-detail-3__right__container__buttons--paypal"
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
