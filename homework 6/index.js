function Library(name, books, address) {
    this.name = name;
    this.books = books;
    this.address = address;
    this.numberOfMembers = function () {
        if (this.books.length > 0) {
            return this.books.length * 15;
        }
        if (this.books.length == 0) {
            console.log('There are no books in the library!');
            return;
        }
    };
    this.printBooks = function () {
        if (this.books.length == 0) {
            console.log('There are no books in the library!');
            return;
        }
        if (this.books.length > 0) {
            return this.books.forEach(book => console.log(`"${book.title}" from ${book.authors}`));
        }
    }
}

function Book(title, genre, libraries, authors) {
    this.title = title;
    this.genre = genre;
    this.libraries = libraries;
    this.authors = authors;
    this.addLibrary = function (lib) {
        lib.books.push(this);
    }
    this.removeLibrary = function (lib) {
        lib.books.pop(this);
    }
}

function Author(firstName, lastName, yearOfBirth) {
    this.firstName = firstName;
    this.lastName = lastName;
    this.yearOfBirth = yearOfBirth;
    this.books = [];
    this.currentBook = null;
    this.startBook = function (book) {
        this.currentBook = book;
        this.books.push(this.currentBook);
    }
}
let author = new Author("Ernest", "Hemingway", 1899);
let book = new Book("About That Night", " Romance novel", ["Some library", "Boston Library"], "Julie James");
let library = new Library("Bodleian Library", [], "Las United Kingdom");



book.addLibrary(library);
library.printBooks(book);
book.removeLibrary(library);
library.printBooks(book);
author.startBook(book);
console.log(library);
console.log(author);


let secondLibrary = Object.create(library);
secondLibrary.addBook = function () {
    this.books.push(book);
}
secondLibrary.addBook();