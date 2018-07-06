import React from 'react';
import PropTypes from 'prop-types';

function createMarkup(val) {
  return { __html: val };
}

const LinkDesc = props => {
  const { link, img, descClass, description } = props;

  return (
    <div className="soc-column">
      <span className="soc-link">
        <a href={link}>
          <span className="icon">
            <img src={img} alt="" />
          </span>
          <span
            className={`description ${descClass}`}
            dangerouslySetInnerHTML={createMarkup(description)}
          />
        </a>
      </span>
    </div>
  );
};

LinkDesc.propTypes = {
  link: PropTypes.string.isRequired,
  img: PropTypes.string.isRequired,
  descClass: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
};

export default LinkDesc;
