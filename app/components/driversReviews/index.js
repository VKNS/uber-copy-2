import React from 'react';
import './styles/driversReviews.css';
import arrowImg from './images/arrow.svg';
import { firstCard } from './text/driversReviews.json';

const DriversReviews = () => (
  <section className="drivers-rev">
    <div className="inner-drivers-rev">
      <div className="header-box">
        <p>За рулем</p>
        <h2>Наши водители-партнеры</h2>
      </div>
      <div className="card">
        <div className="img-box" />
        <div className="text-box">
          <div className="inner-text-box">
            <p>{firstCard.description}</p>
            <p className="drivers-name">{firstCard.name}</p>
          </div>
        </div>
      </div>
      <div className="arrow-box">
        <img src={arrowImg} alt="" />
      </div>
      <div className="move-cards">
        <div className="btn-move-cards-1" />
        <div className="btn-move-cards-2" />
        <div className="btn-move-cards-3" />
        <div className="btn-move-cards-4" />
      </div>
    </div>
  </section>
);

export default DriversReviews;
