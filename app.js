let myLibrary = [];

function Book(title, author, genre, pages, haveRead) {
  // the constructor...
  this.title = title;
  this.author = author;
  this.genre = genre;
  this.pages = pages;
  this.haveRead = haveRead;
}

function addBookToLibrary( title, author, genre, pages, haveRead) {
  console.log("Book added: ",new Book(title, author, genre, pages, haveRead));
  myLibrary.push(new Book(title, author, genre, pages, haveRead));
}

function openForm() {
  document.getElementById("myForm").style.display = "block";
}

function closeForm() {
  document.getElementById("myForm").style.display = "none";
}


function displayBooks() {
  // display books in myLibrary
  addBookToLibrary("The Hobbit", "J.R.R. Tolkien", "Fantasy", 295, true);
  addBookToLibrary("The Lord of the Rings", "J.R.R. Tolkien", "Fantasy", 1178, true);
  addBookToLibrary("The Silmarillion", "J.R.R. Tolkien", "Fantasy", 412, false);
  addBookToLibrary("The Hobbit", "J.R.R. Tolkien", "Fantasy", 295, true);
  const booksContainer = document.querySelector(".books-container");
  for(let i =0, len = myLibrary.length; i < len; i++){
    let bookContainer = document.createElement("div");
    let title = document.createElement("h3");
    title.classList.add("book-title");
    let author = document.createElement("p");
    let genre = document.createElement("p");
    let pages = document.createElement("p");
    let haveRead = document.createElement("p");
    title.innerHTML = myLibrary[i].title;
    author.innerHTML = myLibrary[i].author;
    genre.innerHTML = myLibrary[i].genre;
    pages.innerHTML = myLibrary[i].pages;
    haveRead.innerHTML = myLibrary[i].haveRead ? "Have Read" : "Not Read";
    bookContainer.append(title, author, genre, pages, haveRead);
    bookContainer.classList.add("book");
    booksContainer.appendChild(bookContainer);
  }
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
  displayBooks();
  closeForm();
}
