import './style.css';
import '@fortawesome/fontawesome-free/js/all.js';
import { getData } from './homePageRequest';
import { addLikes } from './like';

const container = document.getElementById('container');

window.addEventListener('load', () => {
  getData();
});

container.addEventListener('click', (e) => {
  addLikes(e);
});
