const search = document.querySelector('#search');
const cards = [...document.querySelectorAll('.card')];
search.addEventListener('input', () => {
  const q = search.value.toLowerCase();
  cards.forEach(card => {
    card.style.display = card.innerText.toLowerCase().includes(q) ? '' : 'none';
  });
});
