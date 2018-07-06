import React from 'react';
import PropTypes from 'prop-types';
/*import SVG from './../../commonlyUsedComponents/SVG';*/

function createMarkup(val) {
  return { __html: val };
}

const AdvBlock = props => {
  const { pic, name, description } = props;
  return (
    <div className="row-3">
      <div className="imgBox">
        <img src={pic} alt="" />
      </div>
      <div className="heading">
        <h4>{name}</h4>
      </div>
      <div className="advantages-text ">
        <p dangerouslySetInnerHTML={createMarkup(description)} />
      </div>
    </div>
  );
};

AdvBlock.propTypes = {
  name: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
  pic: PropTypes.string.isRequired,
};

export default AdvBlock;
