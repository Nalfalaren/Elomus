import React from 'react';

import Form from 'react-bootstrap/Form';

import './Contact.scss';
import '@/styles/components/_button.scss';
import { Link } from 'react-router-dom';

const Contact = () => {
  return (
    <>
      <hr style={{ width: '100%' }}></hr>
      <div className="contact">
        <div className="contact__title">
          <p>our news</p>
          <h2>SIGN UP FOR LATEST NEWS</h2>
        </div>
        <div className="contact__form">
          <Form>
            <Form.Group className="mb-3">
              <Form.Control
                type="email"
                placeholder="Enter your email address here"
                className="contact__form__input"
              />
            </Form.Group>
            <Link
              to={'/contact'}
              className="button button--secondary contact__form__link"
            >
              Subscribe
            </Link>
          </Form>
        </div>
      </div>
      <hr style={{ width: '100%' }}></hr>
    </>
  );
};

export default Contact;
