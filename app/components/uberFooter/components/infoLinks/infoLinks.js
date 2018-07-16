import React from 'react';
import PropTypes from 'prop-types';
import './styles/infoLinks.css';

import MobLinksFoot from './components/mobLinksFoot/mobLinksFoot';
import DoublingLinks from './components/doublingLinks/doublingLinks';

const InfolLinks = ({ content }) => (
  <section className="info-Links">
    <div className="inner-info-links">
      <DoublingLinks content={content} />
      <MobLinksFoot />
    </div>
  </section>
);

InfolLinks.propTypes = {
  content: PropTypes.object.isRequired,
};
export default InfolLinks;
