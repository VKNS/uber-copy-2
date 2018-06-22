import React from 'react';
import './styles/mainAd.css';

class MainAd extends React.Component {
  render() {
    return (
      <div className="main-ad">
        <h2>HELLO</h2>
        <div className="catchprase">
          <h1 id="MainPhrase">В путь с Uber </h1>
          <p>День принадлежит вам</p>
        </div>
        <div className="ad-picture" />
        <div className="start-using" />
      </div>
    );
  }
}

export default MainAd;
