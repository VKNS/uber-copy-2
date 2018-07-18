import React from 'react';
import PropTypes from 'prop-types';
import createMarkup from 'components/commonlyUsedComponents/createMarkup/createMarkup';

const Card = ({ content: { name, description, cardNum } }) => (
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

Card.propTypes = {
  content: PropTypes.object.isRequired,
};
export default Card;
