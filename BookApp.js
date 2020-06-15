let books = [
    {
        title: "Harry Potter and the Philosopher's Stone",
        yearOfPublication: 1997,
        authorId: "7e7354b8-59e8-4b6a-916b-70882eab6fb6",
        bookId: "426ef1f8-59fc-40c8-8e0b-6943848be1ac"
    }, {
        title: "Harry Potter and the Chamber of Secrets",
        yearOfPublication: 1998,
        authorId: "7e7354b8-59e8-4b6a-916b-70882eab6fb6",
        bookId: "ce215083-e77d-4ead-917e-680d11443b69"
    }, {
        title: "Harry Potter and the Prisoner of Azkaban",
        yearOfPublication: 2000,
        authorId: "7e7354b8-59e8-4b6a-916b-70882eab6fb6",
        bookId: "6454c991-985e-4f1c-b390-76ef4293f6ba"
    }, {
        title: "The Hobbit",
        yearOfPublication: 1937,
        authorId: "184c518a-753f-49ce-9abb-e2e9c29fc980",
        bookId: "fa7cb9a8-0f81-4205-8650-64225d7c1de4"
    }, {
        title: "The Fellowship of the Ring",
        yearOfPublication: 1954,
        authorId: "184c518a-753f-49ce-9abb-e2e9c29fc980",
        bookId: "752b80b5-7b9f-454d-b1d0-b274480d9ad2"
    }, {
        title: "The Two Towers",
        yearOfPublication: 1954,
        authorId: "184c518a-753f-49ce-9abb-e2e9c29fc980",
        bookId: "ba86fdd0-1ac2-4867-a0fa-d1b1bd7de403"
    }, {
        title: "The Return of the King",
        yearOfPublication: 1955,
        authorId: "184c518a-753f-49ce-9abb-e2e9c29fc980",
        bookId: "64e58f34-94b3-4dd5-9701-d00513f83291"
    }
];

let authors = [
    {
        firstName: "J. K.",
        lastName: "Rowling",
        id: "7e7354b8-59e8-4b6a-916b-70882eab6fb6"
    }, {
        firstName: "J. R. R.",
        lastName: "Tolkien",
        id: "184c518a-753f-49ce-9abb-e2e9c29fc980"
    }
];
// Q1 - Create a function called getBooks which returns the titles of all books ordered by their publication year.
// Q2 - Create a function called getBook which takes an id argument and returns the book with a matching id.
// Q3 - Create a function called getAuthor which takes an id argument and returns the author with the matching id.
// Q4 - Create a function called getBooksByAuthor which takes the id of an author as an argument and returns an array of all the books written 
// by that author in order of the year of publication.
// Q5 - Create a function called searchBooks which takes a string which is a search term as an argument. The function should return all books 
// where the title or author name contains the given string.
// //Q1>
//Q1 Create a function called getBooks which returns the titles of all books ordered by their publication year.
// function getBooks(num1, num2) {
//        return num1.yearOfPublication - num2.yearOfPublication;
//      }

// let sortByPublicationYear =books.sort(getBooks).map(obj => obj.title);
// console.log(sortByPublicationYear);

//Q2 Create a function called getBook which takes an id argument and returns the book with a matching id.
// 
// function getBook(id) {
//     return books.find(book => book.bookId == id);
// }
// let myBook = getBook("64e58f34-94b3-4dd5-9701-d00513f83291");
// console.log(myBook);



// function getBook(id){
//     function getBookById(book){
//         return book.bookId == id;
//     }
//     return books.find(getBookById);
// }
// let myBook = getBook("64e58f34-94b3-4dd5-9701-d00513f83291");
// console.log(myBook);

//Q3

// function getAuthor(id){
//     function getAuthorById(author){
//         return author.id == id;
//     }
//     return authors.find(getAuthorById);
// }
// let myBookAuthor = getAuthor("184c518a-753f-49ce-9abb-e2e9c29fc980");
// console.log(myBookAuthor);

// function getAuthor(id){
//     return authors.find(author => author.id == id);
// }
// let myBookAuthor = getAuthor("184c518a-753f-49ce-9abb-e2e9c29fc980");
// console.log(myBookAuthor);

//Q4.Create a function called getBooksByAuthor which takes the id of an author as an argument and returns an array of all the books written 
// by that author in order of the year of publication.

// function getBooksByAuthor(id) {
//     return books.filter(book => book.authorId == id);
// }
// let BooksByAuthor = getBooksByAuthor("7e7354b8-59e8-4b6a-916b-70882eab6fb6");
// console.log(BooksByAuthor.sort((a,b) => a.yearOfPublication - b.yearOfPublication));

//Q5 Create a function called searchBooks which takes a string which is a search term as an argument. The function should return all books 
// where the title or author name contains the given string.

// function searchBooks(searchTerm){
//     return (books.filter(book => book.title == searchTerm || authors.filter(author => (author.firstName || author.lastName))== searchTerm);
// }
// let givenString = searchBooks("Harry");
// console.log(givenString);


function getAuthorNameById(id){
    let objL =authors.find(obj => obj.id == id);
    return objL.firstName;
}
let val = books.map(obj => 
    {
    name: getAuthorNameById(obj.authorId);
}
);

function mapbooks(book){
    function findAuthorById(author) {
        return author.id == book.authorId;
    }
    let owner = authors.find(findAuthorById);
    return {
        title: book.title,
        authorid: book.authorId,
        firstName: owner.firstName,
        lastName: owner.lastName
    };
}
let authorBooks =books.map(mapbooks);


function searchBooks(searchTerm){
    return (authorBooks.filter(book => book.title == searchTerm || book.firstName == searchTerm || book.lastName == searchTerm));
}
//  console.log(authorBooks);
let givenString = searchBooks("Tolkien");
console.log(givenString);

// {{{{{{{{{{{{{{{{{{{{{{{{{{{{{{{{{{{{{{{{{{{{{{{{{{{  Question Q5 }}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}
function searchBooks(searchTerm) {
    
    function termAppearsInBooksOrAuthor(book) {
        let lowerSearchTerm = searchTerm.toLowerCase();

        let author = getAuthor(book.authorId);
        return book.title.toLowerCase().includes(lowerSearchTerm) ||
            author.firstName.toLowerCase().includes(lowerSearchTerm) ||
            author.lastName.toLowerCase().includes(lowerSearchTerm);

    }

    return books.filter(termAppearsInBooksOrAuthor);
}

function sortBooks(sortField) {
    function sortByField(book1, book2) {
        if (book1[sortField] > book2[sortField]) {
            return 1;
        } else if (book1[sortField] < book2[sortField]) {
            return -1;
        } else {
            return 0;
        }
    }

    return books
        .sort(sortByField)
        .map(book => book.title);
}

console.log(searchBooks("otte"));

// console.log(sortBooks("title"));
