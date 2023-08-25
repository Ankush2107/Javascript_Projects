const quotes = [
  "We cannot solve problems with the kind of thinking we employed when we came up with them. - Albert Einstein",
  "Stay away from those people who try to disparage your ambitions. Small minds will always do that, but great minds will give you a feeling that you can become great too. - Mark Twain",
  "Believe you can and you're halfway there. - Theodore Roosevelt",
  "It does not matter how slowly you go as long as you do not stop. - Confucius",
  "The future belongs to those who believe in the beauty of their dreams. - Eleanor Roosevelt",
  "Don't watch the clock; do what it does. Keep going. - Sam Levenson",
  "Nature has given us all the pieces required to achieve exceptional wellness and health, but has left it to us to put these pieces together. - Diane McLaren",
  "Life is 10% what happens to you and 90% how you react to it. — Charles R. Swindoll",
  "Change your thoughts  and you change your world. — Norman Vincent Peale",
  "All our dreams can come true if we have the courage to pursue them. — Walt Disney",
  "Success is a journey not a destination. — Ben Sweetland",
  "What you get by achieving your goals is not as important as what you become by achieving your goals. — Zig Ziglar",
  "It always seems impossible until it's done. — Nelson Mandela"
];

const addQuote = document.querySelector('#quote');
const button = document.querySelector('#generateButton');

button.addEventListener('click', () => {

  const randomIndex = Math.floor(Math.random() * quotes.length);
  addQuote.textContent = quotes[randomIndex];
})