import React from 'react';

export default function JoinClub() {
  return (
    <div className="wrapper">
      <section className="access">
        <div className="container">
          <div className="section_title">САЙТ НАХОДИТСЯ В РАЗРАБОТКЕ</div>
          <div className="description">
            В настоящее время на сайте ведутся технические работы. <br />
            Зайдите пожалуйста позже или свяжитесь с нами одним из следующих образов
          </div>
          <div className="buttons row">
            <a href="mailto:booktalk@gmail.com" className="item">booktalk@gmail.com</a>
            <a href="tel:+79157366293" className="item">+7 (915) 736-62-93</a>
            <a href="https://t.me/your_telegram_username" className="item">написать в telegram</a>
          </div>
        </div>
        <div className="bottom"></div>
      </section>
    </div>
  );
}
