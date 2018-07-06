import React from 'react';
import './styles/driversReviews.css';
import Card from './jsComponents/card';
import arrowImg from './images/arrow.svg';
import CardList from './text/driversReviews.json';

let State = {};
Object.keys(CardList).forEach(element => {
  State[element] = {};
  State[element].text = CardList[element];
  State[element].cardNum = element;
});

const DriversReviews = () => (
  <section className="drivers-rev">
    <div className="inner-drivers-rev">
      <div className="header-box">
        <p>За рулем</p>
        <h2>Наши водители-партнеры</h2>
      </div>

      <div className="cards-box">
        {Object.values(State).map(card => (
          <Card
            cardNum={card.cardNum}
            description={card.text.description}
            name={card.text.name}
          />
        ))}
      </div>

      <div className="arrow-box">
        <img src={arrowImg} alt="" />
      </div>
    </div>
  </section>
);

export default DriversReviews;
