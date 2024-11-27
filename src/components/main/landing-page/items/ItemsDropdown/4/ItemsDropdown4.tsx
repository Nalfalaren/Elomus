import { Link } from 'react-router-dom';

import './ItemsDropdown4.scss';

const DropdownList = [
  { name: 'PURCHASING DRONE', linkTo: '/collections/drone' },
  {
    name: 'HIRING DRONE CONCERT',
    linkTo: 'hiring/subscription',
  },
];

const ItemsDropdown4 = () => {
  return (
    <div className="nav__middle__element">
      {DropdownList.map((element) => (
        <div key={element.name}>
          <Link to={`${element.linkTo}`}>{element.name}</Link>
        </div>
      ))}
    </div>
  );
};

export default ItemsDropdown4;
