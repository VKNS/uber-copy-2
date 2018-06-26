import React from 'react';
import './styles/uberFooter.css';
import SearchForm from './components/searchForm';

export default class UberFooter extends React.PureComponent {
  render() {
    return (
      <footer>
        <SearchForm />
      </footer>
    );
  }
}
