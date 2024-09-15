import React from 'react';
import '@/layouts';
import Cart from '@/components/main/cart/CartItem/Cart';
import Extra from '@/components/main/cart/Other/Extra';
import Total from '@/components/main/cart/Total/Total';

const CartComponent = () => {
  return (
    <div className="layout__content__context__container">
      <Cart></Cart>
      <Extra></Extra>
      <Total></Total>
    </div>
  );
};

export default CartComponent;
