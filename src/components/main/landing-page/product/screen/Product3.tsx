import React from 'react';

import control from '@/assets/images/control.png';
import eye from '@/assets/images/eye.png';
import flight from '@/assets/images/flight.png';
import screen from '@/assets/images/product3.webp';
import resolution from '@/assets/images/resolution.png';
import sensor from '@/assets/images/sensor.png';
import speed from '@/assets/images/speed.png';

import './Product3.scss';

const Product3 = () => {
  const productData = [
    {
      id: '1',
      img: flight,
      title: 'Flight time',
      result: '30 MINS',
    },
    {
      id: '2',
      img: control,
      title: 'Control range',
      result: '7 KM',
    },
    {
      id: '3',
      img: sensor,
      title: 'Sensor range',
      result: '30 M',
    },
    {
      id: '4',
      img: speed,
      title: 'Speed',
      result: '72KM/H',
    },
    {
      id: '5',
      img: resolution,
      title: 'Video resolution',
      result: '4K 60FPS',
    },
    {
      id: '6',
      img: eye,
      title: 'Obstacle sensing',
      result: '5 DIRECTIONS',
    },
  ];
  return (
    <div className="product3">
      <div className="product3__intro">
        <h3>ULTRA-BRIGHT SCREEN</h3>
        <p>
          A 5.5in 1080p screen integrated with the Phantom 4 Pro + offers 1000
          cd/m2 of brightness, more than twice as bright as conventional smart
          devices. It makes bright, vivid colors easily visible in direct
          sunlight. As the DJI GO 4 app is built into the screen, a mobile
          device is not required, simplifying pre-flight preparations.
        </p>
        <div className="product3__intro__container">
          {productData.map((data) => (
            <div key={data.id} className="product3__intro__container__info">
              <div>
                <img src={data.img} alt={data.id}></img>
              </div>
              <div className="product3__intro__container__data">
                <div>
                  <h2>{data.title}</h2>
                </div>
                <div>
                  <p>{data.result}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
      <div className="product3__img">
        <img src={screen} alt="screen"></img>
      </div>
    </div>
  );
};

export default Product3;
