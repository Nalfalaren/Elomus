import { Link, useLocation } from 'react-router-dom';

import paypal from '@/assets/images/paypal.svg';
import Input from '@/components/base/Input';

import './Checkout.scss';

const Checkout = () => {
  const location = useLocation();
  const offerData = location.state;
  const totalPrice = (offerData?.offerPrice * 105) / 100;

  return (
    <div className="checkout-page">
      <div className="checkout-page left">
        <form>
          <h3 style={{ marginBlock: '1.5rem' }}>Booking Details</h3>
          <div className="checkout-page__left-rows">
            <div className="checkout-page__block">
              <label>First Name</label>
              <Input type="text" className="checkout-page__row-input"></Input>
            </div>
            <div className="checkout-page__block">
              <label>Last Name</label>
              <Input type="text" className="checkout-page__row-input"></Input>
            </div>
          </div>
          <div className="checkout-page__left-rows">
            <div className="checkout-page__block">
              <label>Phone number</label>
              <Input type="text" className="checkout-page__row-input"></Input>
            </div>
            <div className="checkout-page__block">
              <label>Package activate date</label>
              <Input type="date" className="checkout-page__row-input"></Input>
            </div>
          </div>
          <div className="checkout-page__left-rows">
            <div className="checkout-page__block">
              <label>Address</label>
              <Input type="text" className="checkout-page__row-input"></Input>
            </div>
          </div>
          <div className="checkout-page__left-rows">
            <div className="checkout-page__block">
              <label>Email address</label>
              <Input type="text" className="checkout-page__row-input"></Input>
            </div>
            <div className="checkout-page__block">
              <label>Confirm email address</label>
              <Input type="text" className="checkout-page__row-input"></Input>
            </div>
          </div>
          <hr></hr>
          <h3 style={{ marginTop: '2rem' }}>Payment Method</h3>
          <div className="checkout-page detail">
            <Link to={'/'} className="checkout-page paypal">
              <img src={paypal} alt="paypal"></img>
            </Link>
            <p>or</p>
            <div className="checkout-page__form">
              <div className="checkout-page__left-rows">
                <div className="checkout-page__block">
                  <Input
                    type="text"
                    placeholder="Card Number"
                    className="checkout-page__row-input"
                  ></Input>
                </div>
              </div>
              <div className="checkout-page__left-rows">
                <div className="checkout-page__block">
                  <Input
                    type="text"
                    placeholder="Expriration"
                    className="checkout-page__row-input"
                  ></Input>
                </div>
                <div className="checkout-page__block">
                  <Input
                    type="text"
                    placeholder="CVV"
                    className="checkout-page__row-input"
                  ></Input>
                </div>
              </div>
              <div className="checkout-page__left-rows">
                <div className="checkout-page__block">
                  <Input
                    type="text"
                    placeholder="First Name"
                    className="checkout-page__row-input"
                  ></Input>
                </div>
                <div className="checkout-page__block">
                  <Input
                    type="text"
                    placeholder="Last Name"
                    className="checkout-page__row-input"
                  ></Input>
                </div>
              </div>
              <button className="checkout-page checkout-btn">
                PLACE ORDER
              </button>
            </div>
          </div>
        </form>
      </div>
      {/* Right side */}
      <div className="checkout-page__right">
        <div className="checkout-page__right-row-title">
          <h3>Shopping Cart</h3>
        </div>
        <div className="checkout-page__right-row">
          <h3 style={{ fontWeight: 400 }}>Subtotal</h3>
          <p>${offerData?.offerPrice.toFixed(2)}</p>
        </div>
        <div className="checkout-page__right-row">
          <h3 style={{ fontWeight: 400 }}>Tax</h3>
          <p>${((offerData?.offerPrice * 5) / 100).toFixed(2)}</p>
        </div>
        <hr></hr>
        <div className="checkout-page__right-row">
          <h3 style={{ fontWeight: 600 }}>Order Total</h3>
          <p style={{ fontWeight: 600 }}>{'$' + totalPrice.toFixed(2)}</p>
        </div>
        <hr></hr>
        <div className="invoice-table">
          <div className="invoice-header">
            <div className="column">Name</div>
            <div className="column">Quality</div>
            <div className="column">Price</div>
          </div>
          <hr></hr>
          <div className="invoice-row">
            <div className="item-column">{offerData?.name}</div>
            <div className="qty-column">1</div>
            <div className="price-column">
              ${offerData?.offerPrice.toFixed(2)}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Checkout;
