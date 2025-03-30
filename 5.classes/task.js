class PrintEditionItem {
    constructor(name, releaseDate, pagesCount, state = 100, type = null){
           this.name = name;
           this.releaseDate = releaseDate;
           this.pagesCount = pagesCount;
           this.state = state;
           this.type = type;
    }
    fix(){
       return this.state * 1.5;
    }
    set state(stateIndex){
        switch(stateIndex) {
            case 0:
                this._state = 0;
                break;
            case stateIndex >= 100:
                this._state = 100;
                break;
            default:
                this._state = stateIndex;
        }
    }
    get state() {
        return this._state;
    }
}

class Magazine extends PrintEditionItem() {
    constructor(name, releaseDate, pagesCount, state){
        super(name, releaseDate, pagesCount, state);
        this.type = "magazine";       
    }
}

class Book extends PrintEditionItem() {
    constructor(name, releaseDate, pagesCount, state, authorName) {
        super(name, releaseDate, pagesCount, state);
        this.author = authorName;
        this.type = "book";
    }
}

class NovelBook extends Book() {
    constructor(name, releaseDate, pagesCount, state, authorName) {
        super(name, releaseDate, pagesCount, state);
        this.author = authorName;
        this.type = "novel";
    }
}

class FantasticBook extends Book() {
    constructor(name, releaseDate, pagesCount, state, authorName) {
        super(name, releaseDate, pagesCount, state);
        this.author = authorName;
        this.type = "fantastic";
    }
}

class DetectiveBook extends Book() {
    constructor(name, releaseDate, pagesCount, state, authorName) {
        super(name, releaseDate, pagesCount, state);
        this.author = authorName;
        this.type = "detective";
    }
}            

class Library {
    constructor(name){
        this.name = name;
        this.books = [];

    addBook(book){
         if (this._state > 30) {
             this.books.push(book);
         }
        }
    findBookBy(type, value) {
           if (type in this === false) {
            return null;
           }
           return book;
    }
    }
    giveBookByName(bookName) {
            if (this.name === bookName){
                books = books.filter(name => this.name !== bookName);
                return book;
            } else {
                return null;
            }
    }
}
