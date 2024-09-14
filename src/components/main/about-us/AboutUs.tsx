import React from 'react';

import { Card } from 'react-bootstrap';

import Director1 from '@/assets/images/Director1.avif';
import Director2 from '@/assets/images/Director2.avif';
import Four from '@/assets/images/Four.avif';
import One from '@/assets/images/One.avif';
import President from '@/assets/images/President.avif';
import TeamLeadOne from '@/assets/images/Team Lead One.avif';
import TeamLeadThree from '@/assets/images/Team Lead Three.avif';
import TeamLeadTwo from '@/assets/images/Team Lead Two.avif';
import Three from '@/assets/images/Three.avif';
import Two from '@/assets/images/Two.avif';

import './AboutUs.scss';

const AboutUs = () => {
  const jobs = [
    {
      id: '1',
      title: 'President',
      info: [{ img: President, content: 'President' }],
    },
    {
      id: '2',
      title: 'Director',
      info: [
        { img: Director1, content: 'Director1' },
        { img: Director2, content: 'Director2' },
      ],
    },
    {
      id: '3',
      title: 'Team Leads',
      info: [
        { img: TeamLeadOne, content: 'Team Lead One' },
        { img: TeamLeadTwo, content: 'Team Lead Two' },
        { img: TeamLeadThree, content: 'Team Lead Three' },
      ],
    },
    {
      id: '4',
      title: 'Employee of the month',
      info: [
        { img: One, content: 'One' },
        { img: Two, content: 'Two' },
        { img: Three, content: 'Three' },
        { img: Four, content: 'Four' },
      ],
    },
  ];
  return (
    <div className="about-us">
      <h2>OUR TEAM</h2>
      <p>
        Meet the team behind the screen. A separate template for team/about us
        page. You can add multiple message box blocks, video blocks and team
        member blocks. There can be member blocks for single, two, three and
        four members.
      </p>
      <div className="about-us__container">
        {jobs.map((job) => (
          <div key={job.id} className="about-us__container__block">
            <h3>{job.title}</h3>
            <div className="about-us__container__block__content">
              {job.info.map((item) => (
                <Card
                  key={item.img}
                  className="about-us__container__block__content__card"
                >
                  <Card.Body className="about-us__container__block__content__card__body">
                    <div className="about-us__container__block__content__card__body__img">
                      <img src={item.img} alt={item.img}></img>
                    </div>
                    <h3>{item.content}</h3>
                  </Card.Body>
                </Card>
              ))}
            </div>
          </div>
        ))}
      </div>
      <div className="about-us__video">
        <iframe
          width="100%"
          height="500"
          src="https://www.youtube.com/embed/9841aa4b-8870-4e13-8677-a724114d4356"
          frameborder="0"
          allowfullscreen
        ></iframe>
      </div>
    </div>
  );
};

export default AboutUs;
