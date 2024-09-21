import React from 'react';
import '@/layouts';
import Cart from '@/components/main/cart/CartItem/Cart';
import Extra from '@/components/main/cart/Other/Extra';
import Total from '@/components/main/cart/Total/Total';
import ViewedProductCard from '@/components/main/items/viewed-product/ViewedProductCard';
import ProductView from '@/components/main/product-detail-layout/product-detail/viewed-products/ProductView';

const CartComponent = () => {
  return (
    <div className="layout__content__context__container">
      <Cart></Cart>
      <Extra></Extra>
      <Total></Total>
      <ProductView></ProductView>
    </div>
  );
};

export default CartComponent;
