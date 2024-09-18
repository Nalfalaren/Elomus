import { useState } from 'react';

import './ProductList.scss';
import HighBreakpointSlider from './Item/HighBreakpointSlider';
import LowBreakpointSlider from './Item/LowBreakpointSlider';

function ProductList() {
  return (
    <div className="products-list">
      <div className="products-list__title">
        <p>Featured products</p>
        <h2>DRONE PRODUCTS</h2>
      </div>
      <HighBreakpointSlider />
      <hr></hr>
    </div>
  );
}

export default ProductList;
