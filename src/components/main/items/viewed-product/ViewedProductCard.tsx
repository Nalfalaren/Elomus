import React from 'react';

import { Card } from 'react-bootstrap';
import { Link } from 'react-router-dom';

import Button from '@/pages/button';
import './ViewedProduct.scss';

interface ViewedProductCardProps {
  img: string;
  id: string;
  collectionName: string;
  productName: string;
  isHover: boolean;
  oldPrice: number;
  discount: number;
  handleOptionsHoverTrue: () => void;
  handleOptionsHoverFalse: () => void;
}

const ViewedProductCard: React.FC<ViewedProductCardProps> = ({
  img,
  id,
  collectionName,
  productName,
  isHover,
  oldPrice,
  discount,
  handleOptionsHoverTrue,
  handleOptionsHoverFalse,
}) => {
  const discountedPrice = (oldPrice * (100 - discount)) / 100;

  return (
    <div
      onMouseOver={handleOptionsHoverTrue}
      onMouseLeave={handleOptionsHoverFalse}
    >
      <Card className="viewed-card">
        <Card.Body className="viewed-card__body">
          <div className="viewed-card__body__img">
            <img src={img} alt={productName} />
          </div>
          <div className="viewed-card__body__context">
            <Link
              to={`/collections`}
              className="viewed-card__body__context__link"
            >
              {collectionName}
            </Link>
            <h5>
              <Link
                to={`/products/${id}`}
                className="viewed-card__body__context__name"
              >
                {productName}
              </Link>
            </h5>
            {isHover ? (
              <Button className="button button--tertiary products-list__card__body__button">
                ADD TO CART
              </Button>
            ) : (
              <div className="viewed-card__body__context__price">
                <span className="viewed-card__body__context__price--discount">${discountedPrice.toFixed(2)}</span>
                <small className="text-muted">
                  <s>${oldPrice.toFixed(2)}</s>
                </small>
              </div>
            )}
          </div>
        </Card.Body>
      </Card>
    </div>
  );
};

export default ViewedProductCard;
