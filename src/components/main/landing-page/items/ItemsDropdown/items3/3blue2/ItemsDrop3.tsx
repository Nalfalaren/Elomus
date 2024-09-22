/* eslint-disable prettier/prettier */
import React from 'react';

import stroller1 from '@/assets/images/stroller1.webp';
import stroller2 from '@/assets/images/stroller2.webp';
import stroller3 from '@/assets/images/stroller3.webp';
import stroller4 from '@/assets/images/stroller4.webp';


import './ItemsDropdown3.scss';
import { Link } from 'react-router-dom';

const ItemsDrop3 = () => {
    const productsList = [
        {
            id: '1',
            productImage: stroller1,
            productName: 'CAM MOD By Kryptonite Vapor',
            newPrice: 200.0,
            oldPrice: 235.0,
            linkTo: '/products/cam-mod-by-kryptonite-vapor',
        },
        {
            id: '2',
            productImage: stroller2,
            productName: 'CLT4 RDA By Infinite Vape',
            newPrice: 80.00,
            oldPrice: 120.00,
            linkTo: '/products/clt4-rda-by-infinite-vape',
        },
        {
            id: '3',
            productImage: stroller3,
            productName: 'CAM MOD By Vapor Kryptonite',
            newPrice: 200.00,
            oldPrice: 235.00,
            linkTo: '/products/cam-mod-by-vapor-kryptonite',
        },
        {
            id: '4',
            productImage: stroller4,
            productName: 'MOD CAM By Kryptonite Vapor',
            newPrice: 200.00,
            oldPrice: 235.00,
            linkTo: '/products/mod-cam-by-kryptonite-vapor',
        },
    ];
    return (<div className='product-list-blue2'>
        {productsList.map((product) => (
            <Link to={product.linkTo} key={product.id}>
                <div className='product-list-blue2__image'>
                    <img src={product.productImage} alt={product.id}></img>
                </div>
                <div className='product-list-blue2__info'>
                    <h3>{product.productName}</h3>
                    <p>
                    ${product.newPrice.toFixed(2)} <span className='product-list-blue2__info__old-price'> ${product.oldPrice.toFixed(2)}</span>
                    </p>
                </div>
            </Link>
        ))}
    </div>);
};

export default ItemsDrop3;
