import { getCounter } from './counterComments.js';

const apiContent = async (id) => {
  const url = `https://us-central1-involvement-api.cloudfunctions.net/capstoneApi/apps/sqPJ7A1vxlpEoYTVLiXr/comments?item_id=${id}`;

  const commentsContainer = document.getElementById('commentsContainer');
  commentsContainer.innerHTML = '<h2>Comments</h2>';
  const response = await fetch(url);
  const apiScores = await response.json();
  const almost = apiScores;

  almost.map((obj) => { /* eslint-disable-line */
    const paragraph = document.createElement('p');
    const { username, comment, creation_date } = obj; /* eslint-disable-line */

    paragraph.textContent = `${creation_date} ${username}: ${comment}`; /* eslint-disable-line */

    commentsContainer.appendChild(paragraph);
  });

  getCounter();
};

const addComments = async (id) => {
  const name = document.getElementById('name').value;
  const comment = document.getElementById('score').value;

  const url = 'https://us-central1-involvement-api.cloudfunctions.net/capstoneApi/apps/sqPJ7A1vxlpEoYTVLiXr/comments';

  // sqPJ7A1vxlpEoYTVLiXr

  const getComments = await fetch(url, {
    method: 'POST',
    body: JSON.stringify({
      item_id: `${id}`,
      username: `${name}`,
      comment: `${comment}`,
    }),
    headers: {
      'Content-Type': 'application/json; charset=UTF-8',
    },
  });

  const response = await getComments.text(); /* eslint-disable-line */
  apiContent(id);

  const form = document.getElementById('form');
  form.reset();
};

export { addComments, apiContent };