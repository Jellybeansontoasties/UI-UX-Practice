// JavaScript for Infinite Text (if needed for dynamic content later)

//Top Border
document.addEventListener('DOMContentLoaded', () => {
  const textContainer = document.querySelector('.top-infinite-text');
  const text = textContainer.querySelector('span').innerText;
  while (textContainer.scrollWidth < window.innerWidth * 4) {
    textContainer.innerHTML += `<span>${text}</span>`;
  }
});

// Bottom Border
document.addEventListener('DOMContentLoaded', () => {
  const textContainer = document.querySelector('.bottom-infinite-text');
  const text = textContainer.querySelector('span').innerText;
  while (textContainer.scrollWidth < window.innerWidth * 4) {
    textContainer.innerHTML += `<span>${text}</span>`;
  }
});

// Left Border
document.addEventListener('DOMContentLoaded', () => {
  const textContainer = document.querySelector('.left-infinite-text');
  const text = textContainer.querySelector('span').innerText;

  // Duplicate text to fill vertical space
  while (textContainer.scrollHeight < window.innerHeight * 4) {
    textContainer.innerHTML += `<span>${text}</span>`;
  }
});

// Right Border
document.addEventListener('DOMContentLoaded', () => {
  const textContainer = document.querySelector('.right-infinite-text');
  const text = textContainer.querySelector('span').innerText;

  // Duplicate text to fill vertical space
  while (textContainer.scrollHeight < window.innerHeight * 4) {
    textContainer.innerHTML += `<span>${text}</span>`;
  }
});

