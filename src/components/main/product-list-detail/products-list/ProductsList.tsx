import React, { useState } from 'react';

import droneModelAfter from '@/assets/images/drone-model1-after.webp';
import droneModelPrev from '@/assets/images/drone-model1-prev.webp';
import droneModelAfter2 from '@/assets/images/drone-model2-after.webp';
import droneModelPrev2 from '@/assets/images/drone-model2-prev.webp';
import droneModelPrev3 from '@/assets/images/drone-model3-prev.webp';
import droneModelAfter4 from '@/assets/images/drone-model4-after.webp';
import droneModelPrev4 from '@/assets/images/drone-model4-prev.webp';
import Button from '@/components/base/Button';
import './ProductsList.scss';

import {
  faStar,
  faCircleInfo,
  faHeart,
  faEye,
  faBars,
} from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

import Sidebar from '@/components/Sidebar';

import ProductCard from '../../items/ProductCard';

import { Link } from 'react-router-dom';

const ProductsList = () => {
  const imgOptions = [
    'https://elomus-theme.myshopify.com/cdn/shop/t/55/assets/bkg_grid_hover.png?v=172316855767935615901722488037',
    'https://elomus-theme.myshopify.com/cdn/shop/t/55/assets/bkg_grid4.png?v=82978414880152813121722488035',
    'https://elomus-theme.myshopify.com/cdn/shop/t/55/assets/bkg_grid5.png?v=29113817210500446361722488036',
    'https://elomus-theme.myshopify.com/cdn/shop/t/55/assets/bkg_list.png?v=98054757699547239741722488037',
  ];

  const smOptions = [
    'https://elomus-theme.myshopify.com/cdn/shop/t/55/assets/bkg_grid_hover.png?v=172316855767935615901722488037',
    'https://elomus-theme.myshopify.com/cdn/shop/t/55/assets/bkg_grid4.png?v=82978414880152813121722488035',
    'https://elomus-theme.myshopify.com/cdn/shop/t/55/assets/bkg_list.png?v=98054757699547239741722488037',
  ];

  const filterOptions = [
    'Best Selling',
    'Alphabetically A-Z',
    'Alphabetically Z-A',
    'Price: Low to high',
    'Price: High to low',
    'Date, new to old',
    'Date, old to new',
  ];

  const listIcon = [faCircleInfo, faHeart, faEye];

  const productList = [
    {
      id: '1',
      imgPrev: droneModelPrev,
      imgAfter: droneModelAfter,
      discount: 17,
      rates: [true, true, true, false, false],
      listColor: [
        droneModelPrev,
        droneModelPrev2,
        droneModelPrev3,
        droneModelPrev4,
      ],
      name: 'Acer Aspire Drone',
      oldPrice: 120,
      newPrice: 100,
    },
    {
      id: '2',
      imgPrev: droneModelPrev2,
      imgAfter: droneModelAfter2,
      discount: 17,
      rates: [true, true, true, false, false],
      listColor: [
        droneModelPrev,
        droneModelPrev2,
        droneModelPrev3,
        droneModelPrev4,
      ],
      name: 'Acer Drone E15',
      oldPrice: 120,
      newPrice: 100,
    },
    {
      id: '3',
      imgPrev: droneModelPrev3,
      imgAfter: droneModelAfter2,
      discount: 17,
      rates: [true, true, true, false, false],
      listColor: [
        droneModelPrev,
        droneModelPrev2,
        droneModelPrev3,
        droneModelPrev4,
      ],
      name: 'Acer Drone E15',
      oldPrice: 120,
      newPrice: 100,
    },
    {
      id: '4',
      imgPrev: droneModelPrev4,
      imgAfter: droneModelAfter4,
      discount: 33,
      rates: [true, true, true, false, false],
      listColor: ['blue', 'gray', 'yellow', 'black'],
      name: 'Acer Drone E15',
      oldPrice: 120,
      newPrice: 80,
    },
    {
      id: '5',
      imgPrev: droneModelPrev4,
      imgAfter: droneModelAfter4,
      discount: 33,
      rates: [true, true, true, false, false],
      listColor: [
        droneModelPrev,
        droneModelPrev2,
        droneModelPrev3,
        droneModelPrev4,
      ],
      name: 'Acer Drone E15',
      oldPrice: 120,
      newPrice: 80,
    },
    {
      id: '6',
      imgPrev: droneModelPrev4,
      imgAfter: droneModelAfter4,
      discount: 33,
      listColor: [
        droneModelPrev,
        droneModelPrev2,
        droneModelPrev3,
        droneModelPrev4,
      ],
      rates: [true, true, true, false, false],
      name: 'Acer Drone E15',
      oldPrice: 120,
      newPrice: 80,
    },
    {
      id: '7',
      imgPrev: droneModelPrev4,
      imgAfter: droneModelAfter4,
      discount: 33,
      listColor: [
        droneModelPrev,
        droneModelPrev2,
        droneModelPrev3,
        droneModelPrev4,
      ],
      rates: [true, true, true, false, false],
      name: 'Acer Drone E15',
      oldPrice: 120,
      newPrice: 80,
    },
    {
      id: '8',
      imgPrev: droneModelPrev4,
      imgAfter: droneModelAfter4,
      discount: 33,
      listColor: [
        droneModelPrev,
        droneModelPrev2,
        droneModelPrev3,
        droneModelPrev4,
      ],
      rates: [true, true, true, false, false],
      name: 'Acer Drone E15',
      oldPrice: 120,
      newPrice: 80,
    },
    {
      id: '9',
      imgPrev: droneModelPrev4,
      imgAfter: droneModelAfter4,
      discount: 33,
      listColor: [
        droneModelPrev,
        droneModelPrev2,
        droneModelPrev3,
        droneModelPrev4,
      ],
      rates: [true, true, true, false, false],
      name: 'Acer Drone E15',
      oldPrice: 120,
      newPrice: 80,
    },
  ];

  const [imgHover, setImgHover] = useState<boolean[]>(
    Array(productList.length).fill(false),
  );
  const [optionsHover, setOptionsHover] = useState<boolean[]>(
    Array(productList.length).fill(false),
  );

  const handleImgHover = (index: number, isHovering: boolean) => {
    if (!optionsHover[index]) {
      setImgHover((prev) => {
        const newHoverState = [...prev];
        newHoverState[index] = isHovering;
        return newHoverState;
      });
    }
  };

  const handleOptionsHover = (index: number, isHovering: boolean) => {
    setOptionsHover((prev) => {
      const newHoverState = [...prev];
      newHoverState[index] = isHovering;
      return newHoverState;
    });
  };

  const formatCurrency = (amount: number) => {
    return new Intl.NumberFormat('en-US', {
      style: 'currency',
      currency: 'USD',
    }).format(amount);
  };

  const handleSidebar = () => {
    setIsOpen((prev) => !prev);
  };

  return (
    <div className="products-list">
      <div className="products-list__mb" onClick={handleSidebar}>
        <FontAwesomeIcon icon={faBars} />
        <span>View sidebar filter</span>
      </div>
      <div className="products-list__filter">
        <div className="products-list__filter__img">
          {window.innerWidth > 726
            ? imgOptions.map((option, index) => (
                <div key={index}>
                  <img src={option} alt={option}></img>
                </div>
              ))
            : smOptions.map((option, index) => (
                <div key={index}>
                  <img src={option} alt={option}></img>
                </div>
              ))}
        </div>
        <div className="products-list__filter__result">
          <span>Showing 1 to 8 of 8 items</span>
        </div>
        <div className="products-list__filter__options">
          <label>Sort by</label>
          <select>
            <option value="Featured" selected>
              Featured
            </option>
            {filterOptions.map((option) => (
              <option value={option} key={option}>
                {option}
              </option>
            ))}
          </select>
        </div>
      </div>
      <div className="products-list__result">
        {productList.map((product, index) => (
          <Link
            key={product.id}
            to={`/product/${product.name}`}
            className="products-list__result__link"
          >
            <ProductCard
              hoverImg={imgHover[index]}
              imgPrev={product.imgPrev}
              imgAfter={product.imgAfter}
              name={product.name}
              discount={product.discount}
              product={product}
              index={index}
              colorList={product.listColor}
              listIcon={listIcon}
              handleImgHoverTrue={() => handleImgHover(index, true)}
              handleImgHoverFalse={() => handleImgHover(index, false)}
              handleOptionsHoverTrue={() => handleOptionsHover(index, true)}
              handleOptionsHoverFalse={() => handleOptionsHover(index, false)}
              formatCurrency={formatCurrency}
              className="products-list__result__card"
            />
          </Link>
        ))}
      </div>
    </div>
  );
};

export default ProductsList;
