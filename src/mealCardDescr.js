import { getMeals } from "./homePageRequest.js";
import popUpRender from "./popUp-render.js";

// Grabbing API Description
const mealCardDescription = async () => {
  const categories = await getMeals();
  const list = [];
  if (categories.length > 6) {
    for (let i = 0; i < 6; i += 1) {
      list.push(categories[i]);
    }
  }

  return list

  // list.forEach((element) => {
  //   console.log(element)
  // });
}


export default mealCardDescription;