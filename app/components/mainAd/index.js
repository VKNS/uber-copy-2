import React from 'react';
import './styles/mainAd.css';

class MainAd extends React.Component {
  render() {
    return (
      <div class="main-ad">
        <div class="catchprase">
          <h1 id="MainPhrase">В путь с Uber День принадлежит вам </h1>
        </div>
        <div class="ad-picture" />
        <div class="start-using" />
      </div>
    );
  }
}

export default MainAd;
