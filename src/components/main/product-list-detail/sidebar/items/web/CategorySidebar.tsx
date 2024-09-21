import React, { useState } from 'react';

import { Form } from 'react-bootstrap';
import { Link } from 'react-router-dom';

import '../../ProductList.scss';
import Drone from '@/assets/images/sidebar-drone.jpg';
import Range from './Range';

const CategorySidebar = () => {
  const categoriesList = [
    {
      id: '1',
      category: 'Backpacks',
      quantity: 8,
      isChosen: false,
      isAvailable: true,
    },
    {
      id: '2',
      category: 'Bags',
      quantity: 6,
      isChosen: false,
      isAvailable: true,
    },
    {
      id: '3',
      category: 'Bikes',
      quantity: 8,
      isChosen: false,
      isAvailable: true,
    },
    {
      id: '4',
      category: 'Coffee Maker',
      quantity: 6,
      isChosen: false,
      isAvailable: true,
    },
    {
      id: '5',
      category: 'Drink',
      quantity: 6,
      isChosen: false,
      isAvailable: false,
    },
  ];

  const stocks = [
    { name: 'In stock', quantity: 8 },
    { name: 'Out of stock', quantity: 3 },
  ];

  const colorsList = [
    'Black',
    'Blue',
    'Green',
    'Gray',
    'Red',
    'Yellow',
    'Orange',
  ];

  const vendor = ['Abibus', 'Blubiu'];

  const chosenCategory = [
    {
      id: '1',
      category: 'Backpacks',
      quantity: 8,
      isChosen: false,
      isAvailable: true,
    },
  ];

  const [isChecked, setIsChecked] = useState<boolean[]>(
    Array(categoriesList.length).fill(false),
  );

  const [isStockChecked, setIsStockChecked] = useState<boolean[]>(
    Array(stocks.length).fill(false),
  );

  const [isVendorChecked, setIsVendorChecked] = useState<boolean[]>(
    Array(stocks.length).fill(false),
  );

  const handleChecked = (index: number) => {
    setIsChecked((prev) => {
      const newChecked = Array(categoriesList.length).fill(false);
      newChecked[index] = true;
      return newChecked;
    });
  };

  const handleStockChecked = (index: number) => {
    setIsStockChecked((prev) => {
      const newChecked = Array(stocks.length).fill(false);
      newChecked[index] = true;
      return newChecked;
    });
  };

  const handleVendorChecked = (index: number) => {
    setIsVendorChecked((prev) => {
      const newChecked = Array(vendor.length).fill(false);
      newChecked[index] = true;
      return newChecked;
    });
  };

  return (
    <div className="filter">
      <div className="filter__categories">
        <h2>Categories</h2>
        <div className="filter__categories__detailed">
          {categoriesList.map((category, index) => (
            <div
              key={category.id}
              className={`filter__categories__detailed__item`}
              onClick={() => handleChecked(index)}
            >
              <input type="checkbox" style={{ display: 'none' }} />
              <Link
                to={`/collections/${category.category.toLowerCase()}`}
                className={`${isChecked[index] ? 'add-filter active' : 'add-filter'}`}
              >
                {category.category} ({category.quantity} items)
              </Link>
              <br />
            </div>
          ))}
        </div>
      </div>
      <div className="filter__categories">
        <h2>Availability</h2>
        <div className="filter__categories__detailed">
          {stocks.map((stock, index) => (
            <div
              key={stock.name}
              className="filter__categories__detailed__item"
              onClick={() => handleStockChecked(index)}
            >
              <input type="checkbox" style={{ display: 'none' }} />
              <Link
                to={`/collections/${stock.name.toLowerCase()}`}
                className={`${isStockChecked[index] ? 'add-filter active' : 'add-filter'}`}
              >
                {stock.name} ({stock.quantity} items)
              </Link>
              <br />
            </div>
          ))}
        </div>
      </div>
      <div className="filter__categories">
        <h3>Price</h3>
        <Range></Range>
      </div>
      <div className="filter__categories">
        <h2>Product type</h2>
        <div className="filter__categories__detailed">
          {chosenCategory.map((category) => (
            <div
              className="filter__categories__detailed__item"
              key={category.id}
            >
              <input type="checkbox" style={{ display: 'none' }} />
              <Link to={`/collections/${category.category.toLowerCase()}`}>
                {category.category} ({category.quantity} items)
              </Link>
              <br />
            </div>
          ))}
        </div>
      </div>
      <div className="filter__categories">
        <h2>Colors</h2>
        <div className="filter__categories__colors">
          {colorsList.map((color, index) => (
            <div key={index}>
              <input
                type="checkbox"
                value={color}
                style={{
                  width: '30px',
                  height: '30px',
                  borderRadius: '50%',
                  backgroundColor: color,
                  appearance: 'none',
                  border: 'none',
                  cursor: 'pointer',
                  marginRight: '8px',
                }}
              />
            </div>
          ))}
        </div>
      </div>
      <div className="filter__categories">
        <h2>Shop By Vendors</h2>
        {vendor.map((shop, index) => (
          <div
            key={shop}
            className={`filter__categories__detailed__item`}
            onClick={() => handleVendorChecked(index)}
          >
            <input type="checkbox" style={{ display: 'none' }} />
            <Link
              to={`/collections/${shop.toLowerCase()}`}
              className={`${isVendorChecked[index] ? 'add-filter active' : 'add-filter'}`}
            >
              {shop}
            </Link>
            <br />
          </div>
        ))}
      </div>
      <div className="filter__categories__detailed">
        <img src={Drone} alt="drone" />
      </div>
    </div>
  );
};

export default CategorySidebar;
