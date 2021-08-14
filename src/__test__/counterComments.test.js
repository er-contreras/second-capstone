import counterComments from '../counterComments.js';

describe('Test counterComments function', () => {
  document.body.innerHTML = `
   <div id="commentsContainer">
   <h2>Comments(6)</h2>
   <p>2021-08-13 Christian Erick: asdasda</p>
   <p>2021-08-13 : </p>
   <p>2021-08-13 Christian Erick: Hola!</p>
   <p>2021-08-13 Christian Erick: Hey!</p>
   <p>2021-08-13 Christian Erick: HHH</p>
   <p>2021-08-13 Francis: Recommended!</p>
   </div>`;

  const comments = counterComments();

  test('counterComments should return 6', () => {
    expect(comments).toBe(6);
  });
});