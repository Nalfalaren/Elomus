/* eslint-disable prettier/prettier */
import React from 'react';

import bike1 from '@/assets/images/bike1.webp';
import bike2 from '@/assets/images/bike2.webp';
import bike3 from '@/assets/images/bike3.webp';
import bike4 from '@/assets/images/bike4.webp';

import './ItemsDropdown3.scss';
import { Link } from 'react-router-dom';

const ItemsDrop3 = () => {
    const productsList = [
        {
            id: '1',
            productImage: bike1,
            productName: '27T Road Bike Thin Tyre',
            newPrice: 159.0,
            oldPrice: 199.0,
            linkTo: '/products/27t-road-bike-thin-tyre',
        },
        {
            id: '2',
            productImage: bike2,
            productName: 'Mountain Bike Fat Tyre 26T',
            newPrice: 159.0,
            oldPrice: 199.0,
            linkTo: '/products/mountain-bike-fat-tyre-26t',
        },
        {
            id: '3',
            productImage: bike3,
            productName: 'Fat Tyre 26T Mountain Bike',
            newPrice: 159.0,
            oldPrice: 199.0,
            linkTo: '/products/fat-tyre-26t-mountain-bike',
        },
        {
            id: '4',
            productImage: bike4,
            productName: '26T Fat Tyre Mountain Bike',
            newPrice: 139.0,
            oldPrice: 159.0,
            linkTo: '/products/26t-fat-tyre-mountain-bike',
        },
    ];
    return (<div className='product-list-green'>
        {productsList.map((product) => (
            <Link to={product.linkTo} key={product.id}>
                <div className='product-list-green__image'>
                    <img src={product.productImage} alt={product.id}></img>
                </div>
                <div className='product-list-green__info'>
                    <h3>{product.productName}</h3>
                    <p>
                    ${product.newPrice?.toFixed(2)} <span className='product-list-green__info__old-price'> ${product.oldPrice.toFixed(2)}</span>
                    </p>
                </div>
            </Link>
        ))}
    </div>);
};

export default ItemsDrop3;
