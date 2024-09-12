import React from 'react';
import {
  faStar,
  faCircleInfo,
  faHeart,
  faEye,
} from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { Button, Card } from 'react-bootstrap';
import '../landing-page/product-list/ProductList.scss';

// Define the interface for product
interface Product {
  rates: boolean[];
  newPrice: number;
  oldPrice: number;
}

// Define the interface for the props
interface ProductCardProps {
  hoverImg: boolean;
  imgPrev: string;
  imgAfter: string;
  name: string;
  discount: number;
  index: number;
  product: Product;
  listIcon: React.ReactElement[];
  handleImgHoverTrue: (index: number, isHovered: boolean) => void;
  handleImgHoverFalse: (index: number, isHovered: boolean) => void;
  handleOptionsHoverTrue: (index: number, isHovered: boolean) => void;
  handleOptionsHoverFalse: (index: number, isHovered: boolean) => void;
  formatCurrency: (value: number) => string;
}

const ProductCard: React.FC<ProductCardProps> = ({
  hoverImg,
  imgPrev,
  imgAfter,
  name,
  discount,
  product,
  index,
  listIcon,
  handleImgHoverTrue,
  handleImgHoverFalse,
  handleOptionsHoverTrue,
  handleOptionsHoverFalse,
  formatCurrency,
}) => {
  return (
    <Card className="products-list__card" style={{ width: '21rem' }}>
      <div
        className="products-list__card__img"
        onMouseOver={handleImgHoverTrue}
        onMouseLeave={handleImgHoverFalse}
      >
        <img
          src={!hoverImg ? imgPrev : imgAfter}
          alt={name}
          style={{ width: '100%', height: 'auto' }}
        />
        <div className="products-list__card__img__discount">
          <p>{discount}%</p>
        </div>
        {hoverImg && (
          <div
            className="products-list__card__img__icons"
            onMouseOver={() => handleOptionsHoverTrue(index, true)}
            onMouseLeave={() => handleOptionsHoverFalse(index, false)}
          >
            {listIcon.map((icon, iconIndex) => (
              <div
                key={iconIndex}
                className="products-list__card__img__icons__detailed"
              >
                <FontAwesomeIcon icon={icon} />
                {iconIndex < listIcon.length - 1 && <hr />}
              </div>
            ))}
          </div>
        )}
      </div>
      <Card.Body className="products-list__card__body">
        <div className="products-list__card__body__star">
          {product.rates.map((rate, starIndex) =>
            rate ? (
              <FontAwesomeIcon
                icon={faStar}
                key={starIndex}
                className="products-list__card__body__star--filled"
              />
            ) : (
              <FontAwesomeIcon
                icon={faStar}
                key={starIndex}
                className="products-list__card__body__star--unfilled"
              />
            ),
          )}
        </div>
        <Card.Title className="products-list__card__body__name">
          {name}
        </Card.Title>
        <div className="products-list__card__body__price">
          <Card.Text className="products-list__card__body__price--new">
            {formatCurrency(product.newPrice)}
          </Card.Text>
          <Card.Text className="products-list__card__body__price--old">
            {formatCurrency(product.oldPrice)}
          </Card.Text>
        </div>
        <Button className="button button--tertiary">ADD TO CART</Button>
      </Card.Body>
    </Card>
  );
};

export default ProductCard;
