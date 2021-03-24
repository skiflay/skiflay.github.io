"use strict";

// exports.findTitles= findTitles;
// exports.findAuthors= findAuthors;
// exports.findIDs= findIDs;
// exports.addBook = addBook;

/*addBook, which will take title, author, and libraryID as inputs. It will create a
new book object and add it to the library, which will be represented as a global */

let library = [
    { title: "The Road Ahead", author: "Bill Gates", libraryID: 1254 },
    { title: "Walter Isaacson", author: "Steve Jobs", libraryID: 4264 },
    { title: "Mockingjay: The Final Book of The Hunger Games", author: "Suzanne Collins", libraryID: 3245 }
];

/**
 * Event handler to display library titles sorted alphabetically
 * @returns {undefined}
 */
 function showTitles() {

    /* put all titles into an array, then sort, then join with newline and insert in textarea innerHTML */

    const titles = findTitles();

    /*need to sort and then join the titles still (e.g., someArray.join("\n")  */
    titles.sort();
    const titleString = titles.join("\n");

    let textArea = document.getElementById("displayArea");
    textArea.innerHTML = titleString;
}

/**
 * @returns {undefined}
 */
 function addBrowserBook() {
    const title = document.getElementById("title").value;
    const author = document.getElementById("author").value;
    const id= document.getElementById("id").value;
    //const newBrowserBook = { author: author, title: "foo", id: "123" };
    const newBrowserBook = {author: author, title: title, id: id}
    addBook(newBrowserBook);
    return;
}

/**
 * Event handler to display library titles sorted alphabetically
 * @returns {undefined}
 */
 function showAuthors() {

    /* put all titles into an array, then sort, then join with newline and insert in textarea innerHTML */

    const author = findAuthors();

    /*need to sort and then join the titles still (e.g., someArray.join("\n")  */
    author.sort();
    const authorString = author.join("\n");

    let textArea = document.getElementById("displayArea");
    textArea.innerHTML = authorString;
}

/**
 * Event handler to display library titles sorted alphabetically
 * @returns {undefined}
 */
 function showIDs() {

    /* put all titles into an array, then sort, then join with newline and insert in textarea innerHTML */

    const id = findIDs();

    /*need to sort and then join the titles still (e.g., someArray.join("\n")  */
    id.sort();
    const idString = id.join("\n");

    let textArea = document.getElementById("displayArea");
    textArea.innerHTML = idString;
}
/**
 * 
 * @param {string} title is book title
 * @returns {string}
 */
 function scramble(){
    const title = findTitles();
    let titleLen= title.toString().split(" ");
    let sortedTitle= titleLen.sort((a, b)=> a.length - b.length )
    console.log(sortedTitle)
    const titleString = titleLen.join("\n");
    let textArea = document.getElementById("displayArea");
    textArea.innerHTML = titleString;
 }
console.log(scramble(library))
/**
 * 
 * @param {string} author is book author
 * @param {string} title is book title
 * @param {string} bookId  is book title
 * @returns {Object} the new book
 */

function addBook(book){
    library.push(book);
    return book;
}
// console.log(addBook({title: "My New Book", author: "Me Too", libraryID: 1144}))

function findTitles(){
let title = [];
for(let book of library){
    title.push(book.title)  
}
//return title.sort()
title.sort(function(a,b) {
    return (a > b) ? 1 : ((b > a) ? -1 : 0);
});
}
console.log(findTitles(library))

function findAuthors(){ 
    let author = [];
    for(let book of library){
        author.push(book.author)
    }
    return author.sort();
}
console.log(findAuthors(library))

function findIDs(){
    let bookId = [];
    for(let book of library){
        bookId.push(book.libraryID)
    }
    return bookId.sort()
}
console.log(findIDs(library))

function makeBook(title, author, libraryID){
    const newBook = {
        title,
        author,
        libraryID
    }
    return newBook;
}

