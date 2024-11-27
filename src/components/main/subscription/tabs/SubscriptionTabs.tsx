import { useState } from 'react';
import './Subscription.scss';

const SubscriptionTabs = () => {
  const tabTitle = ['Drone for concert', 'Hiring drone'];
  const [tabIndex, setTabIndex] = useState(0);
  const handleTabIndex = (index: number) => {
    setTabIndex(index);
  };

  return (
    <div className="subscription-tabs">
      {tabTitle.map((item, index) => (
        <div
          key={index}
          onClick={() => handleTabIndex(index)}
          className={`subscription-tabs__block ${tabIndex === index ? 'colored' : ''}`}
        >
          <p>{item}</p>
        </div>
      ))}
    </div>
  );
};

export default SubscriptionTabs;
