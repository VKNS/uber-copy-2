import React from 'react';
import './styles/mobLinksFoot.css';

const MobLinksFoot = () => (
  <div className="mob-links-foot">
    <div className="flex-box-1">
      <div className="empty-flex" />
      <div className="mobile-links">
        <div className="first-pic">
          <a href="/">
            <img
              alt="Доступно в App Store"
              src="https://d1a3f4spazzrp4.cloudfront.net/uber-com/1.3.8/d1a3f4spazzrp4.cloudfront.net/illustrations/app-store-apple-f1f919205b.svg"
            />
          </a>
        </div>

        <div className="second-pic">
          <a href="/">
            <img
              alt="Доступно в Google Play"
              src="https://d1a3f4spazzrp4.cloudfront.net/uber-com/1.3.8/d1a3f4spazzrp4.cloudfront.net/illustrations/app-store-google-4d63c31a3e.svg"
            />
          </a>
        </div>
      </div>
    </div>
    <div className="footer">
      <span className="copyright">© Uber Technologies Inc., 2018</span>

      <div className="links">
        <span>
          <a href="/">Конфиденциальность</a>
        </span>
        <span>
          <a href="/">Специальные поездки</a>
        </span>
        <span>
          <a href="/">Условия</a>
        </span>
      </div>
      <div className="empty-flex" />
    </div>
  </div>
);

export default MobLinksFoot;
