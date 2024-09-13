import ProductsList from '@/components/main/product-list-detail/products-list/ProductsList';

import React from 'react';
import '@/layouts';
import CategorySidebar from '@/components/main/product-list-detail/sidebar/items/web/CategorySidebar';

const ProductListComponent = () => {
  return (
    <div className="layout__content__context__container">
      <ProductsList></ProductsList>
    </div>
  );
};

export default ProductListComponent;
