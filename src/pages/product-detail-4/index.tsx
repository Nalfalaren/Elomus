import React from 'react';
import '@/layouts';
import Payment from '@/components/main/product-detail-layout/product-detail-4/payment/Payment';
import ProductView from '@/components/main/product-detail-layout/product-detail/viewed-products/ProductView';
import SimilarProducts from '@/components/main/product-detail-layout/product-detail/similar-product/SimilarProducts';
import Features from '@/components/main/product-detail-layout/product-detail-4/features/Features';

const ProductDetailComponent4 = () => {
  return (
    <div className="layout__content__context__container">
      <Payment></Payment>
      <Features></Features>
      <SimilarProducts></SimilarProducts>
      <ProductView></ProductView>
    </div>
  );
};

export default ProductDetailComponent4;
