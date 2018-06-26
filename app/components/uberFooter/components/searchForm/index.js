import React from 'react';
import arrowImg from '../../images/arrow.svg';

export default class SearchForm extends React.PureComponent {
  render() {
    return (
      <section className="search-form">
        <div className="inner-search-form">
          <div className="header-box">
            <h3>
              <span>Uber доступен в Сан-Франциско</span>
              <span>и еще 632 городах по всему миру</span>
            </h3>
          </div>
          <div className="input-box">
            <div className="row actual-input-box">
              <input placeholder="Найти город" />
            </div>
            <div className="row btn-search">
              <img src={arrowImg} alt="" />
            </div>
          </div>
        </div>
      </section>
    );
  }
}
