import React, { useState } from 'react';

import { Carousel } from 'react-bootstrap';

import droneModelAfter from '@/assets/images/drone-model1-after.webp';
import droneModelPrev from '@/assets/images/drone-model1-prev.webp';
import droneModelAfter2 from '@/assets/images/drone-model2-after.webp';
import droneModelPrev2 from '@/assets/images/drone-model2-prev.webp';
import droneModelPrev3 from '@/assets/images/drone-model3-prev.webp';
import droneModelAfter4 from '@/assets/images/drone-model4-after.webp';
import droneModelPrev4 from '@/assets/images/drone-model4-prev.webp';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHeart, faStar, faTape } from '@fortawesome/free-solid-svg-icons';
import { Link } from 'react-router-dom';

import './Payment.scss';

const Payment = () => {
  const imgList = [
    droneModelAfter,
    droneModelPrev,
    droneModelAfter2,
    droneModelPrev2,
    droneModelPrev3,
    droneModelAfter4,
  ];

  const productInfo = [
    {
      id: 'acer-aspire-drone',
      rates: [true, true, true, false, false],
      name: 'Acer Aspire Drone',
      price: 120,
      discount: 17,
      availability: 'In Stock',
      brand: 'Canada',
      SKU: 123,
      tags: ['camera', 'drone'],
      collections: ['Drone', 'Home page', 'Staff Picks'],
      intro:
        'Capture the World from Above with SkyExplorer X20 - Your Eye in the Sky!',
      overview: {
        title: 'Overview:',
        content:
          "Discover the unmatched capabilities of the SkyExplorer X20 Drone, engineered for enthusiasts and professionals alike. Our latest model combines advanced technology with user-friendly features, making aerial photography and videography more accessible than ever. Whether you're capturing stunning landscapes, filming action-packed adventures, or simply exploring the skies, the SkyExplorer X20 is your perfect companion.",
      },
      keyFeatures: [
        {
          title: 'Ultra-High-Definition 4K Camera',
          content:
            ' Experience breathtaking clarity and detail with our 4K HD camera, stabilized with a 3-axis gimbal for smooth, cinematic shots.',
        },
        {
          title: 'Ultra-High-Definition 4K Camera',
          content:
            ' Experience breathtaking clarity and detail with our 4K HD camera, stabilized with a 3-axis gimbal for smooth, cinematic shots.',
        },
        {
          title: 'Ultra-High-Definition 4K Camera',
          content:
            ' Experience breathtaking clarity and detail with our 4K HD camera, stabilized with a 3-axis gimbal for smooth, cinematic shots.',
        },
        {
          title: 'Ultra-High-Definition 4K Camera',
          content:
            ' Experience breathtaking clarity and detail with our 4K HD camera, stabilized with a 3-axis gimbal for smooth, cinematic shots.',
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
  return (
    <div className="product-detail">
      <div className="product-detail__left__carousel">
        <Carousel className="product-detail__left__carousel--main">
          {imgList.map((img, index) => (
            <Carousel.Item key={index}>
              <img src={img} alt={img}></img>
            </Carousel.Item>
          ))}
        </Carousel>
        <Carousel className="product-detail__left__carousel--other">
          <Carousel.Item className="product-detail__left__carousel--other__item">
            {imgList.slice(0, 4).map((img, index) => (
              <img src={img} alt={img} key={index}></img>
            ))}
          </Carousel.Item>
        </Carousel>
      </div>
      <div className="product-detail__right">
        {productInfo.map((info) => (
          <div key={info.id} className="product-detail__right__container">
            <div className="product-detail__right__container__rates">
              {info.rates.map((rate, index) =>
                rate ? (
                  <FontAwesomeIcon
                    icon={faStar}
                    key={index}
                    className="product-detail__right__container__rates--filled"
                  />
                ) : (
                  <FontAwesomeIcon
                    icon={faStar}
                    key={index}
                    className="product-detail__right__container__rates--unfilled"
                  />
                ),
              )}
            </div>
            <div className="product-detail__right__container__name">
              <h2>{info.name}</h2>
            </div>
            <div className="product-detail__right__container__price">
              <p>
                <span>
                  $
                  {Math.ceil(
                    (info.price * (100 - info.discount)) / 100,
                  ).toFixed(2)}
                </span>{' '}
                <small>${info.price.toFixed(2)}</small>
              </p>
            </div>
            <hr></hr>
            <div className="product-detail__right__container__status">
              <p>Availability: {info.availability}</p>
              <span className="product-detail__right__container__status__brand">
                Brand: <p>{info.brand}</p>
              </span>
              <p>SKU: {info.SKU}</p>
              <span>
                Tags:
                {info.tags.map((tag, index) => (
                  <p
                    key={index}
                    className="product-detail__right__container__status__tags"
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
                    className="product-detail__right__container__status__tags"
                  >
                    {collection},
                  </p>
                ))}
              </span>
            </div>
            <hr></hr>
            <div className="product-detail__right__container__link">
              <FontAwesomeIcon icon={faTape} />
              <Link to={'/'}>Size chart</Link>
            </div>
            <div className="product-detail__right__container__colors">
              <p>Color</p>
              <div className="product-detail__right__container__colors__imgList">
                {imgList.slice(0, 4).map((img, index) => (
                  <img src={img} alt={img} key={index}></img>
                ))}
              </div>
            </div>
            <div className="product-detail__right__container__quality">
              <div className="product-detail__right__container__quality__input">
                <p>Qty</p>
                <input type="text" value={quantity} name="count"></input>
              </div>
              <div className="product-detail__right__container__quality__input__icon">
                <FontAwesomeIcon icon={faHeart}></FontAwesomeIcon>
              </div>
            </div>
            <div className="product-detail__right__container__buttons">
              <Link
                to={'/'}
                className="product-detail__right__container__buttons--cart"
              >
                ADD TO CART
              </Link>
              <Link
                to={'/'}
                className="product-detail__right__container__buttons--paypal"
              >
                Pay with Paypal
              </Link>
            </div>
            <div className="product-detail__right__intro">
              <h3>Product Details</h3>
              <h4>{info.intro}</h4>
              <div className="product-detail__right__intro__overview">
                <p>
                  <span>{info.overview.title}</span> {info.overview.content}
                </p>
              </div>
            </div>
            <div className="product-detail__right__intro__key">
              <span>Key Features:</span>
              <ul>
                {info.keyFeatures.map((feature, index) => (
                  <li key={index}>
                    <span>{feature.title}</span>: {feature.content}
                  </li>
                ))}
              </ul>
            </div>
            <div className="product-detail__right__intro__prize">
              <span>What's in the Box:</span>
              <ul>
                {info.bonusItems.map((item, index) => (
                  <li key={index}>{item}</li>
                ))}
              </ul>
            </div>
            <div className="product-detail__right__intro__others">
              {info.otherInfo.map((item, index) => (
                <p key={index}>
                  <span>{item.title}</span>: {item.content}
                </p>
              ))}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Payment;
