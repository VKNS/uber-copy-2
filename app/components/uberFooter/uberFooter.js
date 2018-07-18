import React from 'react';
import PropTypes from 'prop-types';
import './styles/uberFooter.css';
import SearchForm from './components/searchForm/searchForm';
import InfoLinks from './components/infoLinks/infoLinks';

const UberFooter = ({ content: { searchFormContent, socialLinks } }) => (
  <footer>
    <SearchForm content={searchFormContent} />
    <InfoLinks content={socialLinks} />
  </footer>
);

UberFooter.propTypes = {
  content: PropTypes.shape({
    searchFormContent: PropTypes.object.isRequired,
    socialLinks: PropTypes.object.isRequired,
  }),
};
export default UberFooter;
