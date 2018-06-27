import React from 'react';
import './styles/driversAdv.css';
import arrowImg from './images/arrow.svg';

class DriversAdv extends React.Component {
  render() {
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
              <div className="arrow-box">
                <img src={arrowImg} alt="arr" />
              </div>
            </div>
          </div>
        </div>
      </section>
    );
  }
}

export default DriversAdv;