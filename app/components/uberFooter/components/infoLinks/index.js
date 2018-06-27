import React from 'react';
import './styles/infoLinks.css';
import LocImg from './images/loc-icon.svg';
import LangImg from './images/language-icon.svg';
import HelpImg from './images/help-icon.svg';
import FBImg from './images/facebook-icon.svg';
import TwitImg from './images/twitter-icon.svg';
import InImg from './images/in-icon.svg';
import InstagrImg from './images/instagram-icon.svg';

export default class InfolLinks extends React.PureComponent {
  render() {
    return (
      <section className="info-Links">
        <div className="inner-info-links">
          <div className="social-links">
            <div className="column">
              <span className="link">
                <a href="/">
                  <span className="icon">
                    <img src={LocImg} alt="" />
                  </span>
                  <span className="description">Введите Местоположение</span>
                </a>
              </span>
            </div>
            <div className="column">
              <span className="link">
                <a href="/">
                  <span className="icon">
                    <img src={LangImg} alt="" />
                  </span>
                  <span className="description lang-link">русский</span>
                </a>
              </span>
            </div>
            <div className="column">
              <span className="link">
                <a href="/">
                  <span className="icon">
                    <img src={HelpImg} alt="" />
                  </span>
                  <span className="description">Помощь</span>
                </a>
              </span>
            </div>
            <div className="column mass-icons">
              <span className="icon link">
                <a href="/">
                  <img src={FBImg} alt="" />
                </a>
              </span>
              <span className="icon link">
                <a href="/">
                  <img src={TwitImg} alt="" />
                </a>
              </span>
              <span className="icon link">
                <a href="/">
                  <img src={InImg} alt="" />
                </a>
              </span>
              <span className="icon">
                <a href="/">
                  <img src={InstagrImg} alt="" />
                </a>
              </span>
            </div>
          </div>
          <div className="doubling-links">
            <div className="column">
              <a className="title" href="/">
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
          <div className="mobile-links">
            <div className="first-pic">
              <a href="/">
                <img
                  alt="Доступно в App Store"
                  src="https://d1a3f4spazzrp4.cloudfront.net/uber-com/1.3.8/d1a3f4spazzrp4.cloudfront.net/illustrations/app-store-apple-f1f919205b.svg"
                />
              </a>
            </div>
            <div className="second-pic">
              <a href="/">
                <img
                  alt="Доступно в Google Play"
                  src="https://d1a3f4spazzrp4.cloudfront.net/uber-com/1.3.8/d1a3f4spazzrp4.cloudfront.net/illustrations/app-store-google-4d63c31a3e.svg"
                />
              </a>
            </div>
          </div>
          <div className="footer">
            <span className="copyright">© Uber Technologies Inc., 2018</span>
            <div className="links">
              <span>
                <a href="/">Конфиденциальность</a>
              </span>
              <span>
                <a href="/">Специальные поездки</a>
              </span>
              <span>
                <a href="/">Условия</a>
              </span>
            </div>
          </div>
        </div>
      </section>
    );
  }
}
