import { useState } from 'react';

import { faQuoteRight } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { Card } from 'react-bootstrap';

import Customer1 from '@/assets/images/customer1.webp';
import Customer2 from '@/assets/images/customer2.webp';
import Customer3 from '@/assets/images/customer3.avif';
import Customer4 from '@/assets/images/customer4.avif';

import '../Feedback.scss';

const HighBreakpointSlider = () => {
  const [activeIndex, setActiveIndex] = useState(0);

  const handlePrev = () => {
    setActiveIndex((prevIndex) => (prevIndex - 1) % 2);
  };

  const handleNext = () => {
    setActiveIndex((prevIndex) => (prevIndex + 1) % 2);
  };

  const cardData = [
    {
      image: Customer1,
      title: 'A really great experience',
      text: 'All Perfect !! I have three sites with magento, this theme is the best !! Excellent support, advice theme installation package, sorry for English, are Italian but I had no problem !!',
      customer: 'Alva Ono',
    },
    {
      image: Customer2,
      title: 'Trustworthy and powerful',
      text: 'Perfect Themes and the best of all that you have many options to choose! Best Support team ever! Very fast responding and experts on their fields! Thank you very much!',
      customer: 'Amber Laha',
    },
    {
      image: Customer3,
      title: 'Best designer around',
      text: 'Code, template and others are very good. The support has served me immediately and solved my problems when I need help. Are to be congratulated. Att Renan Andrade ..',
      customer: 'Dewey Tetzlaff',
    },
    {
      image: Customer4,
      title: 'Trustworthy and powerful',
      text: 'Perfect Themes and the best of all that you have many choose! Best Support team ever! Very fast responding and experts on their fields! Thank you very much!',
      customer: 'Lavina Wilderman',
    },
  ];

  const carouselItems = [...cardData, ...cardData, ...cardData];

  return (
    <div className="feedback__carousel">
      <div className="feedback__carousel__wrapper">
        <div
          className="feedback__carousel__inner"
          style={{
            transform: `translateX(-${activeIndex * 33.3333}%)`,
            transition: 'transform 0.5s ease',
          }}
        >
          {carouselItems.map((card, index) => (
            <div key={index} className="feedback__carousel__item">
              <Card
                style={{
                  width: '100%',
                }}
                className="feedback__carousel__card"
              >
                <Card.Body>
                  <div className="feedback__carousel__card__body">
                    <img src={card.image} alt={`customer${index + 1}`} />
                    <Card.Title>{card.title}</Card.Title>
                    <Card.Text style={{ width: '90%' }}>{card.text}</Card.Text>
                    <div className="feedback__carousel__card__body__quote">
                      <FontAwesomeIcon icon={faQuoteRight} />
                      <Card.Text className="feedback__carousel__card__body__customer">
                        {card.customer}
                      </Card.Text>
                    </div>
                  </div>
                </Card.Body>
              </Card>
            </div>
          ))}
        </div>
      </div>
      <button
        className="carousel-control-prev"
        onClick={handlePrev}
        style={activeIndex === 0 ? { display: 'none' } : { display: 'block' }}
      >
        &lt;
      </button>
      <button
        className="carousel-control-next"
        onClick={handleNext}
        style={activeIndex === 1 ? { display: 'none' } : { display: 'block' }}
      >
        &gt;
      </button>
    </div>
  );
};

export default HighBreakpointSlider;
