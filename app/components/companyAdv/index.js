import React from 'react';
import './styles/companyAdv.css';
import arrowImg from './images/small-arrow.svg';
import { compAdv } from './text/companyAdv.json';

function createMarkup(val) {
  return { __html: val };
}

const CompanyAdv = () => (
  <section className="company-adv">
    <div className="from-1025">
      <div className="flex-box">
        <div className="img-box" />
        <div className="text-box">
          <div className="header-box">
            <p>Для организаций</p>
            <h2>Uber для бизнеса</h2>
          </div>
          <div className="description">
            <p dangerouslySetInnerHTML={createMarkup(compAdv)} />
          </div>
          <div className="btn-more">
            <span>подробнее</span>
            <span className="arrow">
              <img src={arrowImg} alt="" />
            </span>
          </div>
        </div>
      </div>
    </div>
  </section>
);

export default CompanyAdv;
