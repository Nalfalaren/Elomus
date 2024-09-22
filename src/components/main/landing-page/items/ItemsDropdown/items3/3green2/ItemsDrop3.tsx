/* eslint-disable prettier/prettier */
import React from 'react';
import { Link } from 'react-router-dom';

import cream1 from '@/assets/images/cream1.webp';
import cream2 from '@/assets/images/cream2.webp';
import cream3 from '@/assets/images/cream3.jpg';
import cream4 from '@/assets/images/cream4.webp';

import './ItemsDropdown3.scss';

const ItemsDrop3 = () => {
    const productsList = [
        {
            id: '1',
            productImage: cream1,
            productName: 'Cano Cleansers',
            newPrice: 80,
            oldPrice: 120,
            linkTo: '/products/cano-cleansers',
        },
        {
            id: '2',
            productImage: cream2,
            productName: 'Cleansers Nano',
            newPrice: 80,
            oldPrice: 120,
            linkTo: '/products/cleansers-nano',
        },
        {
            id: '3',
            productImage: cream3,
            productName: 'Nano Cleansers',
            newPrice: 80,
            oldPrice: 120,
            linkTo: '/products/nano-cleansers',
        },
        {
            id: '4',
            productImage: cream4,
            productName: 'Herbal Makeup',
            newPrice: 80,
            oldPrice: 120,
            linkTo: '/products/herbal-makeup',
        },
    ];

    return (
        <div className='product-list-green-2'>
            {productsList.map((product) => (
                <Link to={product.linkTo} key={product.id}>
                    <div className='product-list-green-2__image'>
                        <img src={product.productImage} alt={product.productName} />
                    </div>
                    <div className='product-list-green-2__info'>
                        <h3>{product.productName}</h3>
                        <p>
                            ${product.newPrice.toFixed(2)} 
                            {product.oldPrice > 0 && (
                                <span className='product-list-green-2__info__old-price'> ${product.oldPrice.toFixed(2)}</span>
                            )}
                        </p>
                    </div>
                </Link>
            ))}
        </div>
    );
};

export default ItemsDrop3;
