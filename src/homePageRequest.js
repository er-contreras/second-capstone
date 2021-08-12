import { setLocalStorage } from './localStorage';
import displayItems from './homePage';
import { getListLikes } from './like';

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
    result.splice(7);
    setLocalStorage(result);
    displayItems(result);
    getListLikes();
  });
};
export { getMeals, getData };
