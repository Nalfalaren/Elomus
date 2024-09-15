import React, { useState } from 'react';

import { faCaretDown } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { Button, Form } from 'react-bootstrap';

import './Extra.scss';

const Extra = () => {
  const [isClick, setIsClick] = useState<boolean[]>([false, false]);

  const extraList = ['Get shipping estimates', 'Discount Coupon'];
  const handleClick = (id: number) => {
    setIsClick((prev) => {
      const updated = [...isClick];
      prev[id] = !prev[id];
      return updated;
    });
  };

  return (
    <div className="extra">
      {extraList.map((extra, index) => (
        <div
          key={index}
          onClick={() => handleClick(index)}
          className="extra__block"
        >
          <div className="extra__block__title">
            <h3>{extra}</h3>
            <FontAwesomeIcon icon={faCaretDown} />
          </div>
          {isClick[index] && index === 0 && (
            <div>
              <Form>
                <Form.Group className="mb-3" controlId="control1">
                  <Form.Label>Country</Form.Label>
                  <Form.Control type="text" placeholder="United States" />
                </Form.Group>
                <Form.Group className="mb-3" controlId="control2">
                  <Form.Label>State</Form.Label>
                  <Form.Control type="text" placeholder="Alabama" />
                </Form.Group>
                <Form.Group className="mb-3" controlId="control1">
                  <Form.Label>Zip/Postal Code</Form.Label>
                  <Form.Control type="text" />
                </Form.Group>
                <Button>Calculate Shipping</Button>
              </Form>
            </div>
          )}
          {isClick[index] && index === 1 && (
            <div>
              <Form>
                <Form.Group className="mb-3" controlId="control4">
                  <Form.Control type="text" placeholder="50fifty" />
                </Form.Group>
              </Form>
            </div>
          )}
        </div>
      ))}
    </div>
  );
};

export default Extra;
