import React from 'react';
import PropTypes from 'prop-types';

const Button = props => {
  const { pic } = props;
  return (
    <div className="button advantages-link">
      <div className="link">преимущества поездок с uber</div>
      <div className="arrow">
        <img src={pic} alt="arr" />
      </div>
    </div>
  );
};

Button.propTypes = {
  pic: PropTypes.string.isRequired,
};

export default Button;
