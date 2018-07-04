import React from 'react';
import './styles/infoLinks.css';

import MobLinksFoot from './components/mobLinksFoot';
import DoublingLinks from './components/doublingLinks';

const InfolLinks = () => (
  <section className="info-Links">
    <div className="inner-info-links">
      <DoublingLinks />
      <MobLinksFoot />
    </div>
  </section>
);

export default InfolLinks;
