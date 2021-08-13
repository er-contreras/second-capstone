import { getMeals } from './homePageRequest';

const container = document.getElementById('container');
const addItem = (strCategory, strCategoryThumb, idCategory) => {
  const divItem = document.createElement('div');
  const imgDiv = document.createElement('div');
  const title = document.createElement('h4');
  const likeDiv = document.createElement('div');
  const imgItem = document.createElement('img');
  const likeCount = document.createElement('p');
  const commentBtn = document.createElement('button');
  const icon = document.createElement('i');
  title.textContent = `${strCategory}`;
  icon.classList.add('far', 'fa-heart', 'icon-heart');
  icon.dataset.id = `${idCategory}`;
  likeDiv.appendChild(icon);
  likeDiv.textContent = 'Likes';
  likeCount.classList.add('likes');
  likeCount.dataset.id = `${idCategory}`;
  likeCount.textContent = 0;
  imgItem.setAttribute('src', `${strCategoryThumb}`);
  imgDiv.appendChild(imgItem);
  commentBtn.innerText = 'comment';
  divItem.classList.add('meal-card');
  divItem.appendChild(title);
  divItem.appendChild(likeDiv);
  divItem.appendChild(imgDiv);
  divItem.appendChild(commentBtn);
  container.appendChild(divItem);
};

const displayItems = async () => {
  const categories = await getMeals();
  const list = [];
  if (categories.length > 6) {
    for (let i = 0; i < 6; i += 1) {
      list.push(categories[i]);
    }
  }
  list.forEach((element) => {
    addItem(element.strCategory, element.strCategoryThumb, element.idCategory);
  });
};

export default displayItems;