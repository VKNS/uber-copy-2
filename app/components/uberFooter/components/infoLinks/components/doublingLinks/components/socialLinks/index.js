import React from 'react';
import './styles/socialLinks.css';
import LocImg from './images/loc-icon.svg';
import LangImg from './images/language-icon.svg';
import HelpImg from './images/help-icon.svg';
import FBImg from './images/facebook-icon.svg';
import TwitImg from './images/twitter-icon.svg';
import InImg from './images/in-icon.svg';
import InstagrImg from './images/instagram-icon.svg';

import LinkDesc from './jscomponents/linkDesc';
import LinkIcon from './jscomponents/linkIcon';

const State = {
  withDescription: {
    first: ['', LocImg, 'location', 'Введите Местоположение'],
    second: ['', LangImg, 'lang-link', 'русский'],
    third: ['', HelpImg, 'help', 'Помощь'],
  },
  withoutDescription: {
    first: ['', FBImg],
    second: ['', TwitImg],
    third: ['', InImg],
    fourth: ['', InstagrImg],
  },
};

const SocialLinks = () => (
  <div className="social-links">
    {Object.values(State.withDescription).map(obj => (
      <LinkDesc
        link={obj[0]}
        img={obj[1]}
        descClass={obj[2]}
        description={obj[3]}
      />
    ))}

    <div className="soc-column mass-icons">
      {Object.values(State.withoutDescription).map(obj => (
        <LinkIcon link={obj[0]} img={obj[1]} />
      ))}
    </div>
  </div>
);

export default SocialLinks;
