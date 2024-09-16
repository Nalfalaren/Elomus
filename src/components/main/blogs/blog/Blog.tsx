import React from 'react';
import blog1 from '@/assets/images/post4.webp';
import blog2 from '@/assets/images/post2.webp';
import blog3 from '@/assets/images/post3.jpg';
import blog4 from '@/assets/images/post1.webp';

import './Blog.scss';

const BlogItem = React.lazy(() => import('../items/BlogItem'));

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
      title: 'Experience Dior F/W 2015 First Fashion Show in 360',
      date: 'Aug 12, 2018 by: elomus-theme Admin',
      content:
        "Experience the magic of Dior's Fall/Winter 2015 fashion show like never before with the revolutionary 360• technology. Step into the world of high fashion and witness every detail of the",
    },
    {
      img: blog3,
      title: '10 Fashionable Looks for London Fashion Day',
      date: 'Aug 12, 2018 by: elomus-theme Admin',
      content:
        "London Fashion Day is just around the corner, and it's time to start planning your fashionable looks for the event. Whether you're attending the shows or just soaking up the"
    },
    {
      img: blog4,
      title: 'Revamp Your Style with Mercedes Benz Fashion Week',
      date: 'Aug 12, 2018 by: m k',
      content:
        'Mercedes Benz Fashion Week is a prestigious event that showcases the latest trends in the fashion industry. Attending this event can be a great way to revamp your style and',
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
