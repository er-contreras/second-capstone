import './style.css';
import './popUp.css';
import '@fortawesome/fontawesome-free/js/all.js';
import displayItems from './homePage.js';
import openPopUp from './open-popUp.js';
import { getData } from './homePageRequest.js';
import { addLikes } from './like.js';

const container = document.getElementById('container');

window.addEventListener('load', () => {
  getData();
  openPopUp();
});

container.addEventListener('click', (e) => {
  addLikes(e);
});
