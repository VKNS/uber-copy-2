import React from 'react';
import PropTypes from 'prop-types';
import './styles/socialLinks.css';

import LinkDesc from './jscomponents/linkDesc';
import LinkIcon from './jscomponents/linkIcon';

const SocialLinks = ({ content: { withDescription, withoutDescription } }) => (
  <div className="social-links">
    {withDescription.map(obj => <LinkDesc content={obj} />)}

    <div className="soc-column mass-icons">
      {withoutDescription.map(obj => <LinkIcon content={obj} />)}
    </div>
  </div>
);

SocialLinks.propTypes = {
  content: PropTypes.object.isRequired,
};

export default SocialLinks;
