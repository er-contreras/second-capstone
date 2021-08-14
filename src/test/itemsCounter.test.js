import { expect, test } from '@jest/globals';
import { itemCounter } from '../mealsCounter.js';

describe('Test ItemCounter', () => {
  document.body.innerHTML = `
   '<div class="container">
      <div class="meal-card">
       div class="image">
          <img class="img" src="">
       </div>
       <p class="title"></p>
       <div class="like-container">
          <i class="far fa-heart heart"></i>
          <p class="likes"></p>
       </div>
       <button data-id="0" class="button">Comments</button>
      </div>
      </div>
    `;
  test('itemCounter should return 1', () => {
    expect(itemCounter()).toBe(1);
  });
});
