import React from 'react';
import PropTypes from 'prop-types';
import SVG from 'components/commonlyUsedComponents/SVG/svg';
import createMarkup from 'components/commonlyUsedComponents/createMarkup/createMarkup';

const AdvBlock = ({ content }) => (
  <div className="row-3">
    <div className="imgBox">
      <SVG pic={content.image} />
    </div>
    <div className="heading">
      <h4 dangerouslySetInnerHTML={createMarkup(content.name)} />
    </div>
    <div className="advantages-text ">
      <p dangerouslySetInnerHTML={createMarkup(content.description)} />
    </div>
  </div>
);

AdvBlock.propTypes = {
  content: PropTypes.object.isRequired,
};

export default AdvBlock;
