import React from 'react';
import booksImage from './images/books.png'; // Импортируйте изображение

function Home() {
    return (
        <section className="hero">
            <div className="container">
                <div className="row">
                    <div className="left_side">
                        <h1 className="hero_title">
                            Погрузитесь в мир книг
                            вместе с BOOKTALK!
                        </h1>
                        <div className="description">
                            Откройте для себя новые истории, <br />
                            делитесь впечатлениями и общайтесь <br />
                            с другими любителями литературы
                        </div>
                        <a href="#" className="join">присоединиться</a>
                    </div>
                    <div className="right_side">
                         <img src={booksImage} alt="Книги" /> {/* Используйте импортированное изображение */}
                    </div>
                </div>
            </div>
        </section>
    );
}

export default Home;
