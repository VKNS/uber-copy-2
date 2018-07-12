import React from 'react';
import PropTypes from 'prop-types';
import SVG from 'components/commonlyUsedComponents/SVG/svg';
import './styles/searchForm.css';

const SearchForm = ({ content }) => (
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
          <SVG pic={content.image1} />
        </div>
      </div>
    </div>
    <div className="img-box">
      <SVG pic={content.image2} />
    </div>
  </section>
);

SearchForm.propTypes = {
  content: PropTypes.object.isRequired,
};
export default SearchForm;
