let myLibrary = [];

function Book(id, title, author, genre, pages, haveRead) {
  // the constructor...
  this.id = id;
  this.title = title;
  this.author = author;
  this.genre = genre;
  this.pages = pages;
  this.haveRead = haveRead;
  this.changeReadStatus = function() {
    this.haveRead = !this.haveRead;
  }
}

function addBookToLibrary( title, author, genre, pages, haveRead) {
  console.table("Book added: ",new Book(title, author, genre, pages, haveRead));
  if (myLibrary.length === 0) {
    myLibrary.push(new Book(0, title, author, genre, pages, haveRead));
  } else {
    myLibrary.push(new Book(myLibrary[myLibrary.length - 1].id + 1, title, author, genre, pages, haveRead));
  }
}

const booksContainer = document.querySelector(".books-container");

function openForm() {
  document.getElementById("myForm").style.display = "block";
}

function closeForm() {
  document.getElementById("myForm").style.display = "none";
}

const createBookCard = (book) => {
  const bookContainer = document.createElement("div");
  bookContainer.setAttribute("data-id", book.id);
  const title = document.createElement("h3");
  title.classList.add("book-title");
  const author = document.createElement("p");
  const genre = document.createElement("p");
  const pages = document.createElement("p");
  const haveRead = document.createElement("button");
  author.setAttribute("data-author", `Author: ${book.author}`);
  genre.setAttribute("data-genre", `Genre: ${book.genre}`);
  pages.setAttribute("data-pages", book.pages === "" ? `pages: 0` : `Pages: ${book.pages}`);
  haveRead.setAttribute("data-haveRead", book.haveRead ? "Have Read" : "Not Read");
  haveRead.setAttribute("id", `read-${book.id}`);
  haveRead.onclick = function() {
    myLibrary[book.id].changeReadStatus();
    haveRead.setAttribute("data-haveRead", book.haveRead ? "Have Read" : "Not Read");
    haveRead.innerHTML = haveRead.getAttribute("data-haveRead");
  };
  title.innerHTML = title.getAttribute("data-title");
  author.innerHTML = author.getAttribute("data-author");
  genre.innerHTML = genre.getAttribute("data-genre");
  pages.innerHTML = pages.getAttribute("data-pages");
  haveRead.innerHTML = haveRead.getAttribute("data-haveRead");
  bookContainer.append(title, author, genre, pages, haveRead );
  bookContainer.classList.add("book");
  booksContainer.appendChild(bookContainer);
}


function validation() {

}
function submitForm() {
  const title = document.getElementById("title").value;
  const author = document.getElementById("author").value;
  const genre = document.getElementById("genre").value;
  const pages = document.getElementById("pages").value;
  const haveRead = document.getElementById("haveRead").value !== null ? document.getElementById("haveRead").value : false;
  console.log('haveRead', haveRead)

  /* Calling the function addBookToLibrary and passing in the values of the form. */
  addBookToLibrary(title, author, genre, pages, haveRead);
  updateBooks();
  closeForm();
}
// addBookToLibrary("The Hobbit", "J.R.R. Tolkien", "Fantasy", 295, true);
// displayBooks();
