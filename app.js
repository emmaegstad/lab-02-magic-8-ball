import { cageQuotes } from './quotes.js';

const submitButton = document.querySelector('.question-button');
const answer = document.querySelector('.answer');

const getRandomNumber = (max) => {
    return Math.floor(Math.random() * max);
};

submitButton.addEventListener('click', () => {
    const randomIdx = getRandomNumber(cageQuotes.length);
    answer.textContent = cageQuotes[randomIdx];
});
