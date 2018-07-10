import React from 'react';
import PropTypes from 'prop-types';
import './styles/clientAdv.css';

import AdvBlock from './jsComponents/advBlock';
import Button from './jsComponents/button';

const ClientAdv = props => {
  const { content } = props;
  return (
    <section className="clients-adv">
      <div className="row">
        {content.forLoop.map(block => <AdvBlock content={block} />)}
      </div>
      <div className="row-4">
        <Button pic={content.image} />
      </div>
    </section>
  );
};

ClientAdv.propTypes = {
  content: PropTypes.object.isRequired,
};

export default ClientAdv;
