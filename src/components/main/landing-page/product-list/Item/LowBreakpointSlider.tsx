import { useState } from 'react';

import Carousel from 'react-bootstrap/Carousel';
import Card from 'react-bootstrap/esm/Card';

import droneModelAfter from '@/assets/images/drone-model1-after.webp';
import droneModelPrev from '@/assets/images/drone-model1-prev.webp';
import droneModelAfter2 from '@/assets/images/drone-model2-after.webp';
import droneModelPrev2 from '@/assets/images/drone-model2-prev.webp';
import droneModelPrev3 from '@/assets/images/drone-model3-prev.webp';
import droneModelAfter4 from '@/assets/images/drone-model4-after.webp';
import droneModelPrev4 from '@/assets/images/drone-model4-prev.webp';
import Button from '@/components/base/Button';

import '../ProductList.scss';

const LowBreakpointSlider = () => {
  const productList = [
    {
      id: '1',
      imgPrev: droneModelPrev,
      imgAfter: droneModelAfter,
      discount: 17,
      rates: 3,
      name: 'Acer Aspire Drone',
      oldPrice: 120,
      newPrice: 100,
    },
    {
      id: '2',
      imgPrev: droneModelPrev2,
      imgAfter: droneModelAfter2,
      discount: 17,
      rates: 3,
      name: 'Acer Drone E15',
      oldPrice: 120,
      newPrice: 100,
    },
    {
      id: '3',
      imgPrev: droneModelPrev3,
      imgAfter: droneModelAfter2,
      discount: 17,
      rates: 3,
      name: 'Acer Drone E15',
      oldPrice: 120,
      newPrice: 100,
    },
    {
      id: '4',
      imgPrev: droneModelPrev4,
      imgAfter: droneModelAfter4,
      discount: 33,
      rates: 3,
      name: 'Acer Drone E15',
      oldPrice: 120,
      newPrice: 80,
    },
    {
      id: '5',
      imgPrev: droneModelPrev4,
      imgAfter: droneModelAfter4,
      discount: 33,
      rates: 3,
      name: 'Acer Drone E15',
      oldPrice: 120,
      newPrice: 80,
    },
  ];

  const [imgHover, setImgHover] = useState<boolean[]>(
    Array(productList.length).fill(false),
  );

  const handleImg = (index: number, isHovering: boolean) => {
    setImgHover((prev) => {
      const newHoverState = [...prev];
      newHoverState[index] = isHovering;
      return newHoverState;
    });
  };

  const formatCurrency = (amount: number) => {
    return new Intl.NumberFormat('en-US', {
      style: 'currency',
      currency: 'USD',
    }).format(amount);
  };

  return (
    <>
      <Carousel className="list">
        {productList.map((product, index) => (
          <Carousel.Item className="list__slide">
            <Card style={{ width: '80%' }} className="list__slide__card">
              <img
                src={imgHover[index] ? product.imgAfter : product.imgPrev}
                alt={product.name}
                onMouseOver={() => handleImg(index, true)}
                onMouseLeave={() => handleImg(index, false)}
                style={{ width: '100%', height: 'auto' }}
              />
              <Card.Body className="list__slide__card__body">
                <Card.Title className="list__slide__card__body__name">
                  {product.name}
                </Card.Title>
                <div className="list__slide__card__body__price">
                  <Card.Text className="list__slide__card__body__price--old">
                    {formatCurrency(product.newPrice)}
                  </Card.Text>
                  <Card.Text className="list__slide__card__body__price--new">
                    {formatCurrency(product.oldPrice)}
                  </Card.Text>
                </div>
                <Button className="button button--tertiary">ADD TO CART</Button>
              </Card.Body>
            </Card>
          </Carousel.Item>
        ))}
      </Carousel>
    </>
  );
};

export default LowBreakpointSlider;
