/* eslint-disable prettier/prettier */
import React from 'react';

import watch1 from '@/assets/images/watch1.webp';
import watch2 from '@/assets/images/watch2.webp';
import watch3 from '@/assets/images/watch3.webp';
import watch4 from '@/assets/images/watch4.webp';

import './ItemsDropdown3.scss';
import { Link } from 'react-router-dom';

const ItemsDrop3 = () => {
    const productsList = [
        {
            id: '1',
            productImage: watch1,
            productName: '521 Tab By Geek Vape',
            newPrice: 80.0,
            oldPrice: 120.0,
            linkTo: '/products/521-tab-by-geek-vape',
        },
        {
            id: '2',
            productImage: watch2,
            productName: 'Bag V2 Vapor By Advken',
            newPrice: 129.00,
            oldPrice: 149.00,
            linkTo: '/products/driptip-kryptonite',
        },
        {
            id: '3',
            productImage: watch3,
            productName: 'Coil Master Ohm Tool',
            newPrice: 150.00,
            oldPrice: 199.00,
            linkTo: '/products/driptip-krptonite',
        },
        {
            id: '4',
            productImage: watch4,
            productName: 'driptip-krptonite',
            newPrice: 80.0,
            oldPrice: 120.0,
            linkTo: '/products/driptip-krptonite',
        },
    ];
    return (<div className='product-list-blue'>
        {productsList.map((product) => (
            <Link to={product.linkTo} key={product.id}>
                <div className='product-list-blue__image'>
                    <img src={product.productImage} alt={product.id}></img>
                </div>
                <div className='product-list-blue__info'>
                    <h3>{product.productName}</h3>
                    <p>
                    ${product.newPrice.toFixed(2)} <span className='product-list-blue__info__old-price'> ${product.oldPrice.toFixed(2)}</span>
                    </p>
                </div>
            </Link>
        ))}
    </div>);
};

export default ItemsDrop3;
