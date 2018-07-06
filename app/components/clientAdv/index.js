import React from 'react';
import './styles/clientAdv.css';
import AdvBlock from './jsComponents/advBlock';
import Button from './jsComponents/button';

import womanImg from './images/woman-with-phone.svg';
import carImg from './images/car-with-phone.svg';
import pigImg from './images/piggy-bank.svg';

import arrowImg from './images/arrow.svg';
import advText from './text/advantages.json';

let imgList = [womanImg, carImg, pigImg];
let State = {};

let i = 0;
Object.keys(advText).forEach(element => {
  State[element] = {};
  State[element].text = advText[element];
  State[element].img = imgList[i];
  i += 1;
});

const ClientAdv = () => (
  <section className="clients-adv">
    <div className="row">
      {Object.values(State).map(block => (
        <AdvBlock
          pic={block.img}
          name={block.text.name}
          description={block.text.description}
        />
      ))}
    </div>
    <div className="row-4">
      <Button pic={arrowImg} />
    </div>
  </section>
);

export default ClientAdv;
