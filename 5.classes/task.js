class PrintEditionItem {
    constructor(bookName, releaseDate, pagesCount, state = 100, type = null){
           this.bookName = bookName;
           this.releaseDate = releaseDate;
           this.pagesCount = pagesCount;
           this.state = state;
           this.type = type;
    }
    fix(){
       return this.state *= 1.5;
    }
    set state(stateIndex){
        if (stateIndex < 0) {
            this._state = 0;
        } else if (stateIndex > 100) {
            this._state = 100;
        } else {
            this._state = stateIndex;
        }
    }
    get state() {
        return this._state;
    }
}

class Magazine extends PrintEditionItem {
    constructor(bookName, releaseDate, pagesCount, state){
        super(bookName, releaseDate, pagesCount, state);
        this.type = "magazine";       
    }
}

class Book extends PrintEditionItem {
    constructor(author, bookName, releaseDate, pagesCount, state) {
        super(bookName, releaseDate, pagesCount, state);
        this.author = author;
        this.type = "book";
    }
}

class NovelBook extends Book {
    constructor(author, bookName, releaseDate, pagesCount, state) {
        super(author, bookName, releaseDate, pagesCount, state);
        this.type = "novel";
    }
}

class FantasticBook extends Book {
    constructor(author, bookName, releaseDate, pagesCount, state, author) {
        super(author, bookName, releaseDate, pagesCount, state);
        this.type = "fantastic";
    }
}

class DetectiveBook extends Book {
    constructor(author, bookName, releaseDate, pagesCount, state) {
        super(author, bookName, releaseDate, pagesCount, state);
        this.type = "detective";
    }
}            

class Library {
    constructor(name){
        this.name = name;
        this.books = [];
    }

addBook(book){
    if (book.state > 30) {
        this.books.push(book);
    }
   }

findBookBy(type, value) {
    let book = this.books.find(book => book[type] == value);
    if (book) {
        return book;
    } else {
        return null;
    }
}

giveBookByName(bookName) {
    book = this.books.find(book => book.bookName === bookName);
    if (book) {
        return this.books = this.books.filter(book => book.bookName !== bookName);
    } else {
        return null;
    }
}
}
   

