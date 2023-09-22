const myLibrary = [];

function Book (name, author, pages, read) {
    this.name = name;
    this.author = author;
    this.pages = pages;
    this.read = read;
}

function addBookToLibrary() {

    let name = document.getElementById('book-name').value;
    let author = document.getElementById('author').value;
    let pages = document.getElementById('book-pages').value;
    let read = document.getElementById('been-read').value;

    const book = new Book(name, author, pages, read);
    
    myLibrary.push(book);

    displayBooks();
}

function displayBooks(){
    for(let i = 0; i < myLibrary.length; i++){
        document.getElementById('input-title').textContent = myLibrary[i].name;
        document.getElementById('input-author').textContent = myLibrary[i].author;
        document.getElementById('input-pages').textContent = myLibrary[i].pages;
        document.getElementById('input-read').textContent = myLibrary[i].read;
    }
}

function logSubmit(event){
    event.preventDefault();
}

const form = document.getElementById('form');
form.addEventListener("submit", logSubmit);
form.addEventListener("submit", addBookToLibrary);

