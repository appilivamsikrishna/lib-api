const db = require('../models')

// CoverPage Upload
const multer = require('multer')
const path = require('path')

// Model of Book
const Book = db.books

//POST create book

const addBook = async (req, res) => {
    console.log(req.body);
    let info = {
        bookTitle: req.body.bookTitle,
        costINR: req.body.costINR,
        description: req.body.description,
        softcopyAvailable: req.body.softcopyAvailable ? req.body.softcopyAvailable : false,
        publishYear: req.body.publishYear,
        edition: req.body.edition
    }

    const book = await Book.create(info)
    res.status(200).send(book)
    console.log(book)

}


//GET all books

const getAllBooks = async (req, res) => {
    let books = await Book.findAll({})
    res.status(200).send(books)
}

//GET book

const getOneBook = async (req, res) => {
    let id = req.params.id
    let book = await Book.findOne({ where: { id: id }})
    res.status(200).send(book)

}

//PATCH book

const updateBook = async (req, res) => {
    let id = req.params.id
    const book = await Book.update(req.body, { where: { id: id }})
    res.status(200).send(book)

    let info = {
        bookTitle: req.body.bookTitle,
        costINR: req.body.costINR,
        description: req.body.description,
        softcopyAvailable: req.body.softcopyAvailable ? req.body.softcopyAvailable : false,
        publishYear: req.body.publishYear,
        edition: req.body.edition
    }

    const book = await Book.create(info)
    res.status(200).send(book)
    console.log(book)

}

//DELETE book

const deleteBook = async (req, res) => {
    let id = req.params.id
    await Book.destroy({ where: { id: id }} )
    res.status(200).send('Book is deleted !')
}







// GET softcopyAvailable book to check if available as pdf

const getPDFBook = async (req, res) => {

    const books =  await Book.findAll({ where: { softcopyAvailable: true }})

    res.status(200).send(books)

}

// coverPage storage

const storage = multer.diskStorage({
    destination: (req, file, cb) => {
        cb(null, 'Images')
    },
    filename: (req, file, cb) => {
        cb(null, Date.now() + path.extname(file.originalname))
    }
})

const upload = multer({
    storage: storage,
    limits: { fileSize: '1000000' },
    fileFilter: (req, file, cb) => {
        const fileTypes = /jpeg|jpg|png|gif/
        const mimeType = fileTypes.test(file.mimetype)  
        const extname = fileTypes.test(path.extname(file.originalname))

        if(mimeType && extname) {
            return cb(null, true)
        }
        cb('Give proper files formate to upload')
    }
}).single('coverpage')

module.exports = {
    addBook,
    getAllBooks,
    getOneBook,
    updateBook,
    deleteBook,
    getPDFBook,
    upload
}