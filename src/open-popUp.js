import popUpRender from './popUp-render.js';

const openPopUp = () => {
  // Grab the images and name from the DOM
  const container = document.getElementById('container');

  container.addEventListener('click', (e) => {
    const mealCardBtn = document.getElementsByClassName('meal-card');
    const buttons = document.getElementsByClassName('buttons');
    const header = document.getElementById('title');

    for (let i = 0; i < mealCardBtn.length; i += 1) {
      if (buttons[i] === e.target) {
        mealCardBtn[i].id = `meal-card-${i}`;

        container.style.display = 'none';
        header.style.display = 'none';

        const image = mealCardBtn[i].lastChild.previousSibling.firstChild.src;
        const name = mealCardBtn[i].firstChild.textContent;

        popUpRender(image, name);

        const getMeals = async () => {
          const response = await fetch('https://www.themealdb.com/api/json/v1/1/categories.php');
          const data = await response.json();
          const result = data.categories;
          const items = result;
          const slice = items.slice(0, 6);

          localStorage.setItem('description', JSON.stringify(slice));
        };

        getMeals();

        const ex = document.querySelector('.btn');
        const popUpContainer = document.getElementById('popUpContainer');

        ex.addEventListener('click', () => {
          container.style.display = 'inherit';
          header.style.display = 'inherit';
          popUpContainer.style.display = 'none';
        });
      }
    }
  });
};

export default openPopUp;