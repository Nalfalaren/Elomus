import { faCheck } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import './SubscriptionOffer.scss';
import { useNavigate } from 'react-router-dom';

interface OfferInfoProps {
  name: string;
  offerPrice: number;
  offerFunctions: string[];
}

interface OfferProps {
  offerData: OfferInfoProps;
}
const SubscriptionOffer = ({ offerData }: OfferProps) => {
  const navigate = useNavigate();

  const handleNavigate = () => {
    navigate('/checkout', { state: offerData });
  };
  return (
    <div className="offer_block">
      <div className="offer_block__badge">
        <h2>{offerData.name}</h2>
      </div>
      <div className="offer_block__price">
        <h1>
          ${offerData.offerPrice}
          {offerData.name === 'Premium' && '+'}
        </h1>
        <p>User/month</p>
      </div>
      <div className="offer_block__list">
        {offerData?.offerFunctions?.map((item, index) => (
          <div key={index} className="offer_item">
            <FontAwesomeIcon icon={faCheck} className="offer_icon" />
            <p>{item}</p>
          </div>
        ))}
      </div>
      <button className="offer_btn" onClick={handleNavigate}>
        Choose Packet
      </button>
    </div>
  );
};

export default SubscriptionOffer;
