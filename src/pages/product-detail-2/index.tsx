import React from 'react';
import '@/layouts';
import Payment from '@/components/main/product-detail-layout/product-detail-2/payment/Payment';
import Info from '@/components/main/product-detail-layout/product-detail-2/info/Info';
import ProductView from '@/components/main/product-detail-layout/product-detail/viewed-products/ProductView';
import SimilarProducts from '@/components/main/product-detail-layout/product-detail/similar-product/SimilarProducts';
import FAQ from '@/components/main/product-detail-layout/product-detail/faq/FAQ';

const ProductDetailComponent2 = () => {
  return (
    <div className="layout__content__context__container">
      <Payment></Payment>
      <Info></Info>
      <FAQ></FAQ>
      <SimilarProducts></SimilarProducts>
      <ProductView></ProductView>
    </div>
  );
};

export default ProductDetailComponent2;
