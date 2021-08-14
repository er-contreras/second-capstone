import { addComments, apiContent } from './liveComments.js';
import popUpRender from './popUp-render.js';

const openPopUp = () => {
  // Grab the images and name from the DOM
  const container = document.getElementById('container');

  container.addEventListener('click', (e) => {
    const mealCardBtn = document.getElementsByClassName('meal-card');
    const buttons = document.getElementsByClassName('buttons');
    const header = document.getElementById('title-');

    for (let i = 0; i < mealCardBtn.length; i += 1) {
      const { children } = mealCardBtn[i];
      if (buttons[i] === e.target) {
        mealCardBtn[i].id = `meal-card-${i}`;

        container.style.display = 'none';
        header.style.display = 'none';

        const image = children[0].firstChild.src;
        const name = children[1].textContent;

        popUpRender(image, name, e.target.dataset.id);

        const getMeals = async () => {
          const response = await fetch('https://www.themealdb.com/api/json/v1/1/categories.php');
          const data = await response.json();
          const result = data.categories;
          const items = result;
          const slice = items.slice(0, 6);

          localStorage.setItem('description', JSON.stringify(slice));
        };

        getMeals();

        // X btn
        const ex = document.querySelector('.btn');
        const popUpContainer = document.getElementById('popUpContainer');

        ex.addEventListener('click', () => {
          container.style.display = 'grid';
          header.style.display = 'flex';
          popUpContainer.remove();
        });

        // ApiContent
        apiContent(e.target.dataset.id);
        // Submit
        const submit = document.getElementById('submit');

        submit.addEventListener('click', (e) => {
          e.preventDefault();
          addComments(e.target.dataset.id);
        });
      }
    }
  });
};

export default openPopUp;