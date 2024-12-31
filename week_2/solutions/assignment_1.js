class Book {
    constructor(title, author, pages, isRead) {
        this.title = title;
        this.author = author;
        this.pages = pages;
        this.isRead = isRead;
    }

    burrowBook() {
        isAvailable = false;
    }

    returnBook() {
        isAvailable = true;
    }
}

class Library {
    constructor() {
        this.books = [];
    }

    addBook(book) {
        this.books.push(book);
    }

    removeBook(book) {
        this.books = this.books.filter(b => b.title !== book.title);
    }

    listAvailableBooks() {
        this.books.forEach(book => {
            if (book.isRead) {
                console.log(book.title);
            }
        });
    }
    listBooks() {
        this.books.forEach(book => {
            console.log(book.title);
        });
    }
}

// Testing for the classes
const library = new Library();
const book1 = new Book('The Alchemist', 'Paulo Coelho', 208, true);
const book2 = new Book('The Little Prince', 'Antoine de Saint-Exupéry', 96, false);
const book3 = new Book('The Catcher in the Rye', 'J.D. Salinger', 234, true);
library.addBook(book1);
library.addBook(book2);
library.addBook(book3);
library.listAvailableBooks();