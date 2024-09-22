import React, { useState } from 'react';
import './Info.scss';

const Info = () => {
  const productInfo = [
    {
      intro:
        'Capture the World from Above with SkyExplorer X20 - Your Eye in the Sky!',
      overview: {
        title: 'Overview:',
        content:
          "Discover the unmatched capabilities of the SkyExplorer X20 Drone, engineered for enthusiasts and professionals alike. Our latest model combines advanced technology with user-friendly features, making aerial photography and videography more accessible than ever. Whether you're capturing stunning landscapes, filming action-packed adventures, or simply exploring the skies, the SkyExplorer X20 is your perfect companion.",
      },
      keyFeatures: [
        {
          title: 'Ultra-High-Definition 4K Camera',
          content:
            'Experience breathtaking clarity and detail with our 4K HD camera, stabilized with a 3-axis gimbal for smooth, cinematic shots.',
        },
        {
          title: 'Advanced Flight Time',
          content:
            'Enjoy extended flight time with our high-capacity battery, allowing you to capture more footage without frequent recharges.',
        },
        {
          title: 'Intelligent Flight Modes',
          content:
            'Choose from various intelligent flight modes like Follow Me, Orbit, and Waypoints to enhance your aerial photography experience.',
        },
        {
          title: 'Obstacle Avoidance System',
          content:
            'Navigate safely with the built-in obstacle avoidance system, designed to prevent collisions and ensure a smooth flight.',
        },
      ],
      bonusItems: [
        '1 x SkyExplorer X20 Drone',
        '1 x Remote Controller',
        '1 x High-Capacity Battery',
      ],
      otherInfo: [
        {
          title: 'Perfect for Everyone',
          content:
            "Whether you're a budding photographer, a seasoned drone pilot, or just looking for a new hobby, the SkyExplorer X20 offers a unique perspective on the world. Its intuitive controls and safety features make it ideal for beginners, while its advanced capabilities satisfy even the most demanding users.",
        },
      ],
    },
  ];

  const pageTitles = ['Description', 'Reviews'];
  const [currentPage, setCurrentPage] = useState('Description');

  const handleTitles = (page: React.SetStateAction<string>) => {
    setCurrentPage(page);
  };

  return (
    <div className="info">
      <div className="info__tabs">
        {pageTitles.map((title, index) => (
          <button
            key={index}
            className={`info__tabs__button ${currentPage === title ? 'active info__tabs__chosen' : ''}`}
            onClick={() => handleTitles(title)}
          >
            {title}
          </button>
        ))}
      </div>
      <div>
        <hr></hr>
        {currentPage === 'Description' &&
          productInfo.map((info, index) => (
            <div key={index} className="info">
              <div className="info__intro">
                <h4>{info.intro}</h4>
                <div className="info__intro__overview">
                  <p>
                    <span>{info.overview.title}</span> {info.overview.content}
                  </p>
                </div>
              </div>
              <div className="info__intro__key">
                <span>Key Features:</span>
                <ul>
                  {info.keyFeatures.map((feature, index) => (
                    <li key={index}>
                      <span>{feature.title}</span>: {feature.content}
                    </li>
                  ))}
                </ul>
              </div>
              <div className="info__intro__prize">
                <span>What's in the Box:</span>
                <ul>
                  {info.bonusItems.map((item, index) => (
                    <li key={index}>{item}</li>
                  ))}
                </ul>
              </div>
              <div className="info__intro__others">
                {info.otherInfo.map((item, index) => (
                  <p key={index}>
                    <span>{item.title}</span>: {item.content}
                  </p>
                ))}
              </div>
            </div>
          ))}
      </div>
    </div>
  );
};

export default Info;
