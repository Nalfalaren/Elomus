/* eslint-disable prettier/prettier */
import React from 'react';
import { Link } from 'react-router-dom';

import bottle1 from '@/assets/images/bottle1.webp';
import bottle2 from '@/assets/images/bottle2.webp';
import bottle3 from '@/assets/images/bottle3.webp';
import bottle4 from '@/assets/images/bottle4.webp';

import './ItemsDropdown3.scss';

const ItemsDrop3 = () => {
    const productsList = [
        {
            id: '1',
            productImage: bottle1,
            productName: 'Health & High Strength Energy Drink',
            newPrice: 5,
            oldPrice: 0,
            linkTo: '/products/health-high-strength-energy-drink',
        },
        {
            id: '2',
            productImage: bottle2,
            productName: 'Strength & Health Energy Drink',
            newPrice: 5,
            oldPrice: 0,
            linkTo: '/products/strength-health-energy-drink',
        },
        {
            id: '3',
            productImage: bottle3,
            productName: 'High Strength Health Energy Drink',
            newPrice: 5,
            oldPrice: 0,
            linkTo: '/products/high-strength-health-energy-drink',
        },
        {
            id: '4',
            productImage: bottle4,
            productName: 'Drink de Energy Health & Strength',
            newPrice: 5,
            oldPrice: 0,
            linkTo: '/products/drink-de-energy-health-strength',
        },
    ];

    return (
        <div className='product-list-red'>
            {productsList.map((product) => (
                <Link to={product.linkTo} key={product.id}>
                    <div className='product-list-red__image'>
                        <img src={product.productImage} alt={product.productName} />
                    </div>
                    <div className='product-list-red__info'>
                        <h3>{product.productName}</h3>
                        <p>
                            ${product.newPrice.toFixed(2)} 
                            {product.oldPrice > 0 && (
                                <span className='product-list-red__info__old-price'> ${product.oldPrice.toFixed(2)}</span>
                            )}
                        </p>
                    </div>
                </Link>
            ))}
        </div>
    );
};

export default ItemsDrop3;
