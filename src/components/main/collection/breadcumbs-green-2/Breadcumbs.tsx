import React from 'react';
import './breadcumb.scss';
import { faChevronRight } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

interface BreadcumbsProps {
  title: string;
  position: string;
}

const BreadcumbsGreen2: React.FC<BreadcumbsProps> = ({ title, position }) => {
  return (
    <div className="breadcumb-green-2">
      <div className="breadcumb-green-2__title">{title}</div>
      <div className="breadcumb-green-2__direction">
        <p>Home</p>
        <FontAwesomeIcon icon={faChevronRight} />
        <p>{position}</p>
      </div>
    </div>
  );
};

export default BreadcumbsGreen2;

