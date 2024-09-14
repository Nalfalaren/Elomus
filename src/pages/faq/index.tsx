import React from 'react';
import '@/layouts';
import ContactUs from '@/components/main/contact-us/ContactUs';
import Faq from '@/components/main/faq/frequent/Faq';
import NotFrequentFaq from '@/components/main/faq/not-frequent/NotFrequent';

const FAQComponent = () => {
  return (
    <div className="layout__content__context__container">
      <Faq></Faq>
      <NotFrequentFaq></NotFrequentFaq>
    </div>
  );
};

export default FAQComponent;
