/*
 * HomePage
 *
 * This is the first thing users see of our App, at the '/' route
 *
 * NOTE: while this component should technically be a stateless functional
 * component (SFC), hot reloading does not currently support SFCs. If hot
 * reloading is not a necessity for you then you can refactor it and remove
 * the linting exception.
 */

import React from 'react';
import Header from 'components/header';
import MainAd from 'components/mainAd';
import ClientAdv from 'components/clientAdv';
import TripPriceCount from 'components/tripPriceCount';
import DriversAdv from 'components/driversAdv';
import DriversReviews from 'components/driversReviews';
import CompanyAdv from 'components/companyAdv';
import NewsBlock from 'components/newsBlock';
import UberFooter from 'components/uberFooter';
import './styles/homePage.css';

/* eslint-disable react/prefer-stateless-function */
export default class HomePage extends React.PureComponent {
  render() {
    return (
      <div className="container">
        <Header />
        <MainAd />
        <ClientAdv />
        <TripPriceCount />
        <DriversAdv />
        <DriversReviews />
        <CompanyAdv />
        <NewsBlock />
        <UberFooter />
      </div>
    );
  }
}
