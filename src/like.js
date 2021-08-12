const urlLikes = 'https://us-central1-involvement-api.cloudfunctions.net/capstoneApi/apps/sqPJ7A1vxlpEoYTVLiXr/likes';
const postLike = async (id) => {
  const response = await fetch(urlLikes, {
    method: 'POST',
    headers: {
      'Content-type': 'application/json',
    },
    body: JSON.stringify({
      item_id: `${id}`,
    }),
  });
  const status = await response;
  return status;
};

const getLikes = async () => {
  const response = await fetch(urlLikes);
  const data = await response.json();
  return data;
};

const displayLikes = (data) => {
  const likeCounts = [...document.querySelectorAll('.likes')];
  data.forEach((object) => {
    const id = parseInt(object.item_id, 10);
    likeCounts[id].textContent = object.likes;
  });
};

const getListLikes = () => {
  getLikes().then((result) => {
    displayLikes(result);
  });
};

const addLikes = (event) => {
  const isLikeIcon = event.target.classList.contains('heart');
  if (isLikeIcon) {
    const { id } = event.target.dataset;
    postLike(id).then((result) => {
      getListLikes();
      return result;
    });
  }
};

export { addLikes, displayLikes, getListLikes };