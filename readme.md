Download and install XAMPP from https://www.apachefriends.org/   ;

Turn on MySQL database server on XAMPP server; port 3306

use the below code in terminal at lib-api folder, to initate API
npm start server.js 

/////////////////////////////////

In postman, use the below requests to get response from API

-------------
GET request 

http://localhost:8080/api/books/AllBooks 

to get all books

Example response ;

[
    {
        "id": 1,
        "bookTitle": "Aerodynamics",
        "costINR": 2000,
        "description": "very good explanation",
        "softcopyAvailable": true,
        "publishYear": 2002,
        "edition": "8",
        "createdAt": "2022-06-22T05:47:55.000Z",
        "updatedAt": "2022-06-22T05:47:55.000Z"
    },
    {
        "id": 2,
        "bookTitle": "book 2",
        "costINR": 2089,
        "description": "very good to read ",
        "softcopyAvailable": true,
        "publishYear": 2090,
        "edition": "9",
        "createdAt": "2022-06-22T05:49:13.000Z",
        "updatedAt": "2022-06-22T05:49:13.000Z"
    }
]

--------------------------

POST 

http://localhost:8080/api/books/addBook

Body > form-data >  data-entry-format

data-entry-format is form-data

bookTitle : STRING
costINR : INTEGER
description : STRING
softcopyAvailable : BOOLEAN
publishYear : INTEGER
edition : STRING


--------------------


To get a book with book_ID

GET

http://localhost:8080/api/books/:id

in the path variable, write the ID number of the book


or

GET http://localhost:8080/api/books/6   to get book of id = 6

------------------------


in chrome browser,  use following URL to view the database

http://localhost/phpmyadmin/index.php?route=/sql&db=library_db&table=books

----------


To Update a book

PUT

http://localhost:8080/api/books/:id



---------

To delete a book

DELETE

http://localhost:8080/api/books/:id


----------


to check if pdf version of book available, with book id

GET 

http://localhost:8080/api/books/softcopyAvailable








-----