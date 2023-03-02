const requestURL = 'http://127.0.0.1:3000/garage';

const garSize = (): void => {
  const title = <HTMLTitleElement>document.querySelector('.gar-tittle');
  fetch(requestURL)
    .then((res) => res.json())
    .then((data) => {
      title.innerHTML = `GARAGE (${data.length})`;
    });
};

export default garSize;
