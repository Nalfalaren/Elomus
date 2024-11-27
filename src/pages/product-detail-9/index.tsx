import React from 'react';
import '@/layouts';
import Payment from '@/components/main/product-detail-layout/product-detail-9/payment/Payment';
import Info from '@/components/main/product-detail-layout/product-detail-9/info/Info';
import ProductView from '@/components/main/product-detail-layout/product-detail/viewed-products/ProductView';
import SimilarProducts from '@/components/main/product-detail-layout/product-detail/similar-product/SimilarProducts';
import FAQ from '@/components/main/product-detail-layout/product-detail/faq/FAQ';

const ProductDetailComponent9 = () => {
  return (
    <div className="layout__content__context__container">
      <Payment></Payment>
      <Info></Info>
      <SimilarProducts></SimilarProducts>
      <ProductView></ProductView>
    </div>
  );
};

export default ProductDetailComponent9;