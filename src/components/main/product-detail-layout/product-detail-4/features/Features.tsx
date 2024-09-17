import React from 'react';

import icon1 from '@/assets/images/icon1.webp';
import icon2 from '@/assets/images/icon2.webp';
import icon3 from '@/assets/images/icon3.webp';
import icon4 from '@/assets/images/icon4.png';

import './Features.scss';
const Features = () => {
  const featureList = [
    {
      id: '1',
      image: icon1,
      name: 'SAFER',
      content:
        'The original 3-wheeled scooter with intuitive lean and steer design, wide decks and high quality parts that will keep your child safe.',
    },
    {
      id: '2',
      image: icon2,
      name: 'BUILT TO LAST',
      content:
        'Clock up your micro miles, in the secure knowledge that all Scooters are patented and Swiss designed with meticulous attention to detail.',
    },
    {
      id: '3',
      image: icon3,
      name: 'ROBUST',
      content:
        'Durable and hardwearing, tested in labs by our scooter boffins, we know our scooters are the best and can withstand even the toughest conditions.',
    },
    {
      id: '4',
      image: icon4,
      name: 'ADAPTABILITY',
      content:
        'Adjustable handlebars and replacement parts mean your Elomus scooter will grow with your child.',
    },
  ];
  return (
    <div className="features">
      {featureList.map((feature) => (
        <div key={feature.id} className="features__block">
          <div>
            <img src={feature.image} alt={feature.id}></img>
          </div>
          <div>
            <h4>{feature.name}</h4>
            <p>{feature.content}</p>
          </div>
        </div>
      ))}
    </div>
  );
};

export default Features;
