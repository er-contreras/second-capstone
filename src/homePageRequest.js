import { setLocalStorage } from './localStorage.js';
import displayItems from './homePage.js';
import { getListLikes } from './like.js';
import displayCounter from './itemsCounter.js';

const getMeals = async () => {
  const response = await fetch('https://www.themealdb.com/api/json/v1/1/categories.php');
  const data = await response.json();
  const result = await data.categories;
  return result;
};

// sqPJ7A1vxlpEoYTVLiXr
// const newGame = async () => {
//   const response = await fetch('https://us-central1-involvement-api.cloudfunctions.net/capstoneApi/apps/',
//     {
//       method: 'POST',
//       body: JSON.stringify({ name: 'Meals' }),
//       headers: {
//         'Content-type': 'application/json; charset=UTF-8',
//       },
//     });
//   const status = await response.text();
//   return status;
// };

const getData = () => {
  getMeals().then((result) => {
    const arr = [];
    for (let i = 0; i < 6; i += 1) {
      arr.push(result[i]);
    }
    setLocalStorage(arr);
    displayItems(arr);
    getListLikes();
    displayCounter();
  });
};
export { getMeals, getData };
