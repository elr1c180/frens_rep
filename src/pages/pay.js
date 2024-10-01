import React, { useEffect, useState } from 'react';
import './src/AnimatedPage.css'; // Подключаем стили

const AnimatedPage = () => {
  const [showContent, setShowContent] = useState(false);

  // При загрузке страницы включаем анимацию
  useEffect(() => {
    setTimeout(() => {
      setShowContent(true);
    }, 500); // Задержка перед появлением
  }, []);

  return (
    <div className="animated-page">
      {showContent && (
        <>
          <img
            src="https://via.placeholder.com/150" // Замените на нужную картинку
            alt="placeholder"
            className="fade-in image"
          />
          <button className="fade-in button">Кнопка 1</button>
          <button className="fade-in button">Кнопка 2</button>
          <button className="fade-in button">Кнопка 3</button>
        </>
      )}
    </div>
  );
};

export default AnimatedPage;
