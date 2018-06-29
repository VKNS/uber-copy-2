import React from 'react';
import './styles/driversRegistr.css';
import arrowImg from './images/small-arrow.svg';

const DriversRegistr = () => (
  <div className="form-from1024">
    <div className="form-wrapper">
      <form>
        <div className="phrase-1">
          <div className="img-box" />
          <h4>Пользуйтесь Uber</h4>
          <a href="/">Регистрация</a>
        </div>
        <div className="line">
          <span>или</span>
        </div>
        <div className="phrase-2">
          <div className="img-box" />
          <h4>Зарегистрируйтесь, чтобы стать</h4>
          <h4>водителем</h4>
        </div>
        <div className="form">
          <div className="n-s">
            <div className="">
              <input placeholder="Имя" />
            </div>
            <div className="">
              <input placeholder="Фамилия" />
            </div>
          </div>
          <div className="">
            <input placeholder="Эл. почта" />
          </div>
          <div className="">
            <input placeholder="Телефон" />
          </div>
          <div className="">
            <input placeholder="Создать пароль" />
          </div>
          <div className="">
            <input placeholder="Город" />
          </div>
          <div className="">
            <input placeholder="Пригласительный код(необязательно)" />
          </div>
          <div className="btn-register">
            <span>
              <img src={arrowImg} alt="" />
            </span>
          </div>
          <div className="some-text">
            <a href="/">зарегистрируйтесь</a>
            <a href="/">
              Заявление о конфеденциальности водителя-партнера Uber
            </a>
          </div>
        </div>
      </form>
    </div>
  </div>
);

export default DriversRegistr;
