import React from 'react';
import PropTypes from 'prop-types';
import './styles/infoLinks.css';

import MobLinksFoot from './components/mobLinksFoot';
import DoublingLinks from './components/doublingLinks';

const InfolLinks = props => {
  const { content } = props;
  return (
    <section className="info-Links">
      <div className="inner-info-links">
        <DoublingLinks content={content} />
        <MobLinksFoot />
      </div>
    </section>
  );
};

InfolLinks.propTypes = {
  content: PropTypes.object.isRequired,
};
export default InfolLinks;
