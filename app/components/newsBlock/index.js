import React from 'react';
import './styles/newsBlock.css';
import speakerImg from './images/speaker.svg';
import globeImg from './images/globe.svg';
import LesserBlock from './jsComponents/lesserBlock';
import Text from './text/newsBlock.json';

const State = {};
const colNums = ['column-1', 'column-2'];
const imgList = [speakerImg, globeImg];

let i = 0;
Object.keys(Text).forEach(element => {
  State[element] = {};
  State[element].text = Text[element];
  State[element].img = imgList[i];
  State[element].colNum = colNums[i];
  i += 1;
});

const NewsBlock = () => (
  <section className="news-block">
    <h2>Будьте в курсе последних новостей компании Uber</h2>
    <div className="flex-box">
      {Object.values(State).map(block => (
        <LesserBlock
          colNum={block.colNum}
          img={block.img}
          title={block.text.title}
          description={block.text.description}
        />
      ))}
    </div>
  </section>
);

export default NewsBlock;
