import React from 'react';
import PropTypes from 'prop-types';
import SVG from '../commonlyUsedComponents/SVG';
import './styles/driversAdv.css';

const DriversAdv = props => {
  const { content } = props;
  return (
    <section className="drivers-advantages">
      <div className="inner-box">
        <div className="header">График выбираете вы</div>
        <div className="header">Ваш доход</div>

        <div className="add-text">
          <h3>
            Сотрудничать с Uber — удобно и выгодно. Это возможность для
            водителей-партнеров иметь свободный график и дополнительный доход.
          </h3>
        </div>

        <div className="drivers-adv-btn">
          <div className="drivers-link">
            преимущества работы водителем-партнером uber
            <span className="arrow-box">
              <SVG pic={content.image} />
            </span>
          </div>
        </div>
      </div>
    </section>
  );
};

DriversAdv.propTypes = {
  content: PropTypes.object.isRequired,
};
export default DriversAdv;
