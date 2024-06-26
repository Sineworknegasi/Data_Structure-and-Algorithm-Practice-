// Book Class : represents the book

class Book {
  constructor(title, author, isbn) {
    this.title = title;
    this.author = author;
    this.isbn = isbn;
  }
}

//UI class: handle ui tasks for the book class

class UI {
  static displayBooks() {
    const StoredBooks = [
      {
        title: "Book One",
        author: "Author One",
        isbn: 123456789,
      },
      {
        title: "Book Two",
        author: "Author Two",
        isbn: 123456789,
      },
    ];

    const books = StoredBooks;

    books.forEach((book) => {
      UI.addBooKToList(book);
    });
  }

  static addBooKToList(book) {
    const list = document.getElementById("book-list");

    const row = document.createElement("tr");

    row.innerHTML = `
            <td>${book.title}</td>
            <td>${book.author}</td>
            <td>${book.isbn}</td>
            <td><a href="#" class="btn btn-danger btn-sm delete">X</a></td>
        `;

    list.appendChild(row);
  }

  static ShowAlert(message, className) {
    const div = document.createElement("div");
    div.className = `alert alert-${className}`;
    div.appendChild(document.createTextNode(message));
    const container = document.querySelector(".container");
    const form = document.querySelector("#book-form");
    container.insertBefore(div, form);
    //Vanish in 3 seconds
    setTimeout(() => document.querySelector(".alert").remove(), 3000);
  }

  static clearFields() {
    document.querySelector("#title").value = "";
    document.querySelector("#author").value = "";
    document.querySelector("#isbn").value = "";
  }

  static deleteBook(e) {
    if (e.classList.contains("delete")) {
      e.parentElement.parentElement.remove();
    }
  }
}

// Store class: handles storage of the book

class Store {
  static getBooks() {
    let books;
    if(localStorage.getItem("books") === null){
        books = [];
    } else {
        books = JSON.parse(localStorage.getItem("books"));
    }

    return books;
  }

  static addBook(book) {
    const books = Store.getBooks();
    books.push(book);
    localStorage.setItem("books", JSON.stringify(books));
  }

  static removeBook(isbn) {
    const books = Store.getBooks();

    books.forEach((book, index) => {
        if (book.isbn === isbn) {
            books.splice(index, 1);
        }
    });

    localStorage.setItem("books", JSON.stringify(books));
  }
}

// Event: Display Books

document.addEventListener("DOMContentLoaded", UI.displayBooks);

// Event: Add a Book

document.querySelector("#book-form").addEventListener("submit", (e) => {
  //prevent actual submit
  e.preventDefault();
  //get form values
  const title = document.querySelector("#title").value;
  const author = document.querySelector("#author").value;
  const isbn = document.querySelector("#isbn").value;

  // Validate
  if (title === "" || author === "" || isbn === "") {
    UI.ShowAlert("Please fill in all fields", "danger")
  } else {
    //instantiate book
    const book = new Book(title, author, isbn);
    UI.addBooKToList(book);

    //Show success message
    UI.ShowAlert("Book Added", "success")
    //clear fields
    UI.clearFields();
  }
});

//Event: Remove a Book

document.querySelector("#book-list").addEventListener("click", (e) => {
  UI.deleteBook(e.target);

  // Show success message
  UI.ShowAlert("Book Removed", "success")
});
