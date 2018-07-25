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

import classNames from 'classnames';

import { firstDot, secondDot } from './constants';
import SVG from '../commonlyUsedComponents/SVG/svg';
import './styles/driversReviews.css';
import Card from './jsComponents/card';

class DriversReviews extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      activeDot: firstDot,
    };
  }

  handleClick = id => {
    this.setState({
      activeDot: id === firstDot ? firstDot : secondDot,
    });
  };

  render() {
    const {
      content: { forloop, imageBefore, imageNext },
    } = this.props;
    const dotList = [firstDot, secondDot];

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
              {forloop.map(card => (
                <div key={card.id}>
                  <Slide index={card.id}>
                    <Card content={card} />
                  </Slide>
                </div>
              ))}
            </Slider>

            <ButtonBack
              className={classNames({
                'arrow-box before': true,
                'not-visible': this.state.activeDot === firstDot,
              })}
              onClick={() => this.handleClick(firstDot)}
            >
              <SVG pic={imageBefore} />
            </ButtonBack>
            <ButtonNext
              className={classNames({
                'arrow-box next': true,
                'not-visible': this.state.activeDot === secondDot,
              })}
              onClick={() => this.handleClick(secondDot)}
            >
              <SVG pic={imageNext} />
            </ButtonNext>

            <div className="dots-box">
              <div className="inner-dots-box">
                {dotList.map(num => (
                  <Dot
                    className="dot"
                    slide={num}
                    onClick={() => this.handleClick(num)}
                  >
                    <div
                      className={
                        this.state.activeDot === num
                          ? 'inner-dot_clicked'
                          : 'inner-dot'
                      }
                    />
                  </Dot>
                ))}
              </div>
            </div>
          </CarouselProvider>
        </div>
      </section>
    );
  }
}

DriversReviews.propTypes = {
  content: PropTypes.shape({
    forloop: PropTypes.array.isRequired,
    imageBefore: PropTypes.object.isRequired,
    imageNext: PropTypes.object.isRequired,
  }),
};

export default DriversReviews;
