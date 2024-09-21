import React from 'react';
import './breadcumb.scss';
import { faChevronRight } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

interface BreadcumbsProps {
  position: string;
}

const BreadcumbsYellow: React.FC<BreadcumbsProps> = ({ position }) => {
  return (
    <div className="breadcumb-yellow">
      <div className="breadcumb-yellow__direction">
        <p>Home</p>
        <FontAwesomeIcon icon={faChevronRight} />
        <p>{position}</p>
      </div>
    </div>
  );
};

export default BreadcumbsYellow;
