import React from 'react';
import './styles/infoLinks.css';

import MobLinksFoot from './components/mobLinksFoot';
import DoublingLinks from './components/doublingLinks';
import SocialLinks from './components/socialLinks';

export default class InfolLinks extends React.PureComponent {
  render() {
    return (
      <section className="info-Links">
        <div className="inner-info-links">
          <SocialLinks />
          <DoublingLinks />
          <MobLinksFoot />
        </div>
      </section>
    );
  }
}
