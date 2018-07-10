import React from 'react';
import PropTypes from 'prop-types';
import SVG from '../commonlyUsedComponents/SVG';
import './styles/companyAdv.css';
import createMarkup from '../commonlyUsedComponents/createMarkup';

const CompanyAdv = props => {
  const { content } = props;
  return (
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
              <p dangerouslySetInnerHTML={createMarkup(content.description)} />
            </div>
            <div className="btn-more">
              <span>подробнее</span>
              <span className="arrow">
                <SVG pic={content.image} />
              </span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

CompanyAdv.propTypes = {
  content: PropTypes.object.isRequired,
};

export default CompanyAdv;
