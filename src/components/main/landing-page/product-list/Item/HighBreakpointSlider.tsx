import { useEffect, useState } from 'react';

import {
  faStar,
  faCircleInfo,
  faHeart,
  faEye,
} from '@fortawesome/free-solid-svg-icons';
import { Button } from 'react-bootstrap';

import droneModelAfter from '@/assets/images/drone-model1-after.webp';
import droneModelPrev from '@/assets/images/drone-model1-prev.webp';
import droneModelAfter2 from '@/assets/images/drone-model2-after.webp';
import droneModelPrev2 from '@/assets/images/drone-model2-prev.webp';
import droneModelPrev3 from '@/assets/images/drone-model3-prev.webp';
import droneModelAfter4 from '@/assets/images/drone-model4-after.webp';
import droneModelPrev4 from '@/assets/images/drone-model4-prev.webp';
import ProductCard from '@/components/main/items/ProductCard';
import '../ProductList.scss';
import { IsRendered } from '@/composables/responsive/useResponsive';

const HighBreakpointSlider = () => {
  const productList = [
    {
      id: '1',
      imgPrev: droneModelPrev,
      imgAfter: droneModelAfter,
      discount: 17,
      rates: [true, true, true, false, false],
      listColor: [
        droneModelPrev,
        droneModelPrev2,
        droneModelPrev3,
        droneModelPrev4,
      ],
      name: 'Acer Aspire Drone',
      oldPrice: 120,
      newPrice: 100,
    },
    {
      id: '2',
      imgPrev: droneModelPrev2,
      imgAfter: droneModelAfter2,
      discount: 17,
      rates: [true, true, true, false, false],
      listColor: [
        droneModelPrev,
        droneModelPrev2,
        droneModelPrev3,
        droneModelPrev4,
      ],
      name: 'Acer Drone E15',
      oldPrice: 120,
      newPrice: 100,
    },
    {
      id: '3',
      imgPrev: droneModelPrev3,
      imgAfter: droneModelAfter2,
      discount: 17,
      rates: [true, true, true, false, false],
      listColor: [
        droneModelPrev,
        droneModelPrev2,
        droneModelPrev3,
        droneModelPrev4,
      ],
      name: 'Acer Drone E15',
      oldPrice: 120,
      newPrice: 100,
    },
    {
      id: '4',
      imgPrev: droneModelPrev4,
      imgAfter: droneModelAfter4,
      discount: 33,
      rates: [true, true, true, false, false],
      listColor: ['blue', 'gray', 'yellow', 'black'],
      name: 'Acer Drone E15',
      oldPrice: 120,
      newPrice: 80,
    },
    {
      id: '5',
      imgPrev: droneModelPrev4,
      imgAfter: droneModelAfter4,
      discount: 33,
      rates: [true, true, true, false, false],
      listColor: [
        droneModelPrev,
        droneModelPrev2,
        droneModelPrev3,
        droneModelPrev4,
      ],
      name: 'Acer Drone E15',
      oldPrice: 120,
      newPrice: 80,
    },
    {
      id: '6',
      imgPrev: droneModelPrev4,
      imgAfter: droneModelAfter4,
      discount: 33,
      listColor: [
        droneModelPrev,
        droneModelPrev2,
        droneModelPrev3,
        droneModelPrev4,
      ],
      rates: [true, true, true, false, false],
      name: 'Acer Drone E15',
      oldPrice: 120,
      newPrice: 80,
    },
  ];

  const listIcon = [faCircleInfo, faHeart, faEye];

  const [activeIndex, setActiveIndex] = useState(0);
  const [imgHover, setImgHover] = useState<boolean[]>(
    Array(productList.length).fill(false),
  );
  const [optionsHover, setOptionsHover] = useState<boolean[]>(
    Array(productList.length).fill(false),
  );
  const totalItems = productList.length;
  const itemsToShow = IsRendered(6);

  const handlePrev = () => {
    setActiveIndex((prevIndex) => (prevIndex - 1 + totalItems) % totalItems);
  };

  const handleNext = () => {
    setActiveIndex((prevIndex) => (prevIndex + 1) % totalItems);
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

  const formatCurrency = (amount: number) => {
    return new Intl.NumberFormat('en-US', {
      style: 'currency',
      currency: 'USD',
    }).format(amount);
  };

  return (
    <div className="products-list">
      <div className="products-list__wrapper">
        <div
          className="products-list__inner"
          style={{
            transform: `translateX(-${activeIndex * (100 / itemsToShow)}%)`,
            width: `${(totalItems * 100) / 6}%`,
          }}
        >
          {productList.map((product, index) => (
            <div key={product.id} className="products-list__item">
              <ProductCard
                hoverImg={imgHover[index]}
                imgPrev={product.imgPrev}
                imgAfter={product.imgAfter}
                name={product.name}
                discount={product.discount}
                product={product}
                index={index}
                listIcon={listIcon}
                colorList={product.listColor}
                handleImgHoverTrue={() => handleImgHover(index, true)}
                handleImgHoverFalse={() => handleImgHover(index, false)}
                handleOptionsHoverTrue={() => handleOptionsHover(index, true)}
                handleOptionsHoverFalse={() => handleOptionsHover(index, false)}
                formatCurrency={formatCurrency}
              />
            </div>
          ))}
        </div>
      </div>
      <Button className="carousel-control-prev" onClick={handlePrev}>
        &lt;
      </Button>
      <Button className="carousel-control-next" onClick={handleNext}>
        &gt;
      </Button>
    </div>
  );
};

export default HighBreakpointSlider;
