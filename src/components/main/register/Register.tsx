import { faUser } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React from 'react';
import { Button, Form } from 'react-bootstrap';

import './Register.scss';

const Register = () => {
  return (
    <div className="register">
      <h3>Create Account</h3>
      <p>Your Personal Details</p>
      <Form className="register__form">
        <Form.Group className="register__form__group">
          <Form.Label>First Name</Form.Label>
          <Form.Control
            placeholder="First Name"
            id="email"
            type="text"
          ></Form.Control>
        </Form.Group>
        <Form.Group className="register__form__group">
          <Form.Label>Last Name</Form.Label>
          <Form.Control
            placeholder="Last Name"
            id="password"
            type="text"
          ></Form.Control>
        </Form.Group>
        <Form.Group className="register__form__group">
          <Form.Label>Email</Form.Label>
          <Form.Control
            placeholder="Email"
            type="email"
            id="password"
          ></Form.Control>
        </Form.Group>
        <Form.Group className="register__form__group">
          <Form.Label>Password</Form.Label>
          <Form.Control
            placeholder="Password"
            id="password"
            type="password"
          ></Form.Control>
        </Form.Group>
        <Form.Group className="register__form__button">
          <Button>
            <span>
              <FontAwesomeIcon icon={faUser} /> Create
            </span>
          </Button>
          or
          <Button>Return To Store</Button>
        </Form.Group>
      </Form>
    </div>
  );
};

export default Register;
