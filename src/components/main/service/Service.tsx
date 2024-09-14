import React from 'react';

import service2 from '@/assets/images/manufacturing.webp';
import service1 from '@/assets/images/storage.webp';
import service3 from '@/assets/images/packaging.webp';
import service4 from '@/assets/images/delivery.webp';

import { Button, Card, Form } from 'react-bootstrap';
import './Service.scss';

const Service = () => {
  const serviceList = [
    {
      id: '1',
      img: service1,
      title: 'Storage',
      content:
        'Discover Efficient and Secure Storage Solutions for Your Valuables.',
    },
    {
      id: '2',
      img: service2,
      title: 'Manufacturing',
      content: 'Explore Our Advanced Manufacturing Processes and Capabilities.',
    },
    {
      id: '3',
      img: service3,
      title: 'Packaging',
      content:
        'Utilize Our Professional Packaging Services for Safe and Efficient Delivery.',
    },
    {
      id: '4',
      img: service4,
      title: 'Delivery',
      content:
        'Reliable Delivery Solutions to Ensure Timely Arrival of Your Goods.',
    },
  ];

  return (
    <div className="service">
      <h2>Our Services</h2>
      <section className="service__intro">
        <h3>Who We Are</h3>
        <p>
          We believe in providing solutions that make a real difference. With
          over 5 years of experience in this domain, we have honed our expertise
          to offer services that are not just effective but also tailored to
          meet the unique needs of each of our clients. We've grown and evolved,
          but our core values of integrity, innovation, and quality have
          remained steadfast. These values are at the heart of everything we do
          and are the reason why we have built long-standing relationships with
          our customers. Our team of dedicated professionals is our greatest
          asset. With a passion for excellence, they bring their diverse skills
          and in-depth knowledge to ensure that each project we undertake is
          handled with utmost care and precision. We pride ourselves on our
          ability to stay ahead of industry trends and continuously incorporate
          the latest technologies and best practices in our services.
        </p>
      </section>
      <section className="service__list">
        <h3>What We Do</h3>
        <div className="service__list__container">
          {serviceList.map((service) => (
            <Card key={service.id} className="service__list__container__card">
              <Card.Body>
                <div className="service__list__container__card__img">
                  <img src={service.img} alt={service.title} />
                </div>
                <div className="service__list__container__card__content">
                  <h4>{service.title}</h4>
                  <p>{service.content}</p>
                </div>
              </Card.Body>
            </Card>
          ))}
        </div>
      </section>
      <section className="service__list__form">
        <Card>
          <Card.Body className="service__list__form__body">
            <h3>Send us your Queries</h3>
            <hr />
            <Form className="service__list__form__body__content">
              <Form.Group
                className="mb-3 contact-us__card__body__content__group"
                controlId="input1"
              >
                <div>
                  <Form.Label>Name</Form.Label>
                  <Form.Control type="text" placeholder="Name" />
                </div>
                <div>
                  <Form.Label>Email</Form.Label>
                  <Form.Control type="email" placeholder="Email" />
                </div>
                <div>
                  <Form.Label>Phone</Form.Label>
                  <Form.Control type="text" placeholder="Phone" />
                </div>
              </Form.Group>

              <Form.Group className="mb-3" controlId="textarea1">
                <Form.Label>Message</Form.Label>
                <Form.Control as="textarea" rows={10} placeholder="Message" />
              </Form.Group>
              <Form.Check
                inline
                label="I agree with the terms and conditions."
                name="group1"
                type="checkbox"
                id={'checkbox1'}
              />
              <Button className="contact-us__card__body__form__button">Send</Button>
            </Form>
          </Card.Body>
        </Card>
      </section>
    </div>
  );
};

export default Service;
