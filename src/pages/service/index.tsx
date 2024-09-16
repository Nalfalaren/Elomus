import React from 'react';
import '@/layouts';
import Payment from '@/components/main/product-detail-layout/product-detail/payment/Payment';
import FAQ from '@/components/main/product-detail-layout/product-detail/faq/FAQ';
import SimilarProducts from '@/components/main/product-detail-layout/product-detail/similar-product/SimilarProducts';
import ProductView from '@/components/main/product-detail-layout/product-detail/viewed-products/ProductView';
import Service from '@/components/main/service/Service';

const ProductDetailComponent = () => {
  return (
    <div className="layout__content__context__container">
        <Service></Service>
    </div>
  );
};

export default ProductDetailComponent;
