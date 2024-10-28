import React from 'react';
import leftSideImage from './images/left_side.svg';  // Путь к изображению слева
import footerLogo from './images/footer_logo.svg';    // Путь к логотипу

export default function Reviews() {
  return (
    <>
      <section className="booktalk" id="booktalk">
        <div className="container">
          <div className="row">
            <div className="left_side">
              <div className="section_title">
                СОВСЕМ СКОРО <br />
                МЫ ЗАПУСТИМ BOOKTALK!
              </div>
              <div className="description">
                Подпишитесь на рассылку, <br />
                чтобы первыми узнать о запуске <br />
                платформы
              </div>
              <a href="#" className="follow">Подписаться на рассылку</a>
            </div>
            <div className="right_side">
              <img src={leftSideImage} alt="Left Side" />
            </div>
          </div>
        </div>
      </section>

      <footer className="footer">
        <div className="container">
          <div className="row">
            <div className="item">
              <a href="#" className="pages">ОСНОВНОЕ</a>
              <a href="#" className="pages">Сайт</a>
              <a href="#" className="pages">О нас</a>
              <a href="#" className="pages">Обратная связь</a>
            </div>
            <div className="item">
              <a href="#" className="pages">ДОПОЛНИТЕЛЬНО</a>
              <a href="#" className="pages">Блог</a>
              <a href="#" className="pages">Частые вопросы</a>
              <a href="#" className="pages">Отзывы</a>
            </div>
            <div className="item">
              <a href="#" className="pages">ООО «BOOKTALK NN»</a>
              <a href="#" className="pages">Политика конфиденциальности</a>
              <a href="#" className="pages">2024 г.</a>
            </div>
            <div className="item">
              <a href="#" className="logo">
                <img src={footerLogo} alt="Логотип" />
              </a>
            </div>
          </div>
        </div>
      </footer>
    </>
  );
}
