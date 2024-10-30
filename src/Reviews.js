import React from 'react';
import leftSideImage from './images/left_side.svg';  // Путь к изображению слева
import footerLogo from './images/footer_logo.svg';    // Путь к логотипу

export default function Reviews() {
  const handleSubscription = () => {
    // Обработка подписки на рассылку
  };

  const handlePageNavigation = (page) => {
    // Обработка навигации по страницам
    console.log(`Navigate to ${page}`);
  };

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
              <button onClick={handleSubscription} className="follow">
                Подписаться на рассылку
              </button>
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
              <button onClick={() => handlePageNavigation('main')} className="pages">ОСНОВНОЕ</button>
              <button onClick={() => handlePageNavigation('site')} className="pages">Сайт</button>
              <button onClick={() => handlePageNavigation('about')} className="pages">О нас</button>
              <button onClick={() => handlePageNavigation('feedback')} className="pages">Обратная связь</button>
            </div>
            <div className="item">
              <button onClick={() => handlePageNavigation('additional')} className="pages">ДОПОЛНИТЕЛЬНО</button>
              <button onClick={() => handlePageNavigation('blog')} className="pages">Блог</button>
              <button onClick={() => handlePageNavigation('faq')} className="pages">Частые вопросы</button>
              <button onClick={() => handlePageNavigation('reviews')} className="pages">Отзывы</button>
            </div>
            <div className="item">
              <button onClick={() => handlePageNavigation('company')} className="pages">ООО «BOOKTALK NN»</button>
              <button onClick={() => handlePageNavigation('privacy')} className="pages">Политика конфиденциальности</button>
              <button onClick={() => handlePageNavigation('year2024')} className="pages">2024 г.</button>
            </div>
            <div className="item">
              <button className="logo" onClick={() => handlePageNavigation('home')}>
                <img src={footerLogo} alt="Логотип" />
              </button>
            </div>
          </div>
        </div>
      </footer>
    </>
  );
}
