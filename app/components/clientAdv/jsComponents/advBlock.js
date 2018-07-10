import React from 'react';
import PropTypes from 'prop-types';
import SVG from '../../commonlyUsedComponents/SVG';
import createMarkup from '../../commonlyUsedComponents/createMarkup';

const AdvBlock = props => {
  const { content } = props;
  return (
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
};

AdvBlock.propTypes = {
  content: PropTypes.object.isRequired,
};

export default AdvBlock;
