const request = require('../commonTests');
const fs = require('fs'); //file system

//const data = require('data.json'); //data.json containing the global variables ******

const data = require('../data.json'); //data.json containing the global variables


//Update book
describe("PUT book details", () => {
  try {
    let newDetails;
    beforeEach(function () {
      console.log("Input updated book's details");
      newDetails = {
        bookTitle: "propulsion",
        costINR: "500",
      }; // details to be updated
    });
    afterEach(function () {
      console.log("book details are updated");
    });

    test("Update book now", async (done) => {
      console.log("book to be updated : ", data.bookId);

      const response = await request.request
        .put(`api/books/${data.bookId}`)
        .send(newDetails) //call put() of supertest
        //.set('Authorization', `Token ${request.token}`)
        .expect(200);
      expect(response.body.updatedAt).toBeDefined();
      console.log("UPDATED RESPONSE : ", response.body);
      done();
    });
  } catch (err) {
    console.log("ERROR : ", err);
  }
});

//DELETE the book
describe("DELETE book details", () => {
  try {
    beforeAll(function () {
      console.log("To delete book : ", data.bookId);
    });

    test("Delete request", async (done) => {
      const response = await request.request
        .delete(`api/books/${data.Id}`) //invoke delete() of supertest
        .expect(204);
      console.log("DELETE RESPONSE : ", response.body);
      done();
    });

    afterAll(function () {
      console.log("book is deleted!!");
      //fs.unlinkSync('data.json');   //remove data.json after all tests are run    **************
    });
  } catch (err) {
    console.log("EXCEPTION : ", err);
  }
});