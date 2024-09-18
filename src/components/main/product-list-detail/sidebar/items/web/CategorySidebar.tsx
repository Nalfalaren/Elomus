import React, { useState } from 'react';

import { Form } from 'react-bootstrap';
import { Link } from 'react-router-dom';

import '../../ProductList.scss';
import Drone from '@/assets/images/sidebar-drone.jpg';

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
    Array(categoriesList.length + stocks.length).fill(false),
  );

  const handleChecked = (index: number) => {
    setIsChecked((prev) => {
      const newChecked = [...prev];
      newChecked[index] = !newChecked[index];
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
              className={`filter__categories__detailed__item ${isChecked[index] ? 'add-filter active' : 'add-filter'}`}
              onClick={() => handleChecked(index)}
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
        <h2>Availability</h2>
        <div className="filter__categories__detailed">
          {stocks.map((stock, index) => (
            <div
              key={stock.name}
              className={`filter__categories__detailed__item ${isChecked[index] ? 'add-filter active' : 'add-filter'}`}
              onClick={() => handleChecked(index)}
            >
              <input type="checkbox" style={{ display: 'none' }} />
              <Link to={`/collections/${stock.name.toLowerCase()}`}>
                {stock.name} ({stock.quantity} items)
              </Link>
              <br />
            </div>
          ))}
        </div>
        <div className="filter__categories">
          <Form.Label style={{ fontSize: '20px' }}>Price</Form.Label>
          <Form.Range />
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
          <div className="filter__categories__detailed__item">
            <input type="checkbox" name="SwissG" value="SwissG" />
            <label htmlFor="SwissG">SwissG</label>
          </div>
        </div>
        <div className="filter__categories__detailed">
          <img src={Drone} alt="drone" />
        </div>
      </div>
    </div>
  );
};

export default CategorySidebar;
