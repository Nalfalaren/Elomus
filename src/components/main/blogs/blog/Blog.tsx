import React from 'react';
import blog1 from '@/assets/images/post4.webp';
import blog2 from '@/assets/images/post2.webp';
import blog3 from '@/assets/images/post3.jpg';
import blog4 from '@/assets/images/post1.webp';
import BlogItem from '../items/BlogItem';
import './Blog.scss';

const Blog = () => {
  const blogList = [
    {
      img: blog1,
      title: 'The Ultimate Guide to Hair & Makeup in NYC SS24',
      date: 'Aug 12, 2018 by: m k',
      content:
        'Are you looking to elevate your hair and makeup game in the bustling city of New York? Look no further! NYC is a hub for all things beauty, and with',
    },
    {
      img: blog2,
      title: 'The Ultimate Guide to Hair & Makeup in NYC SS24',
      date: 'Aug 12, 2018 by: m k',
      content:
        'Are you looking to elevate your hair and makeup game in the bustling city of New York? Look no further! NYC is a hub for all things beauty, and with',
    },
    {
      img: blog3,
      title: 'The Ultimate Guide to Hair & Makeup in NYC SS24',
      date: 'Aug 12, 2018 by: m k',
      content:
        'Are you looking to elevate your hair and makeup game in the bustling city of New York? Look no further! NYC is a hub for all things beauty, and with',
    },
    {
      img: blog4,
      title: 'The Ultimate Guide to Hair & Makeup in NYC SS24',
      date: 'Aug 12, 2018 by: m k',
      content:
        'Are you looking to elevate your hair and makeup game in the bustling city of New York? Look no further! NYC is a hub for all things beauty, and with',
    },
  ];
  return (
    <div className="blogs">
      <h2>FROM OUR BLOG</h2>
      <div className="blogs__card">
        {blogList.map((blog) => (
          <BlogItem
            imgName={blog.img}
            id={blog.img}
            title={blog.title}
            date={blog.date}
            content={blog.content}
          ></BlogItem>
        ))}
      </div>
    </div>
  );
};

export default Blog;
