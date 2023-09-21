const myLibrary = [];

class Book {
    constructor(name, author, pages, read) {
        this.name = name;
        this.author = author;
        this.pages = pages;
        this.read = read;
    }
}

function addBookToLibrary(name, author, pages, read) {
    myLibrary.push(Book(name, author, pages, read))
}

function displayBooks(arr){
    for(let i = 0; i < arr.length; i++){
        arr[i].name;
        arr[i].author;
        arr[i].pages;
        arr[i].read;
    }
}