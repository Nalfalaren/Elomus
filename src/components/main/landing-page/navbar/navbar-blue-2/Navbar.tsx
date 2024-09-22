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

import brand from '@/assets/images/brand-blue.png';

import './Navbar.scss';
import ItemsDropdown1 from '../../items/ItemsDropdown/1/ItemsDropdown';
import ItemsDropdown2 from '../../items/ItemsDropdown/2/ItemsDropdown2';
import ItemsDrop3 from '../../items/ItemsDropdown/items3/3blue2/ItemsDrop3';
import ItemsDropdown4 from '../../items/ItemsDropdown/4/ItemsDropdown4';
import ItemsDropdown5 from '../../items/ItemsDropdown/5/ItmesDropdown5';

import { useState } from 'react';
import { IsMobile } from '@/composables/responsive/isMobile';

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
    <div className="nav-blue-2">
      <div className="nav-blue-2__left">
        <Link to={'/'}>
          <img src={brand} alt="nav-blue-2__left__brand"></img>
        </Link>
      </div>
      <div className="nav-blue-2__middle">
        <FontAwesomeIcon
          icon={faBars}
          className="nav-blue-2__middle__bar"
          style={
            isClick
              ? { background: 'white', color: 'blue' }
              : { background: '', color: '' }
          }
          onClick={handleClick}
        />
        <ul className="nav-blue-2__middle__list">
          {navList.map((element) => (
            <li
              className="nav-blue-2__middle__list__element"
              key={element.linkTo}
            >
              <div className="nav-blue-2__middle__list__element__content">
                <div className="nav-blue-2__middle__list__element__content__link">
                  <Link
                    to={element.linkTo}
                    className="nav-blue-2__middle__list__element__content__link__1"
                  >
                    <span>{element.title}</span>
                  </Link>
                  {!IsMobile() ? (
                    <FontAwesomeIcon
                      icon={faChevronDown}
                      className="nav-blue-2__middle__list__element__content__link__icon--down"
                    />
                  ) : (
                    <FontAwesomeIcon
                      icon={faPlus}
                      className="nav-blue-2__middle__list__element__content__link__icon--plus"
                    />
                  )}
                </div>
                <div className="nav-blue-2__middle__list__element__content__sublink-blue2">
                  {element.content()}
                </div>
              </div>
            </li>
          ))}
        </ul>
      </div>
      <div className="nav-blue-2__right">
        <FontAwesomeIcon
          icon={faMagnifyingGlass}
          className="nav-blue-2__right__icon"
        />
        <FontAwesomeIcon
          icon={faCartPlus}
          className="nav-blue-2__right__icon"
        />
        <FontAwesomeIcon icon={faGear} className="nav-blue-2__right__icon" />
        <FontAwesomeIcon
          icon={faEarthAsia}
          className="nav-blue-2__right__icon"
        />
      </div>
    </div>
  );
};

export default Navbar;
