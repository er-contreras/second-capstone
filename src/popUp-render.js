const popUpRender = (image, name, id) => {
  // pop up window container
  const popUpContainer = document.createElement('div');
  popUpContainer.id = 'popUpContainer';

  // pop up image and close button
  const imgNCloseContainer = document.createElement('div');
  imgNCloseContainer.id = 'imgNClose';

  const img = document.createElement('img');
  img.id = 'img';
  img.src = image;

  const btnContainer = document.createElement('div');
  const btn = document.createElement('button');
  btn.className = 'btn';
  btn.innerHTML = 'X';

  // Item description N title
  const itemNDescripContainer = document.createElement('div');
  itemNDescripContainer.id = 'itemNdescriptContainer';
  const itemDescriptionContainer = document.createElement('div');
  itemDescriptionContainer.id = 'itemDescriptionContainer';
  const titleContainer = document.createElement('div');
  titleContainer.id = 'titleContainer';
  const title = document.createElement('h2');
  title.id = 'titleImg';
  title.textContent = name;

  // Description ------------------------------------------------->
  const itemDescription1 = document.createElement('p');
  const local = JSON.parse(localStorage.getItem('APIData'));

  itemDescription1.textContent = `${local[id].strCategoryDescription}`;

  // --------------- Comments ---------------------------------------->
  const commentsContainer = document.createElement('div');
  commentsContainer.id = 'commentsContainer';
  const commentsTitle = document.createElement('h2');
  commentsTitle.textContent = 'Comments';
  const comments = document.createElement('p');
  // comments.textContent = '03/11/2021 Alex: I\nd love to buy it!';

  // ---------------Add Comments ---------------------------------------->
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

  // append to document
  document.body.appendChild(popUpContainer);
  // Append to popUpContainer
  popUpContainer.appendChild(imgNCloseContainer);
  popUpContainer.appendChild(itemNDescripContainer);
  popUpContainer.appendChild(itemDescriptionContainer);

  // Append to imgNCloseContainer
  imgNCloseContainer.appendChild(img);
  imgNCloseContainer.appendChild(btnContainer);
  btnContainer.appendChild(btn);
  // Append to itemNDescriptContainer
  itemNDescripContainer.appendChild(titleContainer);
  // Append to titleContainer
  titleContainer.appendChild(title);
  // Append to itemDescriptionContainer
  itemDescriptionContainer.appendChild(itemDescription1);
  // itemDescriptionContainer.appendChild(itemDescription2);
  // itemDescriptionContainer.appendChild(itemDescription3);
  // itemDescriptionContainer.appendChild(itemDescription4);
  // Comments Section
  popUpContainer.appendChild(commentsContainer);
  commentsContainer.appendChild(commentsTitle);
  commentsContainer.appendChild(comments);
  // Form Appends
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