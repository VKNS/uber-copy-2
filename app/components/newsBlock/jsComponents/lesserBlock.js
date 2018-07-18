import React from 'react';
import PropTypes from 'prop-types';
import SVG from 'components/commonlyUsedComponents/SVG/svg';
import createMarkup from 'components/commonlyUsedComponents/createMarkup/createMarkup';
import ButtonMore from './buttonMore/buttonMore';

const LesserBlock = ({
  content: { colNum, image, title, description, buttonPic },
}) => (
  <div className={`row-7 ${colNum}`}>
    <div className="imgBox">
      <SVG pic={image} />
    </div>
    <div className="outer-text-box">
      <div className="heading">
        <h4 dangerouslySetInnerHTML={createMarkup(title)} />
      </div>
      <div className="text-box ">
        <p dangerouslySetInnerHTML={createMarkup(description)} />
      </div>
      <ButtonMore content={buttonPic} />
    </div>
  </div>
);

LesserBlock.propTypes = {
  content: PropTypes.shape({
    colNum: PropTypes.string.isRequired,
    image: PropTypes.object.isRequired,
    title: PropTypes.string.isRequired,
    description: PropTypes.string.isRequired,
    buttonPic: PropTypes.object.isRequired,
  }),
};

export default LesserBlock;
