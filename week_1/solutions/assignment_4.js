let book = {
    title: "The Alchemist",
    author: "Paulo Coelho",
    year: 1988,
    genre: "Adventure",
    summary() {
        return `${this.title} is a book by ${this.author} published in ${this.year} in the genre of ${this.genre}.`;
    }
};

console.log(Object.keys(book)); // [ 'title', 'author', 'year', 'genre', 'summary' ]
console.log(Object.values(book)); // [ 'The Alchemist', 'Paulo Coelho', 1988, 'Adventure', [Function: summary] ]
console.log(book.summary()); // The Alchemist is a book by Paulo Coelho published in 1988 in the genre of Adventure.