import { useEffect, useState } from 'react';

import { Link, useLocation } from 'react-router-dom';

const menu = [
  {
    key: '1',
    label: 'Button',
    icon: '',
    path: '/button',
  },
  {
    key: '2',
    label: 'Input',
    icon: '',
    path: '/input',
  },
  {
    key: '3',
    label: 'Radio',
    icon: '',
    path: '/radio',
  },
  {
    key: '4',
    label: 'Textarea',
    icon: '',
    path: '/textarea',
  },
  {
    key: '6',
    label: 'Tag',
    icon: '',
    path: '/tag',
  },
];

const Sidebar = () => {
  const location = useLocation();
  const { pathname } = location;
  const pathActive = `/${pathname.split('/')?.[1]}` ?? menu[0].path;
  const [activeKey, setActiveKey] = useState<string>(pathActive);

  useEffect(() => {
    menu.forEach((item: any) => {
      if (item?.path === pathActive) {
        setActiveKey(item.path);
      }
    });
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [pathActive, JSON.stringify(menu)]);

  return (
    <div className="sidebar">
      <Link to={'/'} className="logo">
        Logo Company
      </Link>
      <div className="sidebar__menu">
        {menu?.map((item) => {
          return (
            <Link
              to={item.path}
              className={`sidebar__menu__item ${activeKey === item.path ? 'active' : ''}`}
              key={item.key}
            >
              <div className="item-content">
                {item.icon && <span className="item-icon">{item.icon}</span>}
                <span className="item-label">{item.label}</span>
              </div>
            </Link>
          );
        })}
      </div>
    </div>
  );
};
export default Sidebar;
