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

import PageContent from './componentContent/homePageContent.json';

const HomePage = () => (
  <div className="container">
    <Header content={PageContent.header} />
    <MainAd content={PageContent.mainAd} />
    <ClientAdv content={PageContent.clientAdv} />
    <TripPriceCount content={PageContent.tripPriceCount} />
    <DriversAdv content={PageContent.driversAdv} />
    <DriversReviews content={PageContent.driversReviews} />
    <CompanyAdv content={PageContent.companyAdv} />
    <NewsBlock content={PageContent.newsBlock} />
    <UberFooter content={PageContent.uberFooter} />
  </div>
);

export default HomePage;
