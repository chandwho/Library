const bookContainer = document.querySelector('.book-container');
const addButton = document.querySelector('#add-button');
const form = document.querySelector('form');
const modal = document.querySelector('#modal-container');
const closeModal = document.querySelector('#close-modal-button');

const myBook = [];

function Book(title, author, pages, read) {
  this.title = title;
  this.author = author;
  this.pages = pages;
  this.info = () => `${title} by ${author}, ${pages} pages, ${read}`;
}

Book.prototype.read;
// Input from form
form.addEventListener('submit', addBookToLibrary);

// Adding book object to array
function addBookToLibrary(event) {
  modal.style.display = 'none';

  const book = new Book();
  book.title = document.getElementById('title').value;
  book.author = document.getElementById('author').value;
  book.pages = document.getElementById('pages').value;

  if (document.getElementById('checkbox').checked) {
    book.read = 'Completed';
  } else {
    book.read = 'Not read yet';
  }

  form.reset();
  event.preventDefault();
  book.position = myBook.length;
  myBook.push(book);
  displayBook();
}

// Displays each book on screen
function displayBook() {
  const div = document.createElement('div');
  const displayTitle = document.createElement('h2');
  const displayAuthor = document.createElement('h3');
  const displayPages = document.createElement('h3');
  const displayRead = document.createElement('button');
  const removeButton = document.createElement('button');

  displayRead.addEventListener('click', toggleReadStatus);
  removeButton.addEventListener('click', () => {
    console.log(myBook);
    removeBook();
    div.remove();
  });

  myBook.forEach((book) => {
    displayTitle.innerText = book.title;
    displayAuthor.innerText = `by ${book.author}`;
    displayPages.innerText = `Pages: ${book.pages}`;
    displayRead.innerText = book.read;
    removeButton.innerText = 'Remove Book';

    bookContainer.append(div);
    div.append(displayTitle, displayAuthor, displayPages, displayRead, removeButton);
    div.classList.add('book');
    displayRead.classList.add('button');
    removeButton.classList.add('button', 'remove-button');
  });
}

// Toggle read status of book
function toggleReadStatus(e) {
  if (this.read === 'Completed') {
    this.read = 'Not read yet';
  } else {
    this.read = 'Completed!';
  }
  e.target.innerText = this.read;
}

function removeBook() {
  myBook.splice(this.position, 1);
  console.log(myBook);
}
// Add book button

addButton.addEventListener('click', () => {
  modal.style.display = 'block';
});

// Closing form

closeModal.addEventListener('click', () => {
  modal.style.display = 'none';
});

window.addEventListener('click', (e) => {
  if (e.target === modal) {
    modal.style.display = 'none';
  }
});
