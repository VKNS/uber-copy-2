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
import Header from 'components/header/header';
import MainAd from 'components/mainAd/mainAd';
import ClientAdv from 'components/clientAdv/clientAdv';
import TripPriceCount from 'components/tripPriceCount/tripPriceCount';
import DriversAdv from 'components/driversAdv/driversAdv';
import DriversReviews from 'components/driversReviews/driversReviews';
import CompanyAdv from 'components/companyAdv/companyAdv';
import NewsBlock from 'components/newsBlock/newsBlock';
import UberFooter from 'components/uberFooter/uberFooter';
import './styles/homePage.css';

import {
  clientAdv,
  companyAdv,
  driversAdv,
  driversReviews,
  header,
  mainAd,
  newsBlock,
  tripPriceCount,
  uberFooter,
} from './componentContent/homePageContent';

const HomePage = () => (
  <div className="container">
    <Header content={header} />
    <MainAd content={mainAd} />
    <ClientAdv content={clientAdv} />
    <TripPriceCount content={tripPriceCount} />
    <DriversAdv content={driversAdv} />
    <DriversReviews content={driversReviews} />
    <CompanyAdv content={companyAdv} />
    <NewsBlock content={newsBlock} />
    <UberFooter content={uberFooter} />
  </div>
);

export default HomePage;
