import React from 'react';
import PropTypes from 'prop-types';
import './styles/doublingLinks.css';
import SocialLinks from './components/socialLinks/socialLinks';

const DoublingLinks = ({ content }) => (
  <div className="doubling-links">
    <div className="flex flex-1">
      <SocialLinks content={content} />
    </div>

    <div className="flex flex-2">
      <div className="column about-comp">
        <a className="title " href="/">
          О компании Uber
        </a>
        <a href="/">Как работает Uber</a>
        <a href="/">Сообщество</a>
        <a href="/">Новости</a>
        <a href="/">Блог</a>
        <a href="/">Uber Api</a>
        <a href="/">Безопасность</a>
        <a href="/">Вакансии</a>
        <a href="/">Страны</a>
      </div>
      <div className="column">
        <a className="title" href="/">
          Предложения
        </a>
        <a href="/">UberEATS</a>
        <a href="/">Uber для бизнеса</a>
        <a href="/">Uber Freight</a>
        <a href="/">Uber Health</a>
      </div>
    </div>

    <div className="flex flex-3">
      <div className="column for-users">
        <a className="title" href="/">
          Для пользователей
        </a>
        <a href="/">Регистрация пользователя</a>
        <a href="/">Расчетная стоимость поездки</a>
        <a href="/">Города</a>
        <a href="/">Аэропорты</a>
        <a href="/">Подарочные карты</a>
      </div>
      <div className="column">
        <a className="title" href="/">
          Для водителей
        </a>
        <a href="/">Регистрация водителя</a>
        <a href="/">Сравнение Uber с другими видами работы за рулем</a>
        <a href="/">Требования</a>
        <a href="/">Приложение для водителей</a>
      </div>
    </div>
  </div>
);

DoublingLinks.propTypes = {
  content: PropTypes.object.isRequired,
};
export default DoublingLinks;
