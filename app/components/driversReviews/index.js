import React from 'react';
import PropTypes from 'prop-types';
import SVG from '../commonlyUsedComponents/SVG';
/* import { Carousel } from 'react-responsive-carousel';
*/
import './styles/driversReviews.css';
import Card from './jsComponents/card';

const DriversReviews = props => {
  const { content } = props;
  return (
    <section className="drivers-rev">
      <div className="inner-drivers-rev">
        <div className="header-box">
          <p>За рулем</p>
          <h2>Наши водители-партнеры</h2>
        </div>

        <div className="cards-box">
          {content.forloop.map(card => <Card content={card} />)}
        </div>

        <div className="arrow-box">
          <SVG pic={content.image} />
        </div>
      </div>
    </section>
  );
};

DriversReviews.propTypes = {
  content: PropTypes.object.isRequired,
};

export default DriversReviews;
