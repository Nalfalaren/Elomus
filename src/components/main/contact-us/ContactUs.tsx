import React from 'react';

import { Button, Card, Form } from 'react-bootstrap';
import './ContactUs.scss';

const ContactUs = () => {
  return (
    <div className="contact-us">
      <h2>Our Location</h2>
      <div className="contact-us__map">
        <iframe
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d29768.970402882725!2d105.81177215863055!3d21.1475704539962!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x313500fe2e049503%3A0x14263f9f2a5473af!2zVGnDqm4gRMawxqFuZywgxJDDtG5nIEFuaCwgSGFub2ksIFZpZXRuYW0!5e0!3m2!1sen!2s!4v1726279098155!5m2!1sen!2s"
          width="100%"
          height="450"
          allowFullScreen="true"
          loading="lazy"
          referrerpolicy="no-referrer-when-downgrade"
        ></iframe>
      </div>
      <hr></hr>
      <div className="contact-us__card">
        <Card>
          <Card.Body className="contact-us__card__body">
            <h3>Contact Us</h3>
            <hr></hr>
            <Form className="contact-us__card__body__form">
              <Form.Group
                className="mb-3 contact-us__card__body__form__group "
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
      </div>
    </div>
  );
};

export default ContactUs;
