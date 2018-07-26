import React from 'react';
import PropTypes from 'prop-types';

import './styles/clientAdv.css';
import AdvBlock from './jsComponents/advBlock';
import Button from './jsComponents/button';

const ClientAdv = ({ content: { forLoop, image } }) => (
  <section className="clients-adv">
    <div className="row">
      {forLoop.map(block => <AdvBlock key={block.id} content={block} />)}
    </div>
    <div className="row-4">
      <Button pic={image} />
    </div>
  </section>
);

ClientAdv.propTypes = {
  content: PropTypes.shape({
    forLoop: PropTypes.array.isRequired,
    image: PropTypes.object.isRequired,
  }),
};

export default ClientAdv;
