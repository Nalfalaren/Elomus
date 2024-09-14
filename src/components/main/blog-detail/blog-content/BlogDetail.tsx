import React from 'react';
import mainImg from '@/assets/images/shoes2.webp';
import { Button, Form } from 'react-bootstrap';

import './BlogDetail.scss';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBars } from '@fortawesome/free-solid-svg-icons';

export interface ArticleContent {
  subTitle: string;
  content: string;
}
interface Article {
  id: string;
  img: string;
  badge: string;
  title: string;
  author: string;
  overview?: string | undefined;
  content?: ArticleContent[];
  overall?: string;
}
const BlogDetail = () => {
  const article: Article[] = [
    {
      id: '1',
      img: mainImg,
      badge: 'Shoes',
      title: "Experience Dior's Epic F/W 2023 Showcase",
      author: 'Posted by elomus-theme Admin on September 27, 2019',
      overview:
        'Dior recently made waves in the fashion industry with their groundbreaking Fall/Winter 2023 fashion show, offering viewers a unique 360° experience like never before. This innovative approach to showcasing their latest collection has set a new standard for fashion presentations.',
      content: [
        {
          subTitle: 'What is a 360° Fashion Show?',
          content:
            'A 360° fashion show allows viewers to immerse themselves in the runway experience from all angles. By using special cameras and technology, Dior was able to capture every detail of the show, giving viewers the feeling of being front row at the event.',
        },
        {
          subTitle: 'How Does it Work?',
          content:
            'Viewers can access the 360° fashion show through a virtual platform, where they can navigate the runway, zoom in on the garments, and even see the models up close. This interactive experience brings a new level of engagement to fashion shows, allowing for a more intimate and detailed view of the collection.',
        },
        {
          subTitle: 'Benefits of a 360° Fashion Show?',
          content:
            'With a 360° fashion show, Dior is able to reach a wider audience and provide a more inclusive experience for fashion enthusiasts around the world. This technology also allows for a more sustainable approach to fashion events, reducing the need for physical attendance and the associated carbon footprint.',
        },
      ],
      overall:
        "Overall, Dior's F/W 2023 fashion show in 360° is a testament to the brand's commitment to innovation and creativity in the fashion industry. By embracing new technologies and pushing the boundaries of traditional fashion presentations, Dior continues to set the bar high for future fashion shows.",
    },
  ];
  return (
    <div className="article">
      <div className="article__mb">
        <FontAwesomeIcon icon={faBars} />
        <span>View sidebar filter</span>
      </div>
      {article.map((art) => (
        <div key={art.id} className="article__block">
          <div className="article__block__img">
            {' '}
            <img src={art.img} alt={art.id}></img>
          </div>
          <span className="article__block__badge">{art.badge}</span>
          <h3 className="article__block__title">{art.title}</h3>
          <p className="article__block__author">{art.author}</p>
          <div>
            <p>{art.overview}</p>
          </div>
          {art.content?.map((item) => (
            <div className="article__block__subcontent">
              <h3>{item.subTitle}</h3>
              <p>{item.content}</p>
            </div>
          ))}
          <div>
            <p>{art.overall}</p>
          </div>
        </div>
      ))}
      <hr></hr>
      <div className="article__form">
        <h3>Leave a comment</h3>
        <p>Your email address will not be published.</p>
        <Form className="article__form__container">
          <Form.Group
            className="mb-3 article__form__container__group"
            controlId="control1"
          >
            <Form.Control type="text" placeholder="Your name" />
            <Form.Control type="email" placeholder="Email" />
          </Form.Group>
          <Form.Group className="mb-3" controlId="control2">
            <Form.Control as="textarea" rows={5} placeholder="Message" />
          </Form.Group>
          <Button>Post comment</Button>
        </Form>
      </div>
    </div>
  );
};

export default BlogDetail;
