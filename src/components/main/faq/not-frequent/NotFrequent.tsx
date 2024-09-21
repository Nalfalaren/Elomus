import React, { useState } from 'react';
import { faChevronDown, faChevronUp } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

import './NotFrequent.scss';

const NotFrequentFaq = () => {
  const NotFrequentFaq = [
    {
      id: 1,
      question: 'What items are included in the package?',
      answer:
        'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quasi cupiditate et laudantium esse adipisci consequatur modi possimus accusantium vero atque excepturi nobis in doloremque repudiandae soluta non minus dolore voluptatem enim reiciendis officia voluptates, fuga ullam? Voluptas reiciendis cumque molestiae unde numquam similique quas doloremque non, perferendis doloribus necessitatibus itaque dolorem quam officia atque perspiciatis dolore laudantium dolor voluptatem eligendi? Aliquam nulla unde voluptatum molestiae, eos fugit ullam, consequuntur, saepe voluptas quaerat deleniti. Repellendus magni sint temporibus, accusantium rem commodi',
    },
    {
      id: 2,
      question: 'Does the product come with a warranty?',
      answer:
        'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quasi cupiditate et laudantium esse adipisci consequatur modi possimus accusantium vero atque excepturi nobis in doloremque repudiandae soluta non minus dolore voluptatem enim reiciendis officia voluptates, fuga ullam? Voluptas reiciendis cumque molestiae unde numquam similique quas doloremque non, perferendis doloribus necessitatibus itaque dolorem quam officia atque perspiciatis dolore laudantium dolor voluptatem eligendi? Aliquam nulla unde voluptatum molestiae, eos fugit ullam, consequuntur, saepe voluptas quaerat deleniti. Repellendus magni sint temporibus, accusantium rem commodi',
    },
    {
      id: 3,
      question: 'Is there a policy in place for returns and exchanges?',
      answer:
        'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quasi cupiditate et laudantium esse adipisci consequatur modi possimus accusantium vero atque excepturi nobis in doloremque repudiandae soluta non minus dolore voluptatem enim reiciendis officia voluptates, fuga ullam? Voluptas reiciendis cumque molestiae unde numquam similique quas doloremque non, perferendis doloribus necessitatibus itaque dolorem quam officia atque perspiciatis dolore laudantium dolor voluptatem eligendi? Aliquam nulla unde voluptatum molestiae, eos fugit ullam, consequuntur, saepe voluptas quaerat deleniti. Repellendus magni sint temporibus, accusantium rem commodi',
    },
  ];

  const [isClick, setIsClick] = useState<boolean[]>([false, false, false]);
  const handleClick = (id: number) => {
    setIsClick((prev) => {
      const updated = [...prev];
      updated[id] = !updated[id];
      return updated;
    });
  };
  return (
    <div className="FAQ-inverse">
      <h1>Not So Frequently Asked Questions</h1>
      <div className="FAQ-inverse__questions">
        {NotFrequentFaq.map((faq, index) => (
          <div
            key={faq.id}
            className="FAQ-inverse__questions__item"
            onClick={() => handleClick(index)}
          >
            <span>
              <h2>{faq.question}</h2>
              {isClick[index] === true ? (
                <FontAwesomeIcon icon={faChevronUp}></FontAwesomeIcon>
              ) : (
                <FontAwesomeIcon icon={faChevronDown}></FontAwesomeIcon>
              )}
            </span>
            {isClick[index] === true && <p>{faq.answer}</p>}
          </div>
        ))}
      </div>
    </div>
  );
};

export default NotFrequentFaq;
