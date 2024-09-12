import React from 'react';

import { Form } from 'react-bootstrap';
import './ProductList.scss';
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

  const colorsList = [
    'Black',
    'Blue',
    'Green',
    'Gray',
    'Red',
    'Yellow',
    'Orange',
  ];

  return (
    <div className="filter">
      <div className="filter__categories">
        <h2>Categories</h2>
        <div className="filter__categories__detailed">
          {categoriesList.map((category) => (
            <div
              key={category.id}
              className="filter__categories__detailed__item"
            >
              <input
                type="checkbox"
                name={category.category}
                value={category.category}
              ></input>
              <label htmlFor={category.category}>
                {category.category} <small>({category.quantity} items)</small>
              </label>
              <br></br>
            </div>
          ))}
        </div>
      </div>
      <div className="filter__categories">
        <h2>Availability</h2>
        <div className="filter__categories__detailed">
          <div className="filter__categories__detailed__item">
            <input type="checkbox" name="In stock" value="In stock"></input>
            <label htmlFor="In stock">
              In stock <small>(8)</small>
            </label>
            <br></br>
          </div>
          <div className="filter__categories__detailed__item">
            <input
              type="checkbox"
              name="Out of Stock"
              value="Out of stock"
            ></input>
            <label htmlFor="Out of stock">
              Out of stock <small>(3)</small>
            </label>
            <br></br>
          </div>
        </div>
      </div>
      <div className="filter__categories">
        <Form.Label style={{ fontSize: '20px' }}>Price</Form.Label>
        <Form.Range />
      </div>
      <div className="filter__categories">
        <h2>Product type</h2>
        <div className="filter__categories__detailed">
          {categoriesList.map((category) => (
            <div
              className="filter__categories__detailed__item"
              key={category.id}
            >
              <input
                type="checkbox"
                name={category.category}
                value={category.category}
              ></input>
              <label htmlFor={category.category}>
                {category.category} <small>({category.quantity} items)</small>
              </label>
              <br></br>
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
                  width: '20px',
                  height: '20px',
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
          <input type="checkbox" name="SwissG" value="SwissG"></input>
          <label htmlFor="SwissG">SwissG</label>
        </div>
      </div>
      <div className="filter__categories__detailed">
        <img src={Drone} alt="drone" />
      </div>
    </div>
  );
};

export default CategorySidebar;
