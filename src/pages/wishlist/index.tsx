import React from 'react';
import '@/layouts';
import Wishlist from '@/components/main/wishlist/cart/Wishlist';

const WishlistComponent = () => {
  return (
    <div className="layout__content__context__container">
      <Wishlist></Wishlist>
    </div>
  );
};

export default WishlistComponent;
