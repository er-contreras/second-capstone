import { urlLikes } from "./homePageRequest";
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
