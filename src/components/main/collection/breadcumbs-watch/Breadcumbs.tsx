import React from 'react';
import './breadcumb.scss';
import { faChevronRight } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

interface BreadcumbsProps {
  title: string;
  position: string;
}

const BreadcumbsWatch: React.FC<BreadcumbsProps> = ({ title, position }) => {
  return (
    <div className="breadcumb-watch">
      <div className="breadcumb-watch__title">{title}</div>
      <div className="breadcumb-watch__direction">
        <p>Home</p>
        <FontAwesomeIcon icon={faChevronRight} />
        <p>{position}</p>
      </div>
    </div>
  );
};

export default BreadcumbsWatch;

