/* eslint-disable prettier/prettier */
import React from 'react';

import blender1 from '@/assets/images/blender1.webp';
import blender2 from '@/assets/images/blender2.webp';
import blender3 from '@/assets/images/blender3.webp';
import blender4 from '@/assets/images/blender4.webp';

import './ItemsDropdown3.scss';
import { Link } from 'react-router-dom';

const ItemsDrop3 = () => {
    const productsList = [
        {
            id: '1',
            productImage: blender1,
            productName: '60 oz 12-Cup Brewer CE251 Coffee Maker',
            newPrice: 59.0,
            oldPrice: 79.0,
            linkTo: '/products/60 oz 12-Cup Brewer CE251 Coffee Maker',
        },
        {
            id: '2',
            productImage: blender2,
            productName: 'Brewer CE251 60 oz 12-Cup Coffee Maker',
            newPrice: 69.0,
            oldPrice: 79.0,
            linkTo: '/products/brewer-ce251-60-oz-12-cup-coffee-maker-1',
        },
        {
            id: '3',
            productImage: blender3,
            productName: '60 oz 12-Cup Coffee Maker Brewer CE251',
            newPrice: 95.0,
            oldPrice: 120.0,
            linkTo: '/products/60-oz-12-cup-coffee-maker-brewer-ce251',
        },
        {
            id: '4',
            productImage: blender4,
            productName: '12-Cup Brewer CE251 Coffee Maker, 60 oz',
            newPrice: 59.0,
            oldPrice: 79.0,
            linkTo: '/products/12-cup-brewer-ce251-coffee-maker-60-oz',
        },
    ];
    return (<div className='product-list-yellow'>
        {productsList.map((product) => (
            <Link to={product.linkTo} key={product.id}>
                <div className='product-list-yellow__image'>
                    <img src={product.productImage} alt={product.id}></img>
                </div>
                <div className='product-list-yellow__info'>
                    <h3>{product.productName}</h3>
                    <p>
                    ${product.newPrice.toFixed(2)} <span className='product-list-yellow__info__old-price'> ${product.oldPrice.toFixed(2)}</span>
                    </p>
                </div>
            </Link>
        ))}
    </div>);
};

export default ItemsDrop3;
