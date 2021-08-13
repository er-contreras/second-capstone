const itemCounter = () => {
  const items = [...document.querySelector('#container').children];
  return items.length;
};

const displayCounter = () => {
  const counter = document.getElementById('items-counter');
  counter.innerHTML = `<b>(${itemCounter()})<b>`;
};

export default displayCounter;