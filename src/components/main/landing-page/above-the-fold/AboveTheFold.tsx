import Carousel from 'react-bootstrap/Carousel';
import { Link } from 'react-router-dom';

import drone1 from '@/assets/images/drone1.jpg';
import drone2 from '@/assets/images/drone2.jpg';
import './AboveTheFold.scss';

function AboutTheFold() {
  return (
    <div>
      <Carousel>
        <Carousel.Item>
          <img src={drone1} alt="drone1" className="d-block w-100"></img>
          <Carousel.Caption className="carousel-caption--first">
            <h1 className="carousel-caption__title">
              The world’s Smallest Quadcopter
            </h1>
            <h1 className="carousel-caption__name">Elomus F18 Drone 3 Auto</h1>
            <p className="carousel-caption__content">
              Newest hover function, Elomus F18 Drone 3 Auto Quadcopter UFO with
              2Mp Wifi Camera
            </p>
            <div className="carousel-caption__link">
              <Link to="/collections/drone">SHOP NOW</Link>
            </div>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <img src={drone2} alt="drone2" className="d-block w-100"></img>
          <Carousel.Caption>
            <h1 className="carousel-caption__title">
              The world’s Smallest Quadcopter
            </h1>
            <h1 className="carousel-caption__name">BuzzBee Nano Drone</h1>
            <p className="carousel-caption__content">
              Ideal for indoor usage & ultra portable. 3 User modes, junior,
              intermediate & healess.
            </p>
            <div className="carousel-caption__link">
              <Link to="/collections/drone">SHOP NOW</Link>
            </div>
          </Carousel.Caption>
        </Carousel.Item>
      </Carousel>
    </div>
  );
}

export default AboutTheFold;
