let myLibrary = [];

function Book(title, author, pages, readStatus) {
    this.title = title;
    this.author = author;
    this.pages = pages;
    this.readStatus = readStatus;
}

function addBookToLibrary(title, author, pages, readStatus) {
    let book = new Book(title, author, pages, readStatus);
    myLibrary.push(book);
}

addBookToLibrary("Can't Hurt Me", "David Gogins", 200, false);
addBookToLibrary("How to win friends and influence people", "Dale Carneige", 300, true);

const newBook = document.querySelector('#new-book');
const form = document.querySelector(".form")
const close = document.querySelector("#close")
const submit = document.querySelector("#submit");
const title = document.querySelector("#title");
const author = document.querySelector("#author");
const pages = document.querySelector("#pages");
const state = document.querySelector("#status");

newBook.addEventListener('click', () => {
    form.classList.add("open-form");
});
close.addEventListener('click', () => {
    form.classList.remove("open-form");
});

submit.addEventListener('click', (event) => {
    let t = title.value;
    let a  = author.value;
    let p = pages.value;
    let s = state.value;
    addBookToLibrary(t, a, p, s);
    title.value = "";
    author.value = "";
    pages.value = "";
    state.value = true;
    form.classList.remove("open-form");
    console.log(myLibrary);
    event.preventDefault();
})
