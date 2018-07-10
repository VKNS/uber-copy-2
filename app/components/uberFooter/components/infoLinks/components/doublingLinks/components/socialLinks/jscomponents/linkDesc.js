import React from 'react';
import PropTypes from 'prop-types';
import SVG from '../../../../../../../../commonlyUsedComponents/SVG';
import createMarkup from '../../../../../../../../commonlyUsedComponents/createMarkup';

const LinkDesc = props => {
  const { content } = props;

  return (
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
};

LinkDesc.propTypes = {
  content: PropTypes.object.isRequired,
};

export default LinkDesc;
