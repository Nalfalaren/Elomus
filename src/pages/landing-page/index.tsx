import AboveTheFold from '@/components/main/landing-page/above-the-fold/AboveTheFold';
import Banner from '@/components/main/landing-page/banner/Banner';
import Contact from '@/components/main/landing-page/contact/Contact';
import Features from '@/components/main/landing-page/features/Features';
import Feedback from '@/components/main/landing-page/feedbacks/Feedback';
import Product1 from '@/components/main/landing-page/product/camera/Product1';
import Product2 from '@/components/main/landing-page/product/drone-camera/Product2';
import Product3 from '@/components/main/landing-page/product/screen/Product3';
import ProductList from '@/components/main/landing-page/product-list/ProductList';

const LandingComponent = () => {
  return (
    <div>
      <AboveTheFold></AboveTheFold>
      <Features></Features>
      <Banner></Banner>
      <Product1></Product1>
      <Product2></Product2>
      <ProductList></ProductList>
      <Feedback></Feedback>
      <Product3></Product3>
      <Contact></Contact>
    </div>
  );
};

export default LandingComponent;
