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

function addCard(title, author, pages, status) {
    const library = document.querySelector(".library");
    const btn = document.createElement('button');
    btn.classList.add("remove")
    const div1 = document.createElement('div');
    div1.classList.add("card");
    const div2 = document.createElement('div');
    div2.textContent = title;
    div2.classList.add("book-title");
    const div3 = document.createElement('div');
    div3.textContent = ` by ${author}`;
    div3.classList.add("book-author");
    const div4 = document.createElement('div');
    div4.textContent = pages;
    div4.classList.add("book-pages");
    const div5 = document.createElement('div');
    div5.classList.add("grid-container");
    const input = document.createElement('input');
    input.setAttribute('type', 'checkbox');
    input.setAttribute("id", "checkbox");
    input.setAttribute("name", "checkbox");
    if(status === "true") {
        input.checked = true;
    }
    const label = document.createElement('label');
    label.setAttribute("for", "checkbox");
    label.textContent = "Mark as read";
    div5.appendChild(input);
    div5.appendChild(label);
    div1.appendChild(btn);
    div1.appendChild(div2);
    div1.appendChild(div3);
    div1.appendChild(div4);
    div1.appendChild(div5);
    library.appendChild(div1);
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
    addBookToLibrary(title.value, author.value, pages.value, state.value);
    addCard(title.value, author.value, pages.value, state.value);
    title.value = "";
    author.value = "";
    pages.value = "";
    state.value = true;
    form.classList.remove("open-form");
    console.log(myLibrary);
    event.preventDefault();
})
