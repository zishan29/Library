const myLibrary = [];
let count = 0;

function Book(title, author, pages, readStatus) {
  this.title = title;
  this.author = author;
  this.pages = pages;
  this.readStatus = readStatus;
}

function addBookToLibrary(title, author, pages, readStatus) {
  const book = new Book(title, author, pages, readStatus);
  for (let i = 0; i < myLibrary.length; i += 1) {
    myLibrary.pop();
  }
  myLibrary.push(book);
}

function addCard() {
  const library = document.querySelector('.library');
  const btn = document.createElement('button');
  btn.classList.add('remove');
  const div1 = document.createElement('div');
  div1.classList.add('card');
  const div2 = document.createElement('div');
  div2.textContent = myLibrary[0].title;
  div2.classList.add('book-title');
  const div3 = document.createElement('div');
  div3.textContent = `by ${myLibrary[0].author}`;
  div3.classList.add('book-author');
  const div4 = document.createElement('div');
  div4.textContent = `${myLibrary[0].pages} pages`;
  div4.classList.add('book-pages');
  const div5 = document.createElement('div');
  div5.classList.add('grid-container');
  const input = document.createElement('input');
  input.setAttribute('type', 'checkbox');
  input.setAttribute('id', `checkbox${count}`);
  input.setAttribute('name', 'checkbox');
  if (myLibrary[0].readStatus === 'true') {
    input.checked = true;
  }
  const label = document.createElement('label');
  label.setAttribute('for', `checkbox${count}`);
  label.textContent = 'Mark as read';
  count += 1;
  div5.appendChild(input);
  div5.appendChild(label);
  div1.appendChild(div2);
  div1.appendChild(div3);
  div1.appendChild(div4);
  div1.appendChild(div5);
  div1.appendChild(btn);
  library.appendChild(div1);
}

addBookToLibrary("Can't Hurt Me", 'David Gogins', '200', false);
addCard();
addBookToLibrary(
  'How to win friends and influence people',
  'Dale Carneige',
  '300',
  true,
);
addCard();

const newBook = document.querySelector('#new-book');
const form = document.querySelector('.form');
const close = document.querySelector('#close');
const submit = document.querySelector('#submit');
const title = document.querySelector('#title');
const author = document.querySelector('#author');
const pages = document.querySelector('#pages');
const state = document.querySelector('#status');
const remove = document.querySelectorAll('.remove');

remove.forEach((btn) => {
  btn.addEventListener('click', (e) => {
    e.target.parentElement.remove();
  });
});

newBook.addEventListener('click', () => {
  form.classList.add('open-form');
});

close.addEventListener('click', () => {
  form.classList.remove('open-form');
});

submit.addEventListener('click', (event) => {
  addBookToLibrary(title.value, author.value, pages.value, state.value);
  addCard();
  title.value = '';
  author.value = '';
  pages.value = '';
  state.value = true;
  form.classList.remove('open-form');
  remove.forEach((btn) => {
    btn.addEventListener('click', (e) => {
      e.target.parentElement.remove();
    });
  });
  event.preventDefault();
});
