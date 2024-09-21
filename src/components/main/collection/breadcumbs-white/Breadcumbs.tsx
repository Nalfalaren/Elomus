import React from 'react';
import './breadcumb.scss';

interface BreadcumbsProps {
  title: string;
  position: string;
}

const BreadcumbsWhite: React.FC<BreadcumbsProps> = () => {
  return <div className="breadcumb-white"></div>;
};

export default BreadcumbsWhite;
