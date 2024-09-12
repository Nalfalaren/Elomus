import React from 'react';
import './breadcumb.scss';
import { faChevronRight } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

interface BreadcumbsProps {
  title: string;
}

const Breadcumbs: React.FC<BreadcumbsProps> = ({ title }) => {
  return (
    <div className="breadcumb">
      <div className="breadcumb__title">{title}</div>
      <div className="breadcumb__direction">
        <p>Home</p>
        <FontAwesomeIcon icon={faChevronRight} />
        <p>Collections</p>
      </div>
    </div>
  );
};

export default Breadcumbs;

