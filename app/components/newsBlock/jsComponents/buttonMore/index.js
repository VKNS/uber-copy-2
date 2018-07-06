import React from 'react';
import arrowImg from './small-arrow.svg';
import './buttonMore.css';

const ButtonMore = () => (
  <div className="btn-more">
    <span>подробнее</span>
    <span className="arrow">
      <img src={arrowImg} alt="" />
    </span>
  </div>
);

export default ButtonMore;
