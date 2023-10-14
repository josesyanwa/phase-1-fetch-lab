function fetchBooks() {

  return fetch('https://anapioficeandfire.com/api/books')
    .then((response) => {
  
      if (!response.ok) {
        throw new Error('Network response was not ok');
      }
    
      return response.json();
    })
    .then((data) => {
    
      renderBooks(data);
    })
    .catch((error) => {
      console.error('There was a problem with the fetch operation:', error);
    });
}

function renderBooks(books) {
  const main = document.querySelector('main');
  const ul = document.createElement('ul');

  books.forEach((book) => {
    const li = document.createElement('li');
    li.textContent = book.name;
    ul.appendChild(li);
  });

  main.appendChild(ul);
}

fetchBooks();
