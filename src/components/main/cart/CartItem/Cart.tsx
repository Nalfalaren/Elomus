import React from 'react';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { Button } from 'react-bootstrap';
import { faRotateLeft, faXmark } from '@fortawesome/free-solid-svg-icons';

import './Cart.scss';
import { DATA_LIST } from '../CartData/fakeData';

const Cart = () => {
  return (
    <div className="cart">
      <h3>Shopping Cart</h3>
      <div className="cart__table">
        <table>
          <tr>
            <th>Image</th>
            <th>Product Name</th>
            <th>Quantity</th>
            <th>Unit Price</th>
            <th>Total</th>
          </tr>
          {DATA_LIST.map((cartItem) => (
            <tr key={cartItem.id}>
              <td className="cart__table__img">
                <img src={cartItem.image} alt={cartItem.name} />
              </td>
              <td>
                <span>{cartItem.name}</span> <br></br>
                {cartItem.color}
              </td>
              <td>
                <div className="cart__table__quantity">
                  <input type="text" name="quantity" value={1} />
                  <Button className="cart__table__quantity__rotate">
                    <FontAwesomeIcon icon={faRotateLeft} />
                  </Button>
                  <Button className="cart__table__quantity__cancel">
                    <FontAwesomeIcon icon={faXmark} />
                  </Button>
                </div>
              </td>
              <td>${cartItem.offerPrice.toFixed(2)}</td>
              <td>${cartItem.offerPrice.toFixed(2)}</td>
            </tr>
          ))}
        </table>
      </div>
    </div>
  );
};

export default Cart;
