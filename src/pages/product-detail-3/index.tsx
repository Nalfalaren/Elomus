import React from 'react';
import '@/layouts';
import Payment from '@/components/main/product-detail-layout/product-detail-3/payment/Payment';
import ProductView from '@/components/main/product-detail-layout/product-detail/viewed-products/ProductView';
import SimilarProducts from '@/components/main/product-detail-layout/product-detail/similar-product/SimilarProducts';
import FAQ from '@/components/main/product-detail-layout/product-detail/faq/FAQ';
import Features from '@/components/main/product-detail-layout/product-detail-4/features/Features';

const ProductDetailComponent3 = () => {
  return (
    <div className="layout__content__context__container">
      <Payment></Payment>
      <Features></Features>
      <SimilarProducts></SimilarProducts>
    </div>
  );
};

export default ProductDetailComponent3;
