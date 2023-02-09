const bookContainer = document.querySelector('.book-container');
const addButton = document.querySelector('#add-button');

function Book(title, author, pages, read) {
  this.title = title;
  this.author = author;
  this.pages = pages;
  this.read = read;
  this.info = () => `${title} by ${author}, ${pages} pages, ${read}`;
}

// const book1 = new Book('The Hobbit', 'J.R.R. Tolkien', '295', 'not read yet');

// console.log(book1.info());

const myBook = [];

const book1 = new Book('Harry Potter 1', 'J.K Rowling', '351', 'Read');
const book2 = new Book('Harry Potter 2', 'J.K Rowling', '352', 'Not Read');
const book3 = new Book('Harry Potter 3', 'J.K Rowling', '353', 'Not Read');

myBook.push(book1, book2, book3);

function addBookToLibrary() {
  title = prompt('Enter title', '');
  author = prompt('Enter author', '');
  pages = prompt('Enter pages', '');
  read = prompt('Read the book?', '');
  const book = new Book(title, author, pages, read);
  myBook.push(book);
}

// if (confirm('Want to add book?', '')) {
//   addBookToLibrary();
// }

function displayBook() {
  myBook.forEach((book) => {
    const div = document.createElement('div');

    const displayTitle = document.createElement('h2');
    displayTitle.innerText = book.title;

    const displayAuthor = document.createElement('h3');
    displayAuthor.innerText = book.author;

    const displayPages = document.createElement('h3');
    displayPages.innerText = book.pages + ' pages';

    const displayRead = document.createElement('button');
    displayRead.innerText = book.read;

    bookContainer.append(div);
    div.append(displayTitle, displayAuthor, displayPages, displayRead);
    div.classList.add('book');
    displayRead.classList.add('button')
  });
}

displayBook();
