const itemCounter = () => {
  const items = document.querySelectorAll('.meal-card').length;
  return items;
};

const displayCount = () => {
  const counter = document.getElementById('items-counter');
  counter.innerHTML = `<b>(${itemCounter()})<b>`;
};

export { displayCount, itemCounter };