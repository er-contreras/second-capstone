const popUpRender = (image, name, id) => {
  const popUpContainer = document.createElement('div');
  popUpContainer.id = 'popUpContainer';

  const imgNCloseContainer = document.createElement('div');
  imgNCloseContainer.id = 'imgNClose';

  const img = document.createElement('img');
  img.id = 'img';
  img.src = image;

  const btnContainer = document.createElement('div');
  const btn = document.createElement('button');
  btn.className = 'btn';
  btn.innerHTML = 'X';

  const itemNDescripContainer = document.createElement('div');
  itemNDescripContainer.id = 'itemNdescriptContainer';
  const itemDescriptionContainer = document.createElement('div');
  itemDescriptionContainer.id = 'itemDescriptionContainer';
  const titleContainer = document.createElement('div');
  titleContainer.id = 'titleContainer';
  const title = document.createElement('h2');
  title.id = 'titleImg';
  title.textContent = name;

  const itemDescription1 = document.createElement('p');
  const local = JSON.parse(localStorage.getItem('APIData'));

  itemDescription1.textContent = `${local[id].strCategoryDescription}`;

  const commentsContainer = document.createElement('div');
  commentsContainer.id = 'commentsContainer';
  const commentsTitle = document.createElement('h2');
  commentsTitle.textContent = 'Comments';
  const comments = document.createElement('p');

  const form = document.createElement('form');
  form.id = 'form';

  const formTitle = document.createElement('h2');
  formTitle.textContent = 'Add Comment';

  const labelName = document.createElement('label');
  labelName.setAttribute('for', 'name');

  const inputName = document.createElement('input');
  inputName.setAttribute('type', 'text');
  inputName.setAttribute('name', 'name');
  inputName.setAttribute('placeholder', 'Your Name');
  inputName.id = 'name';
  inputName.setAttribute('required', '');

  const labelScore = document.createElement('label');
  labelName.setAttribute('for', 'score');

  const textarea = document.createElement('textarea');
  textarea.setAttribute('type', 'text');
  textarea.setAttribute('name', 'score');
  textarea.setAttribute('placeholder', 'Your Score');
  textarea.id = 'score';
  textarea.setAttribute('required', '');

  const containerSubmitBtn = document.createElement('div');
  containerSubmitBtn.id = 'submit-container';

  const submitBtn = document.createElement('input');
  submitBtn.dataset.id = id;
  submitBtn.setAttribute('type', 'submit');
  submitBtn.id = 'submit';

  document.body.appendChild(popUpContainer);
  popUpContainer.appendChild(imgNCloseContainer);
  popUpContainer.appendChild(itemNDescripContainer);
  popUpContainer.appendChild(itemDescriptionContainer);

  imgNCloseContainer.appendChild(img);
  imgNCloseContainer.appendChild(btnContainer);
  btnContainer.appendChild(btn);
  itemNDescripContainer.appendChild(titleContainer);
  titleContainer.appendChild(title);
  itemDescriptionContainer.appendChild(itemDescription1);

  popUpContainer.appendChild(commentsContainer);
  commentsContainer.appendChild(commentsTitle);
  commentsContainer.appendChild(comments);
  popUpContainer.appendChild(form);

  form.appendChild(formTitle);
  form.appendChild(labelName);
  form.appendChild(inputName);
  form.appendChild(labelScore);
  form.appendChild(textarea);
  form.appendChild(containerSubmitBtn);
  containerSubmitBtn.appendChild(submitBtn);
};

export default popUpRender;