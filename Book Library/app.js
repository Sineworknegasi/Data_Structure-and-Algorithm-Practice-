const booktitle = document.getElementById('bookTitle');
const bookauthor = document.getElementById('bookAuthor');
const booklist = document.getElementById('bookList');
const addBookButton = document.getElementById('addBookButton');

// Define the book class

class Books {
    constructor(title, author) {
        this.title = title;
        this.author = author;
    }
}

//define Libaray Class 

class Libaray {
    constructor () {
        this.Books = [];
    }

    addBook(book) {
        this.Books.push(book);
        this.render()
    }

    removeBook(bookTitle){
        this.Books = this.Books.filter((book) => book.title !== bookTitle);
        this.render()
    }

    render() {
        booklist.innerHTML = ``

        this.Books.forEach((book) => {
            const li = document.createElement('li');
            li.textContent = `${book.title} by ${book.author}`;

            const deleteButton = document.createElement('button');
            deleteButton.textContent = 'Delete';
            deleteButton.onclick = () => this.removeBook(book.title);

            li.appendChild(deleteButton);
            booklist.appendChild(li);
        })
    }
}

const library = new Libaray();

addBookButton.addEventListener('click', () => {
    const title = booktitle.value;
    const author = bookauthor.value;

    const book = new Books(title, author);
    library.addBook(book);
    booktitle.value = '';
    bookauthor.value = '';
})

