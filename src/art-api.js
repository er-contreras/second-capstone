const apiContent = async () => {
  // const url = 'https://api.artic.edu/api/v1/artworks/';
  const url = 'https://api.artic.edu/api/v1/artworks/75644?fields=id,title,image_id,alt_image_ids';

  const response = await fetch(url);
  const apiScores = await response.json();
  const almost = apiScores.data;
  // console.log(response, apiScores, almost);

  document.body.innerHTML = almost[1].image_id;
  // almost.sort((a, b) => b.score - a.score);

  // const refresh = document.getElementById('refresh');

  // refresh.addEventListener('click', () => {
  //   const scores = document.getElementById('scores');
  //   scores.innerHTML = '';
  //   almost.map((obj, i) => {
  //     const names = document.createElement('div');

  //     names.textContent = `${obj.user}: ${obj.score}`;
  //     scores.appendChild(names);

  //     return i % 2 === 0 ? names.classList.add('names') : names.classList.add('names2');
  //   });
  // });
};

apiContent();

export default apiContent;