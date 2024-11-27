// eslint-disable-next-line import/order
import SubscriptionTabs from '../tabs/SubscriptionTabs';
import './SubscriptionPage.scss';
import { OFFERS_LIST } from '../fake-data/SubscriptionData';
import SubscriptionOffer from '../subcription-offer/SubscriptionOffer';

const SubscriptionPage = () => {
  return (
    <div className="subscription">
      <h1>Choose Your Packet</h1>
      <SubscriptionTabs></SubscriptionTabs>
      <div className="subscription__list">
        {OFFERS_LIST.map((item, index) => (
          <SubscriptionOffer offerData={item} key={index}></SubscriptionOffer>
        ))}
      </div>
    </div>
  );
};

export default SubscriptionPage;
