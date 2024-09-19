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

interface Product {
  rates: boolean[];
  newPrice: number;
  oldPrice: number;
}

interface ProductCardProps {
  hoverImg: boolean;
  imgPrev: string;
  imgAfter: string;
  name: string;
  discount: number;
  index: number;
  product: Product;
  colorList?: string[];
  listIcon: React.ReactElement[];
  handleImgHoverTrue: () => void;
  handleImgHoverFalse: () => void;
  handleOptionsHoverTrue: () => void;
  handleOptionsHoverFalse: () => void;
  formatCurrency: (value: number) => string;
}

const ProductCard: React.FC<ProductCardProps> = ({
  hoverImg,
  imgPrev,
  imgAfter,
  name,
  discount,
  product,
  colorList,
  listIcon,
  handleImgHoverTrue,
  handleImgHoverFalse,
  handleOptionsHoverTrue,
  handleOptionsHoverFalse,
  formatCurrency,
}) => {
  return (
    <Card className="products-list__card">
      <div
        className="products-list__card__img"
        onMouseOver={handleImgHoverTrue}
        onMouseLeave={handleImgHoverFalse}
      >
        <img
          src={!hoverImg ? imgPrev : imgAfter}
          alt={name}
          style={{ width: '100%', height: 'auto', borderRadius: '3rem' }}
        />
        <div className="products-list__card__img__discount">
          <p>-{discount}%</p>
        </div>
        {hoverImg && (
          <div
            className="products-list__card__img__icons"
            onMouseOver={handleOptionsHoverTrue}
            onMouseLeave={handleOptionsHoverFalse}
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
        <div className="products-list__card__body__colors">
          {colorList &&
            colorList.map((color, colorIndex) => (
              <div
                key={colorIndex}
                className="products-list__card__body__colors__block"
              >
                <img
                  src={color}
                  alt={`Color ${colorIndex}`}
                  className={`products-list__card__body__colors__img ${colorIndex === 3 ? 'checkbox-color' : ''}`}
                />
              </div>
            ))}
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
        <Button className="button button--tertiary products-list__card__body__button">
          ADD TO CART
        </Button>
      </Card.Body>
    </Card>
  );
};

export default ProductCard;
