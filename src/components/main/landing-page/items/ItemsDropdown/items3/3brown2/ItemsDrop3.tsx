/* eslint-disable prettier/prettier */
import React from 'react';
import { Link } from 'react-router-dom';

import handbag1 from '@/assets/images/handbag1.webp';
import handbag2 from '@/assets/images/handbag2.webp';
import handbag3 from '@/assets/images/handbag3.webp';
import handbag4 from '@/assets/images/handbag4.webp';

import './ItemsDropdown3.scss';

const ItemsDrop3 = () => {
    const productsList = [
        {
            id: '1',
            productImage: handbag1,
            productName: 'Women Shoulder Tote Bags Purses and Handbags',
            newPrice: 29,
            oldPrice: 199,
            linkTo: '/products/women-shoulder-tote-bags-purses-and-handbags',
        },
        {
            id: '2',
            productImage: handbag2,
            productName: 'Handbags Tote Bags Purses for Women Shoulder',
            newPrice: 29,
            oldPrice: 199,
            linkTo: '/products/handbags-tote-bags-purses-for-women-shoulder',
        },
        {
            id: '3',
            productImage: handbag3,
            productName: 'Purses Handbags Tote Bags for Women Shoulder',
            newPrice: 29,
            oldPrice: 199,
            linkTo: '/products/purses-handbags-tote-bags-for-women-shoulder',
        },
        {
            id: '4',
            productImage: handbag4,
            productName: 'Women Shoulder Purses Handbags and Tote Bags',
            newPrice: 29,
            oldPrice: 199,
            linkTo: '/products/women-shoulder-purses-handbags-and-tote-bags',
        },
    ];

    return (
        <div className='product-list-brown-2'>
            {productsList.map((product) => (
                <Link to={product.linkTo} key={product.id}>
                    <div className='product-list-brown-2__image'>
                        <img src={product.productImage} alt={product.productName} />
                    </div>
                    <div className='product-list-brown-2__info'>
                        <h3>{product.productName}</h3>
                        <p>
                            ${product.newPrice.toFixed(2)} 
                            {product.oldPrice > 0 && (
                                <span className='product-list-brown-2__info__old-price'> ${product.oldPrice.toFixed(2)}</span>
                            )}
                        </p>
                    </div>
                </Link>
            ))}
        </div>
    );
};

export default ItemsDrop3;
