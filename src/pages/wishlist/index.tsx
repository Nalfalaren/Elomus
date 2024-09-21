import React from 'react';
import '@/layouts';
import Wishlist from '@/components/main/wishlist/cart/Wishlist';
import ProductView from '@/components/main/product-detail-layout/product-detail/viewed-products/ProductView';

const WishlistComponent = () => {
  return (
    <div className="layout__content__context__container">
      <Wishlist></Wishlist>
      <ProductView></ProductView>
    </div>
  );
};

export default WishlistComponent;
