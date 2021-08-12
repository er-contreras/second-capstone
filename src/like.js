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
