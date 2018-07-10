import React from 'react';
import PropTypes from 'prop-types';
import './styles/newsBlock.css';

import LesserBlock from './jsComponents/lesserBlock';

const NewsBlock = props => {
  const { content } = props;
  return (
    <section className="news-block">
      <h2>Будьте в курсе последних новостей компании Uber</h2>
      <div className="flex-box">
        {content.map(block => <LesserBlock content={block} />)}
      </div>
    </section>
  );
};

NewsBlock.propTypes = {
  content: PropTypes.array.isRequired,
};

export default NewsBlock;
