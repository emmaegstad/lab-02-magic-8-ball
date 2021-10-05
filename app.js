import { cageQuotes } from './quotes.js';

const submitButton = document.querySelector('.question-button');
const answer = document.querySelector('.answer');

const getRandomNumber = (max) => {
    return Math.floor(Math.random() * max);
};

const onAnimationEnd = (ev) => {
    ev.target.classList.remove('fade-in');
};

submitButton.addEventListener('click', () => {
    const randomIdx = getRandomNumber(cageQuotes.length);
    answer.textContent = cageQuotes[randomIdx];
    answer.classList.add('fade-in');
});

answer.addEventListener('animationend', onAnimationEnd);

