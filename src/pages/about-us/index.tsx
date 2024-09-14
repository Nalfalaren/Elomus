import React from 'react';
import '@/layouts';
import AboutUs from '@/components/main/about-us/AboutUs';
import Blog from '@/components/main/blogs/blog/Blog';

const AboutUsComponent = () => {
  return (
    <div className="layout__content__context__container">
      <AboutUs />
    </div>
  );
};

export default AboutUsComponent;
