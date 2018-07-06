import React from 'react';
import PropTypes from 'prop-types';

function createMarkup(val) {
  return { __html: val };
}

const Card = props => {
  const { cardNum, description, name } = props;

  return (
    <div className={`card ${cardNum}`}>
      <div className="img-box" />
      <div className="text-box">
        <div className="inner-text-box">
          <p dangerouslySetInnerHTML={createMarkup(description)} />
          <p
            className="drivers-name"
            dangerouslySetInnerHTML={createMarkup(name)}
          />
        </div>
      </div>
    </div>
  );
};

Card.propTypes = {
  cardNum: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
};
export default Card;
