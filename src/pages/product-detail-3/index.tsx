import '@/layouts';
import SimilarProducts from '@/components/main/product-detail-layout/product-detail/similar-product/SimilarProducts';
import Payment from '@/components/main/product-detail-layout/product-detail-3/payment/Payment';
import Features from '@/components/main/product-detail-layout/product-detail-4/features/Features';

const ProductDetailComponent3 = () => {
  return (
    <div className="layout__content__context__container">
      <Payment></Payment>
      <Features></Features>
      <SimilarProducts></SimilarProducts>
    </div>
  );
};

export default ProductDetailComponent3;
