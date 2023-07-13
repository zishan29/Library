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
console.log(myLibrary);

const newBook = document.querySelector('#new-book');
const form = document.querySelector(".form")
const close = document.querySelector("#close")
newBook.addEventListener('click', () => {
    form.classList.add("open-form")
});
close.addEventListener('click', () => {
    form.classList.remove("open-form")
})