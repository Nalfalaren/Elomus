import React from 'react';
import '@/layouts';
import BlogDetail from '@/components/main/blog-detail/blog-content/BlogDetail';

const BlogComponent = () => {
  return (
    <div className="layout__content__context__container">
      <BlogDetail></BlogDetail>
    </div>
  );
};

export default BlogComponent;
