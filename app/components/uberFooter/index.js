import React from 'react';
import './styles/uberFooter.css';
import SearchForm from './components/searchForm';
import InfoLinks from './components/infoLinks';

export default class UberFooter extends React.PureComponent {
  render() {
    return (
      <footer>
        <SearchForm />
        <InfoLinks />
      </footer>
    );
  }
}
