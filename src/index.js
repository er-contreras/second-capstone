import './style.css';
import './popUp.css';
import '@fortawesome/fontawesome-free/js/all.js';
import openPopUp from './open-popUp.js';
import { getData } from './homePageRequest.js';
import { addLikes, getLikes } from './like.js';
import { apiContent } from './liveComments';

const container = document.getElementById('container');

window.addEventListener('load', () => {
  getData();

  openPopUp();

});

container.addEventListener('click', (e) => {
  addLikes(e);
});

getLikes();

// addComments()
