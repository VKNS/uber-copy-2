import React from 'react';
import PropTypes from 'prop-types';
import createMarkup from 'components/commonlyUsedComponents/createMarkup/createMarkup';
import SVG from 'components/commonlyUsedComponents/SVG/svg';

const LinkDesc = ({ content: { link, image, descClass, description } }) => (
  <div className="soc-column">
    <span className="soc-link">
      <a href={link}>
        <span className="icon">
          <SVG pic={image} />
        </span>
        <span
          className={`description ${descClass}`}
          dangerouslySetInnerHTML={createMarkup(description)}
        />
      </a>
    </span>
  </div>
);

LinkDesc.propTypes = {
  content: PropTypes.object.isRequired,
};

export default LinkDesc;
