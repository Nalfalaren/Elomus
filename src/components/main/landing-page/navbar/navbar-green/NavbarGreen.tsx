import {
  faMagnifyingGlass,
  faCartPlus,
  faGear,
  faEarthAsia,
  faChevronDown,
  faBars,
  faPlus,
} from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { Link } from 'react-router-dom';

import brand from '@/assets/images/logo_green.webp';


import './navbar.scss';
import ItemsDropdown1 from '../../items/ItemsDropdown/1/ItemsDropdown';
import ItemsDropdown2 from '../../items/ItemsDropdown/2/ItemsDropdown2';
import ItemsDrop3 from '../../items/ItemsDropdown/3/ItemsDrop3';
import ItemsDropdown4 from '../../items/ItemsDropdown/4/ItemsDropdown4';
import ItemsDropdown5 from '../../items/ItemsDropdown/5/ItmesDropdown5';

import { useState } from 'react';

const Navbar = () => {
  const navList = [
    {
      title: 'Home',
      content: ItemsDropdown1,
      linkTo: '/',
    },
    {
      title: 'Shop',
      content: ItemsDropdown2,
      linkTo: '/collections',
    },
    {
      title: 'Top Products',
      content: ItemsDrop3,
      linkTo: '/collections/:name',
    },
    {
      title: 'Product Pages',
      content: ItemsDropdown4,
      linkTo: '/product/:name',
    },
    {
      title: 'Pages / Layouts',
      content: ItemsDropdown5,
      linkTo: '/pages/contact-us',
    },
  ];

  const [isClick, setIsClick] = useState(false);

  const handleClick = () => {
    if (window.innerWidth < 992) {
      setIsClick((prev) => !prev);
    } else setIsClick(true);
  };

  return (
    <div className="nav-green">
      <div className="nav-green__left">
        <Link to={'/'}>
          <img src={brand} alt="nav-green__left__brand"></img>
        </Link>
      </div>
      <div className="nav-green__middle">
        <FontAwesomeIcon
          icon={faBars}
          className="nav-green__middle__bar"
          style={
            isClick
              ? { background: 'white', color: 'blue' }
              : { background: '', color: '' }
          }
          onClick={handleClick}
        />
        <ul className="nav-green__middle__list">
          {navList.map((element) => (
            <li
              className="nav-green__middle__list__element"
              key={element.linkTo}
            >
              <div className="nav-green__middle__list__element__content">
                <div className="nav-green__middle__list__element__content__link">
                  <Link
                    to={element.linkTo}
                    className="nav-green__middle__list__element__content__link__1"
                  >
                    {element.title}
                  </Link>
                  {window.innerWidth > 992 ? (
                    <FontAwesomeIcon
                      icon={faChevronDown}
                      className="nav-green__middle__list__element__content__link__icon--down"
                    />
                  ) : (
                    <FontAwesomeIcon
                      icon={faPlus}
                      className="nav-green__middle__list__element__content__link__icon--plus"
                    />
                  )}
                </div>
                <div className="nav-green__middle__list__element__content__sublink">
                  {element.content()}
                </div>
              </div>
            </li>
          ))}
        </ul>
      </div>
      <div className="nav-green__right">
        <FontAwesomeIcon
          icon={faMagnifyingGlass}
          className="nav-green__right__icon"
        />
        <FontAwesomeIcon icon={faCartPlus} className="nav-green__right__icon" />
        <FontAwesomeIcon icon={faGear} className="nav-green__right__icon" />
        <FontAwesomeIcon
          icon={faEarthAsia}
          className="nav-green__right__icon"
        />
      </div>
    </div>
  );
};

export default Navbar;