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

class DriversReviews extends React.Component {
  state = {
    firstDot: 'inner-dot',
    secondDot: 'inner-dot',
  };

  handleClick = id => {
    if (id === 'firstDot') {
      this.setState({ firstDot: 'inner-dot_clicked', secondDot: 'inner-dot' });
    } else {
      this.setState({ firstDot: 'inner-dot', secondDot: 'inner-dot_clicked' });
    }
  };

  render() {
    const { content } = this.props;

    return (
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
              {content.forloop.map(card => (
                <Slide index={card.index}>
                  <Card content={card} />
                </Slide>
              ))}
            </Slider>

            <ButtonBack
              className="arrow-box before"
              onClick={() => this.handleClick('firstDot')}
            >
              <SVG pic={content.imageBefore} />
            </ButtonBack>
            <ButtonNext
              className="arrow-box next"
              onClick={() => this.handleClick('secondDot')}
            >
              <SVG pic={content.imageNext} />
            </ButtonNext>

            <div className="dots-box">
              <div className="inner-dots-box">
                <Dot
                  className="dot"
                  slide={0}
                  onClick={() => this.handleClick('firstDot')}
                >
                  <div className={this.state.firstDot} />
                </Dot>
                <Dot
                  className="dot"
                  slide={3}
                  onClick={() => this.handleClick('secondDot')}
                >
                  <div className={`${this.state.secondDot}`} />
                </Dot>
              </div>
            </div>
          </CarouselProvider>
        </div>
      </section>
    );
  }
}

DriversReviews.propTypes = {
  content: PropTypes.object,
};

export default DriversReviews;
