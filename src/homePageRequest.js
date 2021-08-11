const urlLikes = 'https://us-central1-involvement-api.cloudfunctions.net/capstoneApi/apps//apps/08680nJubiHKx9eoubOF/likes/';
const getMeals = async () => {
    const response = await fetch('https://www.themealdb.com/api/json/v1/1/categories.php');
    const data = await response.json();
    const result = await data.categories;
    return result;
};

const newGame = async () => {
    const response = await fetch('https://us-central1-involvement-api.cloudfunctions.net/capstoneApi/apps/',
      {
        method: 'POST',
        body: JSON.stringify({name: 'Get Meals'}),
        headers: {
          'Content-type': 'application/json; charset=UTF-8',
        },
      });
      const status = await response.text();
      return status;
};

//08680nJubiHKx9eoubOF/apps/

const postLike = async (id) => {
    const response = await fetch(urlLikes,
      {
        method: 'POST',
        body: JSON.stringify({"item_id": `${id}`}),
        headers: {
          'Content-type': 'application/json; charset=UTF-8',
        },
      });
      const status = await response.text();
      return status;
};

const getLikes = async () => {
    const response = await fetch(urlLikes)
    const data = await response.json();
    const result = await data.likes;
    return result;
};

export { getMeals, postLike, getLikes };