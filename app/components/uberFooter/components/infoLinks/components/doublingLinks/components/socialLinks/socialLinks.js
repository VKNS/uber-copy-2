import React from 'react';
import PropTypes from 'prop-types';
import './styles/socialLinks.css';

import LinkDesc from './jscomponents/linkDesc';
import LinkIcon from './jscomponents/linkIcon';

const SocialLinks = ({ content: { withDescription, withoutDescription } }) => (
  <div className="social-links">
    {withDescription.map(obj => <LinkDesc key={obj.descClass} content={obj} />)}

    <div className="soc-column mass-icons">
      {withoutDescription.map(obj => <LinkIcon key={obj.id} content={obj} />)}
    </div>
  </div>
);

SocialLinks.propTypes = {
  content: PropTypes.shape({
    withDescription: PropTypes.array.isRequired,
    withoutDescription: PropTypes.array.isRequired,
  }),
};

export default SocialLinks;
