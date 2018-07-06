import React from 'react';
import './styles/driversRegistr.css';
import arrowImg from './images/small-arrow.svg';
import blackArrowImg from './images/black-arrow.svg';
import { licenseAgreement } from './text/driversRegistr.json';

function createMarkup(val) {
  return { __html: val };
}

const DriversRegistr = () => (
  <div className="form-from1024">
    <div className="inner-form-from1024">
      <div className="form-wrapper">
        <form>
          <div className="phrase-1">
            <div className="img-box" />
            <div className="link-box">
              <h4>Пользуйтесь Uber</h4>
              <a href="/">
                регистрация
                <span>
                  <img src={blackArrowImg} alt="" />
                </span>
              </a>
            </div>
          </div>
          <div className="line">
            <div className="thin-line-before" />
            <span>или</span>
            <div className="thin-line-after" />
          </div>
          <div className="phrase-2">
            <div className="img-box" />
            <h4>Зарегистрируйтесь, чтобы стать</h4>
            <h4 className="h4-2">водителем</h4>
          </div>
          <div className="form">
            <div className="ns-outer window-input ">
              <div className="ns border">
                <input placeholder="Имя" />
              </div>
              <div className=" ns border">
                <input placeholder="Фамилия" />
              </div>
            </div>
            <div className="window-input border ">
              <input placeholder="Эл. почта" />
            </div>
            <div className="window-input border ">
              <input placeholder="Телефон" />
            </div>
            <div className="window-input border ">
              <input placeholder="Создать пароль" />
            </div>
            <div className="window-input border city-input">
              <input placeholder="Город" />
            </div>
            <div className="window-input border code-input">
              <input placeholder="Пригласительный код (необязательно)" />
            </div>
            <div className="btn-register ">
              <div className="inner-btn-register">
                <span className="text">зарегистрироваться</span>
                <span className="img-box">
                  <img src={arrowImg} alt="" />
                </span>
              </div>
            </div>
            <div className="some-text">
              <div className="reg-plz">
                Или <a href="/">зарегистрируйтесь</a> с помощью аккаунта
                пользователя.
              </div>
              <p dangerouslySetInnerHTML={createMarkup(licenseAgreement)} />
              <a id="license-link" href="/">
                Заявление о конфеденциальности водителя-партнера Uber
              </a>
            </div>
          </div>
        </form>
      </div>
    </div>
  </div>
);

export default DriversRegistr;
