import { displayCount } from './mealsCounter.js';
import { setLocalStorage } from './localStorage.js';
import displayItems from './homePage.js';
import { getListLikes } from './like.js';

const getMeals = async () => {
  const response = await fetch('https://www.themealdb.com/api/json/v1/1/categories.php');
  const data = await response.json();
  const result = await data.categories;
  return result;
};

const getData = () => {
  getMeals().then((result) => {
    const arr = [];
    for (let i = 0; i < 6; i += 1) {
      arr.push(result[i]);
    }
    setLocalStorage(arr);
    displayItems(arr);
    getListLikes();
    displayCount();
  });
};
export { getMeals, getData };
