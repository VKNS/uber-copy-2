import React from 'react';
import PropTypes from 'prop-types';
import ButtonMore from './buttonMore';

function createMarkup(val) {
  return { __html: val };
}

const LesserBlock = props => {
  const { colNum, img, title, description } = props;

  return (
    <div className={`row-7 ${colNum}`}>
      <div className="imgBox">
        <img src={img} alt="" />
      </div>
      <div className="outer-text-box">
        <div className="heading">
          <h4 dangerouslySetInnerHTML={createMarkup(title)} />
        </div>
        <div className="text-box ">
          <p dangerouslySetInnerHTML={createMarkup(description)} />
        </div>
        <ButtonMore />
      </div>
    </div>
  );
};

LesserBlock.propTypes = {
  colNum: PropTypes.string.isRequired,
  img: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
};
export default LesserBlock;
