import React from 'react';
import PropTypes from 'prop-types';
import createMarkup from 'components/commonlyUsedComponents/createMarkup/createMarkup';
import SVG from 'components/commonlyUsedComponents/SVG/svg';

const LinkDesc = ({ content }) => (
  <div className="soc-column">
    <span className="soc-link">
      <a href={content.link}>
        <span className="icon">
          <SVG pic={content.image} />
        </span>
        <span
          className={`description ${content.descClass}`}
          dangerouslySetInnerHTML={createMarkup(content.description)}
        />
      </a>
    </span>
  </div>
);

LinkDesc.propTypes = {
  content: PropTypes.object.isRequired,
};

export default LinkDesc;
