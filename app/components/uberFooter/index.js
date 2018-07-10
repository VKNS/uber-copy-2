import React from 'react';
import PropTypes from 'prop-types';
import './styles/uberFooter.css';
import SearchForm from './components/searchForm';
import InfoLinks from './components/infoLinks';

const UberFooter = props => {
  const { content } = props;
  return (
    <footer>
      <SearchForm content={content.searchFormContent} />
      <InfoLinks content={content.socialLinks} />
    </footer>
  );
};

UberFooter.propTypes = {
  content: PropTypes.object.isRequired,
};
export default UberFooter;
