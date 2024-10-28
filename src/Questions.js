import React from 'react';

export default function Questions() {
  return (
    <section className="questions" id="questions">
      <div className="container">
        <div className="section_title">ВОПРОСЫ</div>
        <div className="row">
          <div className="item tall"></div>
          <div className="item small"></div>
          <div className="item tall"></div>
          <div className="item2 ">
            <div className="invisible pink">
              <div className="text pink">книжный клуб</div>
            </div>
            <div className="visible pink">
              <div className="text pink">как вступить?</div>
              <div className="text pink">
                Благодаря множеству клубов вы легко найдете тот, который вам понравится
              </div>
            </div>
          </div>
          <div className="item2 ">
            <div className="invisible orange">
              <div className="text orange">что читают друзья?</div>
            </div>
            <div className="visible orange">
              <div className="text orange">что читают друзья?</div>
              <div className="text orange">
                Чтобы узнать, что читают ваши друзья, просто подпишитесь на их профиль и следите
              </div>
            </div>
          </div>
          <div className="item2 thin">
            <div className="invisible blue">
              <div className="text blue">обновление разделов</div>
            </div>
            <div className="visible blue">
              <div className="text blue">Регулярные обновления?</div>
              <div className="text blue">
                Все разделы регулярно добавляют самые новые и популярные книги
              </div>
            </div>
          </div>
          <div className="item2 ">
            <div className="invisible purple">
              <div className="text purple">личная подборка</div>
            </div>
            <div className="visible purple">
              <div className="text purple">как работает личная подборка?</div>
              <div className="text purple">
                После прохождения теста вы получаете подборку
                <br />
                <span className="newline">с</span> книгами, которая будет регулярно обновляться.
              </div>
            </div>
          </div>
          <div className="item very_thin"></div>
          <div className="item tall"></div>
          <div className="item small"></div>
          <div className="item tall"></div>
          <div className="item small"></div>
        </div>
      </div>
    </section>
  );
}
