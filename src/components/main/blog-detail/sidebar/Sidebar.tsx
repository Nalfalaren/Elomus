import React from 'react';
import { faMagnifyingGlass } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

import blog2 from '@/assets/images/post2.webp';
import blog3 from '@/assets/images/post3.jpg';
import blog1 from '@/assets/images/post4.webp';

import sidebarImage from '@/assets/images/shoes_advert3a.avif';
import { Link } from 'react-router-dom';

import './SidebarBlog.scss';
import { Form } from 'react-bootstrap';

const Sidebar = () => {
  const blogList = [
    {
      id: '1',
      img: blog1,
      title: 'The Ultimate Guide to Hair & Makeup in NYC SS24',
      date: 'Aug 12, 2018 by: m k',
    },
    {
      id: '2',
      img: blog2,
      title: 'The Ultimate Guide to Hair & Makeup in NYC SS24',
      date: 'Aug 12, 2018 by: m k',
    },
    {
      id: '3',
      img: blog3,
      title: 'The Ultimate Guide to Hair & Makeup in NYC SS24',
      date: 'Aug 12, 2018 by: m k',
    },
  ];
  return (
    <div className="blog-sidebar">
      <section className="blog-sidebar__block">
        <div className="blog-sidebar__block__input">
          <input type="text" placeholder="Search all articles..."></input>
          <FontAwesomeIcon
            icon={faMagnifyingGlass}
            className="blog-sidebar__block__input__icon"
          />
        </div>
        <hr></hr>
      </section>
      <section className="blog-sidebar__block">
        <h3>Recent Articles</h3>
        <div className="blog-sidebar__block__content">
          {blogList.map((blog) => (
            <div className="blog-sidebar__block__content__cover">
              <div className="blog-sidebar__block__content__cover__above">
                <div className="blog-sidebar__block__content__cover__above__img">
                  <img src={blog.img} alt={blog.id}></img>
                </div>
                <p>{blog.date}</p>
              </div>
              <p className="blog-sidebar__block__content__cover__title">
                {blog.title}
              </p>
              <hr></hr>
            </div>
          ))}
        </div>
      </section>
      <section className="blog-sidebar__block">
        <h3>Tag Cloud</h3>
        <div className="blog-sidebar__block__links">
          <Link to={`/tagged/blog`}>blog</Link>
          <Link to={`/tagged/elonus`}>elonus</Link>
          <Link to={`/tagged/shoes`}>shoes</Link>
        </div>
      </section>
      <section className="blog-sidebar__block">
        <img src={sidebarImage} alt="image1"></img>
      </section>
    </div>
  );
};

export default Sidebar;
