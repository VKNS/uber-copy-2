import React from 'react';
import PropTypes from 'prop-types';

import {
  CarouselProvider,
  Slider,
  Slide,
  ButtonBack,
  ButtonNext,
  Dot,
} from 'pure-react-carousel';
import 'pure-react-carousel/dist/react-carousel.es.css';

import SVG from '../commonlyUsedComponents/SVG/svg';
import './styles/driversReviews.css';
import Card from './jsComponents/card';

const DriversReviews = ({ content: { forloop, imageBefore, imageNext } }) => (
  <section className="drivers-rev">
    <div className="inner-drivers-rev">
      <div className="header-box">
        <p>За рулем</p>
        <h2>Наши водители-партнеры</h2>
      </div>
    </div>
    <div className="cards-box">
      <CarouselProvider
        naturalSlideWidth={2}
        naturalSlideHeight={3}
        totalSlides={4}
        visibleSlides={2.1}
        step={2}
      >
        <Slider>
          {forloop.map(card => (
            <Slide index={card.index}>
              <Card content={card} />
            </Slide>
          ))}
        </Slider>

        <ButtonBack className="arrow-box before">
          <SVG pic={imageBefore} />
        </ButtonBack>
        <ButtonNext className="arrow-box next">
          <SVG pic={imageNext} />
        </ButtonNext>

        <div className="dots-box">
          <div className="inner-dots-box">
            {[0, 3].map(num => (
              <Dot className="dot" slide={num}>
                <div className="inner-dot" />
              </Dot>
            ))}
          </div>
        </div>
      </CarouselProvider>
    </div>
  </section>
);

DriversReviews.propTypes = {
  content: PropTypes.object.isRequired,
};

export default DriversReviews;
