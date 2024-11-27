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

import brand from '@/assets/images/brand_4.webp';

import './Navbar.scss';
import { IsMobile } from '@/composables/responsive/isMobile';

import ItemsDropdown1 from '../../items/ItemsDropdown/1/ItemsDropdown';
import ItemsDropdown2 from '../../items/ItemsDropdown/2/ItemsDropdown2';
import ItemsDropdown4 from '../../items/ItemsDropdown/4/ItemsDropdown4';
import ItemsDropdown5 from '../../items/ItemsDropdown/5/ItmesDropdown5';
import ItemsDrop3 from '../../items/ItemsDropdown/items3/3red/ItemsDrop3';

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
    if (IsMobile()) {
      setIsClick((prev) => !prev);
    } else setIsClick(true);
  };

  return (
    <div className="nav-red">
      <div className="nav-red__left">
        <Link to={'/'}>
          <img src={brand} alt="nav-red__left__brand"></img>
        </Link>
      </div>
      <div className="nav-red__middle">
        <FontAwesomeIcon
          icon={faBars}
          className="nav-red__middle__bar"
          style={
            isClick
              ? { background: 'white', color: 'red' }
              : { background: '', color: '' }
          }
          onClick={handleClick}
        />
        <ul className="nav-red__middle__list">
          {navList.map((element) => (
            <li className="nav-red__middle__list__element" key={element.linkTo}>
              <div className="nav-red__middle__list__element__content">
                <div className="nav-red__middle__list__element__content__link">
                  <Link
                    to={element.linkTo}
                    className="nav-red__middle__list__element__content__link__1"
                  >
                    <span>{element.title}</span>
                  </Link>
                  {!IsMobile() ? (
                    <FontAwesomeIcon
                      icon={faChevronDown}
                      className="nav-red__middle__list__element__content__link__icon--down"
                    />
                  ) : (
                    <FontAwesomeIcon
                      icon={faPlus}
                      className="nav-red__middle__list__element__content__link__icon--plus"
                    />
                  )}
                </div>
                <div className="nav-red__middle__list__element__content__sublink-red">
                  {element.content()}
                </div>
              </div>
            </li>
          ))}
        </ul>
      </div>
      <div className="nav-red__right">
        <FontAwesomeIcon
          icon={faMagnifyingGlass}
          className="nav-red__right__icon"
        />
        <FontAwesomeIcon icon={faCartPlus} className="nav-red__right__icon" />
        <FontAwesomeIcon icon={faGear} className="nav-red__right__icon" />
        <FontAwesomeIcon icon={faEarthAsia} className="nav-red__right__icon" />
      </div>
    </div>
  );
};

export default Navbar;