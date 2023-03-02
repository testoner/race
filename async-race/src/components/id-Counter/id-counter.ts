const requestURL = 'http://127.0.0.1:3000/garage';

let counter: number;

interface Data {
  id: number;
}

function startCounter(data: Data) {
  if (Array.isArray(data)) {
    counter = data[data.length - 1].id + 1;
  }
}

export default function addIdCounter(): number {
  fetch(requestURL)
    .then((res) => res.json())
    .then((data) => {
      startCounter(data);
    });
  return counter;
}
