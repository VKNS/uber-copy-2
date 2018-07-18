import React from 'react';
import PropTypes from 'prop-types';
import createMarkup from 'components/commonlyUsedComponents/createMarkup/createMarkup';

const Card = ({ content }) => (
  <div className={`card ${content.cardNum}`}>
    <div className="img-box" />
    <div className="text-box">
      <div className="inner-text-box">
        <p dangerouslySetInnerHTML={createMarkup(content.description)} />
        <p
          className="drivers-name"
          dangerouslySetInnerHTML={createMarkup(content.name)}
        />
      </div>
    </div>
  </div>
);

Card.propTypes = {
  content: PropTypes.object.isRequired,
};
export default Card;
