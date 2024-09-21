import React, { useState } from 'react';

import { Carousel } from 'react-bootstrap';

import cam1 from '@/assets/images/cam1.webp';
import cam2 from '@/assets/images/cam2.webp';
import cam3 from '@/assets/images/cam3.webp';
import cam4 from '@/assets/images/cam4.webp';
import cam5 from '@/assets/images/cam5.webp';
import cam6 from '@/assets/images/cam5.webp';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHeart, faStar, faTape } from '@fortawesome/free-solid-svg-icons';
import { Link } from 'react-router-dom';
import paypal from '@/assets/images/paypal.svg';
import './Payment.scss';

const Payment = () => {
  const imgList = [cam1, cam2, cam3, cam4, cam5, cam6];

  const productInfo = [
    {
      id: 'cam-mod',
      rates: [true, true, true, false, false],
      name: 'CAM MOD By Kryptonite Vapor',
      shortIntro:
        'Capture the World from Above with SkyExplorer X20 - Your Eye in the Sky! Overview: Discover the unmatched capabilities of the SkyExplorer X20 Drone, engineered for enthusiasts and professionals alike. Our...',
      price: 200,
      discount: 0,
      availability: 'In Stock',
      brand: 'Canada',
      SKU: 126,
      tags: ['stroller'],
      collections: ['Home page', 'Stroller'],
    },
  ];

  const [quantity, setQuantity] = useState(0);
  return (
    <div className="product-detail-2">
      <div className="product-detail-2__left__carousel">
        <Carousel className="product-detail-2__left__carousel--main">
          {imgList.map((img, index) => (
            <Carousel.Item key={index}>
              <img src={img} alt={img}></img>
            </Carousel.Item>
          ))}
        </Carousel>
        <Carousel className="product-detail-2__left__carousel--other">
          <Carousel.Item className="product-detail-2__left__carousel--other__item">
            {imgList.slice(0, 4).map((img, index) => (
              <img src={img} alt={img} key={index}></img>
            ))}
          </Carousel.Item>
        </Carousel>
      </div>
      <div className="product-detail-2__right">
        {productInfo.map((info) => (
          <div key={info.id} className="product-detail-2__right__container">
            <div className="product-detail-2__right__container__rates">
              {info.rates.map((rate, index) =>
                rate ? (
                  <FontAwesomeIcon
                    icon={faStar}
                    key={index}
                    className="product-detail-2__right__container__rates--filled"
                  />
                ) : (
                  <FontAwesomeIcon
                    icon={faStar}
                    key={index}
                    className="product-detail-2__right__container__rates--unfilled"
                  />
                ),
              )}
            </div>
            <div className="product-detail-2__right__container__name">
              <h2>{info.name}</h2>
            </div>
            <div className="product-detail-2__right__container__price">
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
            <div className="product-detail-2__right__container__intro">
              {info.shortIntro}
            </div>
            <hr></hr>
            <div className="product-detail-2__right__container__status">
              <p>Availability: {info.availability}</p>
              <span className="product-detail-2__right__container__status__brand">
                Brand: <p>{info.brand}</p>
              </span>
              <p>SKU: {info.SKU}</p>
              <span>
                Tags:
                {info.tags.map((tag, index) => (
                  <p
                    key={index}
                    className="product-detail-2__right__container__status__tags"
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
                    className="product-detail-2__right__container__status__tags"
                  >
                    {collection},
                  </p>
                ))}
              </span>
            </div>
            <hr></hr>
            <div className="product-detail-2__right__container__link">
              <FontAwesomeIcon icon={faTape} />
              <Link to={'/'}>Size chart</Link>
            </div>
            <div className="product-detail-2__right__container__colors">
              <div className="product-detail-2__right__container__colors__size">
                <p>Size</p>
                <select>
                  <option value={'small'}>Small</option>
                  <option value={'medium'}>Medium</option>
                </select>
              </div>
              <div className="product-detail-2__right__container__colors__colorList">
                <p>Colors</p>
                <select>
                  <option value={'green'}>Green</option>
                  <option value={'red'}>Red</option>
                  <option value={'black'}>Black</option>
                </select>
              </div>
            </div>
            <div className="product-detail-2__right__container__quality">
              <div className="product-detail-2__right__container__quality__input">
                <p>Qty</p>
                <input type="text" value={quantity} name="count"></input>
              </div>
              <div className="product-detail-2__right__container__quality__input__icon">
                <FontAwesomeIcon icon={faHeart}></FontAwesomeIcon>
              </div>
            </div>
            <div className="product-detail-2__right__container__buttons">
              <Link
                to={'/'}
                className="product-detail-2__right__container__buttons--cart"
              >
                ADD TO CART
              </Link>
              <Link
                to={'/'}
                className="product-detail-2__right__container__buttons--paypal"
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
