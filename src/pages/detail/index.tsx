import React from 'react';
import '@/layouts';
import Payment from '@/components/main/product-detail/payment/Payment';
import FAQ from '@/components/main/product-detail/faq/FAQ';
import SimilarProducts from '@/components/main/product-detail/similar-product/SimilarProducts';
import ProductView from '@/components/main/product-detail/viewed-products/ProductView';

const ProductDetailComponent = () => {
  return (
    <div className="layout__content__context__container">
      <Payment></Payment>
      <FAQ></FAQ>
      <SimilarProducts></SimilarProducts>
      <ProductView></ProductView>
    </div>
  );
};

export default ProductDetailComponent;
