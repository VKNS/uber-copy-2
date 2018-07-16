import React from 'react';
import PropTypes from 'prop-types';
import SVG from 'components/commonlyUsedComponents/SVG/svg';
import createMarkup from 'components/commonlyUsedComponents/createMarkup/createMarkup';

const AdvBlock = ({ content: { image, name, description } }) => (
  <div className="row-3">
    <div className="imgBox">
      <SVG pic={image} />
    </div>
    <div className="heading">
      <h4 dangerouslySetInnerHTML={createMarkup(name)} />
    </div>
    <div className="advantages-text ">
      <p dangerouslySetInnerHTML={createMarkup(description)} />
    </div>
  </div>
);

AdvBlock.propTypes = {
  content: PropTypes.object.isRequired,
};

export default AdvBlock;
