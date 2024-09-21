import React from 'react';
import '@/layouts';
import Payment from '@/components/main/product-detail-layout/product-detail/payment/Payment';
import FAQ from '@/components/main/product-detail-layout/product-detail/faq/FAQ';
import SimilarProducts from '@/components/main/product-detail-layout/product-detail/similar-product/SimilarProducts';
import ProductView from '@/components/main/product-detail-layout/product-detail/viewed-products/ProductView';

const ProductDetailComponent = () => {
  return (
    <div className="layout__content__colored__container">
      <Payment></Payment>
      <FAQ></FAQ>
      <SimilarProducts></SimilarProducts>
      <ProductView></ProductView>
    </div>
  );
};

export default ProductDetailComponent;
