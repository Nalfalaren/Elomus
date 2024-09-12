/* eslint-disable prettier/prettier */
import React from 'react';

import drone1 from '@/assets/images/drone-model1-prev.webp';
import drone2 from '@/assets/images/drone-model2-prev.webp';
import drone3 from '@/assets/images/drone-model3-prev.webp';
import drone4 from '@/assets/images/drone-model4-prev.webp';

import './ItemsDropdown3.scss';

const ItemsDrop3 = () => {
    const productsList = [
        {
            id: '1',
            productImage: drone1,
            productName: 'Acer Aspire Drone',
            newPrice: 100.0,
            oldPrice: 120.0,
            linkTo: '/collections',
        },
        {
            id: '2',
            productImage: drone2,
            productName: 'Acer Aspire Drone',
            newPrice: 100.0,
            oldPrice: 120.0,
            linkTo: '/collections',
        },
        {
            id: '3',
            productImage: drone3,
            productName: 'Acer Aspire Drone',
            newPrice: 100.0,
            oldPrice: 120.0,
            linkTo: '/collections',
        },
        {
            id: '4',
            productImage: drone4,
            productName: 'Acer Aspire Drone',
            newPrice: 100.0,
            oldPrice: 120.0,
            linkTo: '/collections',
        },
    ];
    return (<div className='product-list'>
        {productsList.map((product) => (
            <div>
                <div className='product-list__image'>
                    <img src={product.productImage} alt={product.id}></img>
                </div>
                <div className='product-list__info'>
                    <h3>{product.productName}</h3>
                    <p>
                    ${product.newPrice} <span className='product-list__info__old-price'> ${product.oldPrice}</span>
                    </p>
                </div>
            </div>
        ))}
    </div>);
};

export default ItemsDrop3;
