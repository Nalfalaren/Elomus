import { faQuoteRight } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { Card, Carousel } from 'react-bootstrap';

import Customer1 from '@/assets/images/customer1.webp';
import Customer2 from '@/assets/images/customer2.webp';
import Customer3 from '@/assets/images/customer3.avif';
import Customer4 from '@/assets/images/customer4.avif';

import '../Feedback.scss';

const LowBreakpointSlider = () => {
  return (
    <>
      <Carousel>
        <Carousel.Item className="feedback__carousel">
          <Card style={{ width: '100%' }} className="feedback__carousel__card">
            <Card.Body>
              <div className="feedback__carousel__card__body">
                <img src={Customer1} alt="customer1"></img>
                <Card.Title>A really great experience</Card.Title>
                <div>
                  <Card.Text style={{ width: '90%' }}>
                    All Perfect !! I have three sites with magento , this theme
                    is the best !! Excellent support , advice theme installation
                    package , sorry for English, are Italian but I had no
                    problem.
                  </Card.Text>
                </div>
                <div className="feedback__carousel__card__body__quote">
                  <FontAwesomeIcon icon={faQuoteRight} />
                  <Card.Text className="feedback__carousel__card__body__customer">
                    Alva Ono
                  </Card.Text>
                </div>
              </div>
            </Card.Body>
          </Card>
        </Carousel.Item>
        <Carousel.Item>
          <Card style={{ width: '100%' }} className="feedback__carousel__card">
            <Card.Body>
              <div className="feedback__carousel__card__body">
                <div className="feedback__carousel__card__body__img">
                  <img src={Customer2} alt="customer2"></img>
                </div>
                <Card.Title>Trustworthy and powerful</Card.Title>
                <div>
                  <Card.Text style={{ width: '90%' }}>
                    erfect Themes and the best of all that you have many options
                    to choose! Best Support team ever!Very fast responding and
                    experts on their fields! Thank you very much! ..
                  </Card.Text>
                </div>
                <div className="feedback__carousel__card__body__quote">
                  <FontAwesomeIcon
                    icon={faQuoteRight}
                    className="feedback__carousel__card__body__icon"
                  />
                  <Card.Text className="feedback__carousel__card__body__customer">
                    Amber Laha
                  </Card.Text>
                </div>
              </div>
            </Card.Body>
          </Card>
        </Carousel.Item>
        <Carousel.Item>
          <Card style={{ width: '100%' }} className="feedback__carousel__card">
            <Card.Body>
              <div className="feedback__carousel__card__body">
                <img src={Customer3} alt="customer3"></img>
                <Card.Title>Best designer around</Card.Title>
                <div>
                  <Card.Text style={{ width: '90%' }}>
                    Code, template and others are very good. The support has
                    served me immediately and solved my problems when I need
                    help. Are to be congratulated. Att Renan Andrade ..
                  </Card.Text>
                </div>
                <div className="feedback__carousel__card__body__quote">
                  <FontAwesomeIcon
                    icon={faQuoteRight}
                    className="feedback__carousel__card__body__icon"
                  />
                  <Card.Text className="feedback__carousel__card__body__customer">
                    Dewey Tetzlaff
                  </Card.Text>
                </div>
              </div>
            </Card.Body>
          </Card>
        </Carousel.Item>
        <Carousel.Item>
          <Card style={{ width: '100%' }} className="feedback__carousel__card">
            <Card.Body>
              <div className="feedback__carousel__card__body">
                <img src={Customer4} alt="customer4"></img>
                <Card.Title className="feedback__carousel__card__body__title">
                  Trustworthy and powerful
                </Card.Title>
                <div>
                  <Card.Text style={{ width: '90%' }}>
                    Perfect Themes and the best of all that you have many
                    options to choose! Best Support team ever!Very fast
                    responding and experts on their fields! Thank you very much!
                    ..
                  </Card.Text>
                </div>
                <div className="feedback__carousel__card__body__quote">
                  <FontAwesomeIcon
                    icon={faQuoteRight}
                    className="feedback__carousel__card__body__icon"
                  />
                  <Card.Text className="feedback__carousel__card__body__customer">
                    Lavina Wilderman
                  </Card.Text>
                </div>
              </div>
            </Card.Body>
          </Card>
        </Carousel.Item>
      </Carousel>
    </>
  );
};

export default LowBreakpointSlider;
