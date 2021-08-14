import { setLocalStorage } from './localStorage';
import displayItems from './homePage';
import { getListLikes } from './like';
import { displayCount }from './mealsCounter';

const getMeals = async () => {
  const response = await fetch('https://www.themealdb.com/api/json/v1/1/categories.php');
  const data = await response.json();
  const result = await data.categories;
  return result;
};

// sqPJ7A1vxlpEoYTVLiXr

const getData = () => {
  getMeals().then((result) => {
    let arr = [];
    for(let i = 0; i < 6; i+=1){
       arr.push(result[i]);
    }
    setLocalStorage(arr);
    displayItems(arr);
    getListLikes();
    displayCount();
  });
};
export { getMeals, getData };
