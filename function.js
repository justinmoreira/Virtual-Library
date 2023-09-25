const myLibrary = [];
let currentIndex = 0;

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
    let read = '';
    if(document.getElementById('been-read').checked){
        read = "Been read";
    } else { 
        read = "Not been read"; 
    }
    
    const book = new Book(name, author, pages, read);
    
    myLibrary.push(book);

    displayNewBook();
}

function displayNewBook(){
    let grid = document.querySelector('.grid');

    let card = document.createElement('div');
    card.className = 'card';
    grid.appendChild(card);

    let cardName = document.createElement('div');
    cardName.textContent = myLibrary[currentIndex].name;
    card.appendChild(cardName);

    let cardAuthor = document.createElement('div');
    cardAuthor.textContent = myLibrary[currentIndex].author;
    card.appendChild(cardAuthor);

    let cardPages = document.createElement('div');
    cardPages.textContent = myLibrary[currentIndex].pages + ' pages';
    card.appendChild(cardPages);

    let cardRead = document.createElement('button');
    cardRead.className = 'delete-input';
    cardRead.textContent = myLibrary[currentIndex].read;
    if(cardRead.textContent == 'Been read') {
        cardRead.style.background = 'green';
    }
    cardRead.addEventListener('click', () => {
        if(cardRead.style.background = 'red'){
            cardRead.textContent = "Been read";
            cardRead.style.background = 'green';
        }
    });
    card.appendChild(cardRead);

    let deleteButton = document.createElement('button');
    deleteButton.className = 'delete-input';
    deleteButton.textContent = 'Delete';
    deleteButton.addEventListener('click', deleteOldBook);
    card.appendChild(deleteButton);
    
    currentIndex++;
}

function deleteOldBook() {
    let parent = this.parentNode;
    parent.remove();
}

function logSubmit(event){
    event.preventDefault();
}

const form = document.getElementById('form');
form.addEventListener("submit", logSubmit);
form.addEventListener("submit", addBookToLibrary);
form.addEventListener("submit", () => {
    document.getElementById('book-name').value = '';
    document.getElementById('author').value = '';
    document.getElementById('book-pages').value = '';
    document.getElementById('been-read').checked = false;
});

