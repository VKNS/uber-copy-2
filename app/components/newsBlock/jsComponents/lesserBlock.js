import React from 'react';
import PropTypes from 'prop-types';
import SVG from 'components/commonlyUsedComponents/SVG/svg';
import createMarkup from 'components/commonlyUsedComponents/createMarkup/createMarkup';
import ButtonMore from './buttonMore/buttonMore';

const LesserBlock = ({ content }) => (
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

LesserBlock.propTypes = {
  content: PropTypes.object.isRequired,
};

export default LesserBlock;
