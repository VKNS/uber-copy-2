import React from 'react';
import './styles/searchForm.css';
import arrowImg from './images/arrow.svg';
import cityImg from './images/city.svg';

const SearchForm = () => (
  <section className="search-form">
    <div className="inner-search-form">
      <div className="header-box">
        <h3>
          <div className="header3">Uber доступен в Сан-Франциско</div>
          <div className="header3">и еще 632 городах по всему миру</div>
        </h3>
      </div>
      <div className="input-box">
        <div className="row input-box-1">
          <input placeholder="Найти город" />
        </div>
        <div className="row btn-search">
          <img src={arrowImg} alt="" />
        </div>
      </div>
    </div>
    <div className="img-box">
      <img src={cityImg} alt="city pic" />
    </div>
  </section>
);

export default SearchForm;
