import React from 'react';
import telegramLogo from './images/telegram.svg'; // Убедитесь, что путь к изображению правильный

export default function Possibilities() {
  return (
    <section className="possibilities" id="possibilities">
      <div className="container">
        <div className="top">
          <div className="subtitle">
            <span>Наша платформа объединяет читателей разных возрастов и предпочтений,</span>
            <br />
            <span>предлагая удобный способ находить, обсуждать и рекомендовать книги</span>
          </div>
          <div className="section_title">возможности</div>
          <div className="row">
            <div className="item">персонализированные рекомендации книг</div>
            <div className="item">Возможность обмена <br /> мнениями и рецензиями</div>
            <div className="item">участие в виртуальных <br /> книжных клубах</div>
            <div className="item">Доступ к экспертным <br /> обзорам</div>
          </div>
        </div>
        <div className="lenta">
          <div className="row">
            <div className="item">
              <div className="number">45</div>
              <div className="text">Тысяч книг <br /> в библиотеке</div>
            </div>
            <div className="item">
              <div className="number">500</div>
              <div className="text">Различных <br /> клубов</div>
            </div>
            <div className="item">
              <div className="number">3</div>
              <div className="text">Соцсети на одной <br /> платформе</div>
            </div>
          </div>
        </div>
        <div className="join_card">
          <div className="corner">
            <svg xmlns="http://www.w3.org/2000/svg" width="79" height="64" viewBox="0 0 79 64" fill="none">
              <path d="M37.413 38.0075C42.9557 14.8989 14.7804 3.0406 0 0C26.7895 0 80.0915 3.0406 78.983 15.203C77.5973 30.406 70.669 38.0075 55.4267 51.6902C44.3858 61.6013 27.9678 63.951 19.133 63.9306C18.1837 64.0513 17.3354 64.0078 16.628 63.8526C17.3704 63.9005 18.2104 63.9285 19.133 63.9306C24.3818 63.2633 32.7192 57.5768 37.413 38.0075Z" fill="#DBF6FB" />
            </svg>
          </div>
          <div className="row">
            <div className="left_side">
              <div className="section_title">следите за обновлениями</div>
              <div className="description">
                Книжный канал с регулярными <br />
                обновлениями новинок книг и рецензий
              </div>
              <div className="buttons">
                <a href="#" className="telegram">telegram</a>
                <img src={telegramLogo} alt="Telegram" />
              </div>
            </div>
            <div className="right_side">
              <img src={require('./images/phone.png')} alt="" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
