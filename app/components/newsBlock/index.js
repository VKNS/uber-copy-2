import React from 'react';
import './styles/newsBlock.css';
import speakerImg from './images/speaker.svg';
import globeImg from './images/globe.svg';
import arrowImg from './images/small-arrow.svg';
import { news, info } from './text/newsBlock.json';

class NewsBlock extends React.Component {
  render() {
    return (
      <section className="news-block">
        <h2>Будьте в курсе последних новостей компании Uber</h2>
        <div className="row-7 column-1">
          <div className="imgBox">
            <img src={speakerImg} alt="" />
          </div>
          <div className="heading">
            <h4>Наши новости</h4>
          </div>
          <div className="text-box ">
            <p>{news}</p>
          </div>
          <div className="btn-more">
            <span>подробнее</span>
            <span className="arrow">
              <img src={arrowImg} alt="" />
            </span>
          </div>
        </div>
        <div className="row-7 column-2">
          <div className="imgBox">
            <img src={globeImg} alt="" />
          </div>
          <div className="heading">
            <h4>Информация о компании</h4>
          </div>
          <div className="text-box">
            <p>{info}</p>
          </div>
          <div className="btn-more">
            <span>подробнее</span>
            <span className="arrow">
              <img src={arrowImg} alt="" />
            </span>
          </div>
        </div>
      </section>
    );
  }
}

export default NewsBlock;
