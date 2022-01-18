function fetchBooks() {
  // To pass the tests, don't forget to return your fetch!
  return fetch("https://anapioficeandfire.com/api/books")
  .then( (resp) => resp.json() )
  .then( (json) => renderBooks(json) );
}

function renderBooks(books) {
  const main = document.querySelector('main');
  books.forEach(book => {
    const h2 = document.createElement('h2');
    h2.innerHTML = book.name;
    main.appendChild(h2);
  });
}

document.addEventListener('DOMContentLoaded', function() {
  fetchBooks();
  fifthBook();
  character1031();
  bookPages();
});
// const theBooks = () => {
//   return fetch("https://anapioficeandfire.com/api/books")
//   .then( (resp) => resp.json() )
//   .then( (json) => *******)
// }

// 1. The 5th book in the series

const fifthBook = () => {
  return fetch("https://anapioficeandfire.com/api/books")
  .then( (resp) => resp.json() )
  .then( (json) => console.log( `The Fifth Book in the Series: ${json[4].name}`))
}

// 2. The 1031st character in the series

const character1031 = () => {
  return fetch("https://anapioficeandfire.com/api/books")
  .then( (resp) => resp.json() )
  .then( (json) => charCount(json))
}

function charCount(books) {
  let chars = [];
  books.forEach((book) => {
    // console.log(book.characters);
    while (chars.length <=1030){
      book.characters.forEach(character=>chars.push(character))
    }
  })
  fetchCharacter(chars[1030]);
};

function fetchCharacter(url) {
  // To pass the tests, don't forget to return your fetch!
  return fetch(url)
  .then( (resp) => resp.json() )
  .then( (json) => console.log(`The 1031st Character in the Series: ${json.name}`));
}

// 3. The total number of pages of all the books
const bookPages = () => {
  return fetch("https://anapioficeandfire.com/api/books")
  .then( (resp) => resp.json() )
  .then( (json) => pageCount(json));
}

function pageCount(books) {
  console.log(`Total Number of Pages in the Series: ${books.reduce((tot, book) => {
    return tot+=parseInt(book.numberOfPages);
  },0)}`)};
