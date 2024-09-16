import React from 'react';
import { Button, Form } from 'react-bootstrap';
import { Link } from 'react-router-dom';

import './Login.scss';

const Login = () => {
  return (
    <div className="login">
      <h2>Account</h2>
      <div className="login__container">
        <section>
          <h3>New Customer</h3>
          <p className="login__container__title">Register Account</p>
          <p>
            By creating an account you will be able to shop faster, be up to
            date on an order's status, and keep track of the orders you have
            previously made.
          </p>
          <Button>Continue</Button>
        </section>
        <section>
          <h3>Returning Customer</h3>
          <p className="login__container__title">I am a returning customer</p>
          <Form className="login__container__form">
            <Form.Group>
              <Form.Label>Email</Form.Label>
              <Form.Control placeholder="Email" id="email"></Form.Control>
            </Form.Group>
            <Form.Group className="login__container__form__group">
              <Form.Label>Password</Form.Label>
              <Form.Control placeholder="Password" id="password"></Form.Control>
              <p>Forgot your password?</p>
            </Form.Group>
            <Form.Group className="login__container__form__button">
              <Button>Sign in</Button>
              <Button>Return To Store</Button>
            </Form.Group>
          </Form>
        </section>
      </div>
    </div>
  );
};

export default Login;
