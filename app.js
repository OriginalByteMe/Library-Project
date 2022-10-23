let myLibrary = [];

function Book(name, author, genre) {
  // the constructor...
  this.name = name;
  this.author = author;
  this.genre = genre;
}

function addBookToLibrary( ...props) {
  myLibrary.push(new Book( ...props));
}