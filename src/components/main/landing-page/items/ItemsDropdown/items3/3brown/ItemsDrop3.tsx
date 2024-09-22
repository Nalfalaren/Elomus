/* eslint-disable prettier/prettier */
import React from 'react';
import { Link } from 'react-router-dom';

import ring1 from '@/assets/images/rin1.webp';
import ring2 from '@/assets/images/ring2.webp';
import ring3 from '@/assets/images/ring3.webp';
import ring4 from '@/assets/images/ring4.webp';

import './ItemsDropdown3.scss';

const ItemsDrop3 = () => {
    const productsList = [
        {
            id: '1',
            productImage: ring1,
            productName: 'Engagement Wedding Gold Earrings Jewellery',
            newPrice: 279,
            oldPrice: 299,
            linkTo: '/products/engagement-wedding-gold-earrings-jewellery',
        },
        {
            id: '2',
            productImage: ring2,
            productName: 'Wedding Engagement Cubic Silver Band Ring',
            newPrice: 249,
            oldPrice: 299,
            linkTo: '/products/wedding-engagement-cubic-silver-band-ring',
        },
        {
            id: '3',
            productImage: ring3,
            productName: 'Engagement Wedding Cubic Silver Band Ring',
            newPrice: 249,
            oldPrice: 299,
            linkTo: '/products/engagement-wedding-cubic-silver-band-ring',
        },
        {
            id: '4',
            productImage: ring4,
            productName: 'Drink de Energy Health & Strength',
            newPrice: 249,
            oldPrice: 299,
            linkTo: '/products/clip-jewellery-for-wedding-engagement',
        },
    ];

    return (
        <div className='product-list-brown'>
            {productsList.map((product) => (
                <Link to={product.linkTo} key={product.id}>
                    <div className='product-list-brown__image'>
                        <img src={product.productImage} alt={product.productName} />
                    </div>
                    <div className='product-list-brown__info'>
                        <h3>{product.productName}</h3>
                        <p>
                            ${product.newPrice.toFixed(2)} 
                            {product.oldPrice > 0 && (
                                <span className='product-list-brown__info__old-price'> ${product.oldPrice.toFixed(2)}</span>
                            )}
                        </p>
                    </div>
                </Link>
            ))}
        </div>
    );
};

export default ItemsDrop3;
