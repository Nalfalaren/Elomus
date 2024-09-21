import React from 'react';

import { faCartShopping, faXmark } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

import wishItem1 from '@/assets/images/drone-model1-after.webp';

import './Wishlist.scss';
import { Button } from 'react-bootstrap';

import ProductView from '../../product-detail-layout/product-detail/viewed-products/ProductView';

const Wishlist = () => {
  const wishList = [
    {
      id: '1',
      image: wishItem1,
      name: 'School, Travel, Work | Padded Backpack Laptop',
      price: 79,
    },
    {
      id: '2',
      image: wishItem1,
      name: 'School, Travel, Work | Padded Backpack Laptop',
      price: 79,
    },
  ];
  return (
    <div className="wishlist">
      <h3>Wishlist</h3>
      <div className="wishlist__table">
        <table>
          <tr>
            <td>Remove</td>
            <td>Image</td>
            <td>Product Name</td>
            <td>Unit price</td>
            <td>Add to Cart</td>
          </tr>
          {wishList.map((item) => (
            <tr key={item.id}>
              <td className="wishlist__remove">
                <Button>
                  <FontAwesomeIcon icon={faXmark} />
                </Button>
              </td>
              <td className="wishlist__image">
                <img src={item.image} alt={item.id}></img>
              </td>
              <td className="wishlist__name">
                <p>{item.name}</p>
              </td>
              <td>
                <span className="wishlist__price">
                  <p>${((item.price * 8) / 10).toFixed(2)}</p>
                  <p>${item.price.toFixed(2)}</p>
                </span>
              </td>
              <td className="wishlist__cart">
                <Button>Add To Cart</Button>
              </td>
            </tr>
          ))}
        </table>
      </div>
    </div>
  );
};

export default Wishlist;
