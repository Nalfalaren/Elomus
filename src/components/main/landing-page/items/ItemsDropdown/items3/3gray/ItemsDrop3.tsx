/* eslint-disable prettier/prettier */
import React from 'react';

import scotter1 from '@/assets/images/scooter1.webp';
import scotter2 from '@/assets/images/scooter2.webp';
import scotter3 from '@/assets/images/scooter3.webp';
import scotter4 from '@/assets/images/scooter4.webp';

import './ItemsDropdown3.scss';
import { Link } from 'react-router-dom';

const ItemsDrop3 = () => {
    const productsList = [
        {
            id: '1',
            productImage: scotter1,
            productName: 'Aspire VX 15 Scooty',
            newPrice: 95.0,
            oldPrice: 120.0,
            linkTo: '/products/aspire-vx-15-scooty',
        },
        {
            id: '2',
            productImage: scotter2,
            productName: 'Bidx R240HY Scooty',
            newPrice: 95.0,
            oldPrice: 120.0,
            linkTo: '/products/bidx-r240HY-scooty',
        },
        {
            id: '3',
            productImage: scotter3,
            productName: 'Kid Scooty',
            newPrice: 95.0,
            oldPrice: 120.0,
            linkTo: '/products/kid-scooty',
        },
        {
            id: '4',
            productImage: scotter4,
            productName: 'K20 Scooty',
            newPrice: 95.0,
            oldPrice: 120.0,
            linkTo: '/products/k20-scooty',
        },
    ];
    return (<div className='product-list-gray'>
        {productsList.map((product) => (
            <Link to={product.linkTo} key={product.id}>
                <div className='product-list-gray__image'>
                    <img src={product.productImage} alt={product.id}></img>
                </div>
                <div className='product-list-gray__info'>
                    <h3>{product.productName}</h3>
                    <p>
                    ${product.newPrice.toFixed(2)} <span className='product-list-gray__info__old-price'> ${product.oldPrice.toFixed(2)}</span>
                    </p>
                </div>
            </Link>
        ))}
    </div>);
};

export default ItemsDrop3;
