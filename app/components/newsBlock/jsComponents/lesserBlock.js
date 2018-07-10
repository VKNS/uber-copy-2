import React from 'react';
import PropTypes from 'prop-types';
import SVG from '../../commonlyUsedComponents/SVG';
import ButtonMore from './buttonMore';
import createMarkup from '../../commonlyUsedComponents/createMarkup';

const LesserBlock = props => {
  const { content } = props;

  return (
    <div className={`row-7 ${content.colNum}`}>
      <div className="imgBox">
        <SVG pic={content.image} />
      </div>
      <div className="outer-text-box">
        <div className="heading">
          <h4 dangerouslySetInnerHTML={createMarkup(content.title)} />
        </div>
        <div className="text-box ">
          <p dangerouslySetInnerHTML={createMarkup(content.description)} />
        </div>
        <ButtonMore content={content.buttonPic} />
      </div>
    </div>
  );
};

LesserBlock.propTypes = {
  content: PropTypes.object.isRequired,
};

export default LesserBlock;
