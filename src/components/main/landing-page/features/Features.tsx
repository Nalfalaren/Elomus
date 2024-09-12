import React from 'react';

import camera from '@/assets/images/camera.webp';
import feature1 from '@/assets/images/feature1.png';
import feature2 from '@/assets/images/feature2.webp';
import feature3 from '@/assets/images/feature3.png';
import feature4 from '@/assets/images/feature4.png';
import './Features.scss';

const Features = () => {
  const features = [
    {
      id: '1',
      icon: feature1,
      name: 'Immersive Field of View',
      content:
        'Screen equivalent to 125” screen viewed from 10 feet with 24-bit true color (16 million colors)',
    },
    {
      id: '2',
      icon: feature2,
      name: 'USB & HDMI',
      content:
        'Includes optional full immersion face mask. Supports HDMI industry standard 3D content',
    },
    {
      id: '3',
      icon: feature3,
      name: 'Battery',
      content:
        'Built-in batteries allow the pilot to participate in the sport for hours of racing.',
    },
    {
      id: '4',
      icon: feature4,
      name: 'Return to Home',
      content:
        "tells the drone to automatically come back to you using GPS. It's a very useful convenient feature.",
    },
  ];
  return (
    <div className="feature">
      <div className="feature__title">
        <p>Experience</p>
        <h2>FLY IN THE SKY</h2>
      </div>
      <div className="feature__container">
        {features.map((feature) => (
          <div key={feature.id} className="feature__container__detailed">
            <img src={feature.icon} alt={feature.id}></img>
            <div>
              <h2>{feature.name}</h2>
              <p>{feature.content}</p>
            </div>
          </div>
        ))}
      </div>
      <div className="feature__product">
        <img src={camera} alt="camera"></img>
      </div>
    </div>
  );
};

export default Features;
