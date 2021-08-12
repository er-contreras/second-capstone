const getLocalStorage = () => JSON.parse(localStorage.getItem('APIData'));

const setLocalStorage = (data) => {
  localStorage.setItem('APIData', JSON.stringify(data));
};

export { getLocalStorage, setLocalStorage };