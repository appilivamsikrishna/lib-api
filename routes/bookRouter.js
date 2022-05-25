// import controllers books
const bookController = require('../controllers/bookController.js')


// router
const router = require('express').Router()


// use routers
router.post('/addBook', bookController.upload , bookController.addBook)
router.get('/allBooks', bookController.getAllBooks)
router.get('/softcopyAvailable', bookController.getPDFBook)




// Books router
router.get('/:id', bookController.getOneBook)
router.put('/:id', bookController.updateBook)
router.delete('/:id', bookController.deleteBook)
module.exports = router