import React from 'react';

import './Total.scss';
import { Button } from 'react-bootstrap';

const Total = () => {
  return (
    <div className="total">
      <table>
        <tbody>
          <tr>
            <th>
              Shipping, taxes, and discounts will be calculated at checkout.
            </th>
          </tr>
          <tr>
            <td>Subtotal:</td>
            <td>$100.00</td>
          </tr>
          <tr>
            <td className="total__checkbox">
              <input type="checkbox"></input>
              <label>
                I agree with the <span>terms and conditions</span>
              </label>
            </td>
          </tr>
        </tbody>
      </table>
      <div className="total__buttons">
        <Button>Continue Shopping</Button>
        <Button>PROCEED TO CHECK OUT</Button>
      </div>
    </div>
  );
};

export default Total;
