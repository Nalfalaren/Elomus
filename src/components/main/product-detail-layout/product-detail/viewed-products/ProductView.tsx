import { useState } from 'react';

import {
  faCircleInfo,
  faHeart,
  faEye,
} from '@fortawesome/free-solid-svg-icons';
import { Button } from 'react-bootstrap';

import droneModelPrev from '@/assets/images/drone-model1-prev.webp';
import droneModelPrev2 from '@/assets/images/drone-model2-prev.webp';
import droneModelPrev3 from '@/assets/images/drone-model3-prev.webp';
import droneModelPrev4 from '@/assets/images/drone-model4-prev.webp';
import ViewedProductCard from '@/components/main/items/viewed-product/ViewedProductCard';
import './ProductView.scss';
import { IsRendered } from '@/composables/responsive/useResponsive';

const ProductView = () => {
  const productList = [
    {
      id: '1',
      img: droneModelPrev,
      discount: 17,
      name: 'Acer Aspire Drone',
      oldPrice: 120,
      collectionName: 'Canona',
    },
    {
      id: '2',
      img: droneModelPrev2,
      discount: 17,
      name: 'Acer Drone E15',
      oldPrice: 120,
      collectionName: 'Drona',
    },
    {
      id: '3',
      img: droneModelPrev3,
      discount: 17,
      name: 'Acer Drone E15',
      oldPrice: 120,
      collectionName: 'Oppla',
    },
    {
      id: '4',
      img: droneModelPrev4,
      discount: 33,
      name: 'Acer Drone E15',
      oldPrice: 120,
      collectionName: 'Canona',
    },
    {
      id: '5',
      img: droneModelPrev4,
      discount: 33,
      name: 'Acer Drone E15',
      oldPrice: 120,
      collectionName: 'Canona',
    },
  ];

  const itemsToRender = IsRendered(5);

  const [activeIndex, setActiveIndex] = useState(0);
  const [imgHover, setImgHover] = useState<boolean[]>(
    Array(productList.length).fill(false),
  );
  const [optionsHover, setOptionsHover] = useState<boolean[]>(
    Array(productList.length).fill(false),
  );

  const handlePrev = () => {
    setActiveIndex(
      (prevIndex) => (prevIndex - 1 + productList.length) % productList.length,
    );
  };

  const handleNext = () => {
    setActiveIndex((prevIndex) => (prevIndex + 1) % productList.length);
  };

  const handleImgHover = (index: number, isHovering: boolean) => {
    if (!optionsHover[index]) {
      setImgHover((prev) => {
        const newHoverState = [...prev];
        newHoverState[index] = isHovering;
        return newHoverState;
      });
    }
  };

  const handleOptionsHover = (index: number, isHovering: boolean) => {
    setOptionsHover((prev) => {
      const newHoverState = [...prev];
      newHoverState[index] = isHovering;
      return newHoverState;
    });
  };

  const getVisibleItems = () => {
    const itemsToShow = 4;
    return productList
      .slice(activeIndex, activeIndex + itemsToShow)
      .concat(
        productList.slice(
          0,
          Math.max(0, activeIndex + itemsToShow - productList.length),
        ),
      );
  };

  return (
    <div className="products-detail-1">
      <div className="products-detail-1__container">
        <h2>RECENTLY VIEWED PRODUCTS</h2>
        <div className="products-detail-1__wrapper">
          <div
            className="products-detail-1__inner"
            style={{
              transform: `translateX(-${activeIndex * (100 / 4)}%)`,
              transition: 'transform 0.5s ease',
              display: 'flex',
              width: `${(productList.length * 100) / 4}%`,
            }}
          >
            {getVisibleItems()
              .slice(0, itemsToRender)
              .map((product, index) => (
                <div key={product.id} className="products-detail-1__item">
                  <ViewedProductCard
                    img={product.img}
                    collectionName={product.collectionName}
                    productName={product.name}
                    oldPrice={product.oldPrice}
                    discount={product.discount}
                    isHover={imgHover[index]}
                    handleOptionsHoverTrue={() =>
                      handleOptionsHover(index, true)
                    }
                    handleOptionsHoverFalse={() =>
                      handleOptionsHover(index, false)
                    }
                    id={product.id}
                  />
                </div>
              ))}
            <Button className="carousel-control-prev-1" onClick={handlePrev}>
              &lt;
            </Button>
            <Button className="carousel-control-next-1" onClick={handleNext}>
              &gt;
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductView;
