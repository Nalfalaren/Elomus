import React from 'react';
import '@/layouts';
import Payment from '@/components/main/product-detail-layout/product-detail-6/payment/Payment';
import ProductView from '@/components/main/product-detail-layout/product-detail/viewed-products/ProductView';
import SimilarProducts from '@/components/main/product-detail-layout/product-detail/similar-product/SimilarProducts';
import Features from '@/components/main/product-detail-layout/product-detail-6/features/Features';
import Info from '@/components/main/product-detail-layout/product-detail-6/info/Info';

const ProductDetailComponent6 = () => {
  return (
    <div className="layout__content__context__container">
      <Payment></Payment>
      <Info></Info>
    </div>
  );
};

export default ProductDetailComponent6;
