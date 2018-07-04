import React from 'react';
import './styles/driversReviews.css';
import arrowImg from './images/arrow.svg';
import { firstCard, secondCard, thirdCard } from './text/driversReviews.json';

function createMarkup(val) {
  return { __html: val };
}

const DriversReviews = () => (
  <section className="drivers-rev">
    <div className="inner-drivers-rev">
      <div className="header-box">
        <p>За рулем</p>
        <h2>Наши водители-партнеры</h2>
      </div>
      <div className="cards-box">
        <div className="card first-card">
          <div className="img-box" />
          <div className="text-box">
            <div className="inner-text-box">
              <p>
                <div
                  dangerouslySetInnerHTML={createMarkup(firstCard.description)}
                />
              </p>
              <p className="drivers-name">
                <div dangerouslySetInnerHTML={createMarkup(firstCard.name)} />
              </p>
            </div>
          </div>
        </div>

        <div className="card second-card">
          <div className="img-box" />
          <div className="text-box">
            <div className="inner-text-box">
              <p>
                <div
                  dangerouslySetInnerHTML={createMarkup(secondCard.description)}
                />
              </p>
              <p className="drivers-name">
                <div dangerouslySetInnerHTML={createMarkup(secondCard.name)} />
              </p>
            </div>
          </div>
        </div>

        <div className="card third-card">
          <div className="img-box" />
          <div className="text-box">
            <div className="inner-text-box">
              <p>
                <div
                  dangerouslySetInnerHTML={createMarkup(thirdCard.description)}
                />
              </p>
              <p className="drivers-name">
                <div dangerouslySetInnerHTML={createMarkup(thirdCard.name)} />
              </p>
            </div>
          </div>
        </div>
      </div>
      <div className="arrow-box">
        <img src={arrowImg} alt="" />
      </div>
    </div>
  </section>
);

export default DriversReviews;
