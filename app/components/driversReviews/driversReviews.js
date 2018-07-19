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

import constants from './constants';
import SVG from '../commonlyUsedComponents/SVG/svg';
import './styles/driversReviews.css';
import Card from './jsComponents/card';

class DriversReviews extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      activeDot: constants.firstDot,
    };
  }

  handleClick = id => {
    this.setState({
      activeDot:
        id === constants.firstDot ? constants.firstDot : constants.secondDot,
    });
  };

  render() {
    const { content } = this.props;
    const dotList = [constants.firstDot, constants.secondDot];

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
              className={classNames({
                'arrow-box before': true,
                'not-visible': this.state.activeDot === constants.firstDot,
              })}
              onClick={() => this.handleClick(constants.firstDot)}
            >
              <SVG pic={content.imageBefore} />
            </ButtonBack>
            <ButtonNext
              className={classNames({
                'arrow-box next': true,
                'not-visible': this.state.activeDot === constants.secondDot,
              })}
              onClick={() => this.handleClick(constants.secondDot)}
            >
              <SVG pic={content.imageNext} />
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
  content: PropTypes.object,
};

export default DriversReviews;
