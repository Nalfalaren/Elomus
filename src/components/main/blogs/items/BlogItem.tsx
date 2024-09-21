import React from 'react';

import { Card } from 'react-bootstrap';
import { Link } from 'react-router-dom';

import Button from '@/pages/button';
import './BlogItem.scss';

interface BlogItem {
  imgName: string;
  id: string;
  title: string;
  date: string;
  content: string;
}
const BlogItem = ({ imgName, id, title, date, content }: BlogItem) => {
  const newTitle = encodeURIComponent(title).replace(/%20/g, '-');
  return (
    <div>
      <Card className="blog">
        <Card.Body className="blog__body">
          <div className="blog__body__img">
            <Link to={`/blogs/news/${newTitle}`}>
              <img src={imgName} alt={id}></img>
            </Link>
          </div>
          <div className="blog__body__content">
            <h3>{title}</h3>
            <p>{date}</p>
            <p>{content}</p>
            <Link
              to={`/blogs/news/${newTitle}`}
              className="blog__body__content__link"
            >
              Read more
            </Link>
          </div>
        </Card.Body>
      </Card>
    </div>
  );
};

export default BlogItem;
