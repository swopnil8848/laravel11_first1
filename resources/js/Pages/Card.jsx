import React, { useEffect } from 'react';

const Card = () => {
  useEffect(() => {
    const cards = document.querySelectorAll('.card');
    const cardsContainer = document.querySelector('.cards');

    if (cardsContainer) {
      cardsContainer.style.setProperty('--cards-count', cards.length);
      cardsContainer.style.setProperty('--card-height', `${cards[0].clientHeight}px`);

      Array.from(cards).forEach((card, index) => {
        const offsetTop = 20 + index * 20;
        card.style.paddingTop = `${offsetTop}px`;

        if (index === cards.length - 1) return;

        const toScale = 1 - (cards.length - 1 - index) * 0.1;
        const nextCard = cards[index + 1];
        const cardInner = card.querySelector('.card__inner');

        if (cardInner && nextCard) {
          // Replace with your scroll observer logic or animations
          // This part needs to be adapted based on your specific requirements
          // Example logic for scaling and brightness change on scroll
          const handleScroll = () => {
            const scrollTop = window.scrollY || window.pageYOffset;
            const bounding = nextCard.getBoundingClientRect();
            const scrollPercent = (scrollTop - bounding.top) / (bounding.height + window.innerHeight);

            cardInner.style.transform = `scale(${1 - scrollPercent * 0.1})`;
            cardInner.style.filter = `brightness(${1 - scrollPercent * 0.4})`;
          };

          window.addEventListener('scroll', handleScroll);

          return () => {
            window.removeEventListener('scroll', handleScroll);
          };
        }
      });
    }
  }, []);

  return (
    <div className="bg-gray-200 min-h-screen py-8">
      <div className="space space--small"></div>
      <div className="max-w-screen-xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-8 px-4 md:px-0">
        {/* Sample card content */}
        <div className="card" data-index="0">
          <div className="card__inner bg-white rounded-lg shadow-lg overflow-hidden">
            <div className="card__image-container w-full md:w-40">
              <img
                className="card__image object-cover w-full h-full"
                src="https://images.unsplash.com/photo-1620207418302-439b387441b0?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1200&q=100"
                alt=""
              />
            </div>
            <div className="card__content p-6">
              <h1 className="card__title text-2xl font-bold text-gray-800">Card Title</h1>
              <p className="card__description mt-4 text-gray-700">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Ab dicta error nam eaque.
                Eum fuga laborum quos expedita iste saepe similique, unde possimus quia at magnam
                sed cupiditate? Reprehenderit, harum!
              </p>
            </div>
          </div>
        </div>
        {/* Repeat other cards as needed */}
        <div className="card" data-index="1">
          {/* Card 2 content */}
        </div>
        <div className="card" data-index="2">
          {/* Card 3 content */}
        </div>
      </div>
      <div className="space"></div>
    </div>
  );
};

export default Card;
