const counterComments = () => {
  const commentsContainer = [...document.getElementById('commentsContainer').children];
  return commentsContainer.length - 1;
}

export const getCounter = () => {
  const container = document.getElementById('commentsContainer');
  const title = container.firstChild;
  title.innerHTML = `<h2>Comments(${counterComments()})</h2>`
}

export default counterComments;