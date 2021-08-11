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
