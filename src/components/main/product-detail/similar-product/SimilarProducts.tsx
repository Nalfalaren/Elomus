import React, { useState } from 'react';

import droneModelAfter2 from '@/assets/images/drone-model2-after.webp';
import droneModelPrev2 from '@/assets/images/drone-model2-prev.webp';
import droneModelPrev3 from '@/assets/images/drone-model3-prev.webp';
import droneModelAfter4 from '@/assets/images/drone-model4-after.webp';
import droneModelPrev4 from '@/assets/images/drone-model4-prev.webp';
import shaverModelAfter1 from '@/assets/images/shaver-model1-after.webp';
import shaverModelBefore1 from '@/assets/images/shaver-model1-before.webp';
import ProductCard from '../../items/ProductCard';
import {
  faCircleInfo,
  faEye,
  faHeart,
} from '@fortawesome/free-solid-svg-icons';
import '../../landing-page/product-list/ProductList.scss';
import './SimilarProduct.scss';
const SimilarProducts = () => {
  const similarList = [
    {
      id: '1',
      imgPrev: shaverModelBefore1,
      imgAfter: shaverModelAfter1,
      discount: 17,
      rates: [true, true, true, false, false],
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
      name: 'Acer Drone E15',
      oldPrice: 120,
      newPrice: 80,
    },
  ];

  const listIcon = [faCircleInfo, faHeart, faEye];

  const itemsRender = window.innerWidth < 998 ? 1 : 4;

  const [imgHover, setImgHover] = useState<boolean[]>(
    Array(similarList.length).fill(false),
  );
  const [optionsHover, setOptionsHover] = useState<boolean[]>(
    Array(similarList.length).fill(false),
  );

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
      <h2>YOU MAY ALSO LIKE</h2>
      <div className="products-list__result">
        {similarList.splice(0, itemsRender).map((product, index) => (
          <div>
            <ProductCard
              hoverImg={imgHover[index]}
              imgPrev={product.imgPrev}
              imgAfter={product.imgAfter}
              name={product.name}
              discount={product.discount}
              product={product}
              index={index}
              listIcon={listIcon}
              handleImgHoverTrue={() => handleImgHover(index, true)}
              handleImgHoverFalse={() => handleImgHover(index, false)}
              handleOptionsHoverTrue={() => handleOptionsHover(index, true)}
              handleOptionsHoverFalse={() => handleOptionsHover(index, false)}
              formatCurrency={formatCurrency}
              className="products__result__card"
            />
          </div>
        ))}
      </div>
    </div>
  );
};

export default SimilarProducts;
