import React, { useEffect, useState } from 'react';

import Footer1 from '@/assets/images/footer-pic-1.jpg';
import Footer2 from '@/assets/images/footer-pic-2.jpg';
import Footer3 from '@/assets/images/footer-pic-3.jpg';
import Footer4 from '@/assets/images/footer-pic-4.jpg';
import Footer5 from '@/assets/images/footer-pic-5.jpg';
import Footer6 from '@/assets/images/footer-pic-6.jpg';

import './Footer.scss';

const Footer = () => {
  const footerList = [
    {
      id: '1',
      title: 'Contact Us',
      content: [
        'We are a team of designers and developers who creates high quality premium Shopify themes.',
        'No 40 Baria Sreet 133/2, NewYork, USA.',
        '(012) 800 456 789',
        'support@masstechnologist',
      ],
    },
    {
      id: '2',
      title: 'Main menu',
      content: [
        'Home',
        'Shop',
        'Top Products',
        'Product Pages',
        'Pages / Layouts',
      ],
    },
    {
      id: '3',
      title: 'Main menu',
      content: [
        'Home',
        'Shop',
        'Top Products',
        'Product Pages',
        'Pages / Layouts',
      ],
    },
  ];

  const listImages = [Footer1, Footer2, Footer3, Footer4, Footer5, Footer6];

  return (
    <div className="footer">
      <div className="footer__info">
        {footerList.map((footer) =>
          !(footer.id === '2' || footer.id === '3') ||
          window.innerWidth > 992 ? (
            <div key={footer.id} className="footer__info__block">
              <h3>{footer.title}</h3>
              <ul>
                {footer.content.map((element, index) => (
                  <li key={index}>{element}</li>
                ))}
              </ul>
            </div>
          ) : (
            <div key={footer.id} className="footer__info__dropdown">
              <select>
                <option value={'Main menu'} selected>
                  MAIN MENU
                </option>
                {footer.content.map((element, index) => (
                  <option value={element} key={index}>
                    {element}
                  </option>
                ))}
              </select>
            </div>
          ),
        )}
      </div>
      <div className="footer__img">
        {listImages.map((image) => (
          <div>
            <img src={image} alt={image}></img>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Footer;
