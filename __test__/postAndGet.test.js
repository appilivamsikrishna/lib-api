const request = require('../commonTests');
const fs = require('fs');
let bookID;

//Create a new book
describe("POST request", () => {
  try {
    let bookDetails;
    beforeEach(function () {
      console.log("Input book details!");
      bookDetails = {
        bookTitle: "propulsion",
        costINR: "500",
      }; //new book details to be created
    });

    afterEach(function () {
      console.log("Book is created with ID : ", bookID);
    });

    it("Create book data", async (done) => {
      return (
        request.request
          .post(`api/books`) //post() of supertest
          //.set('Authorization', `Token $  {request.token}`) //Authorization token
          .send(bookDetails) //Request header
          .expect(201) //response to be 201
          .then((res) => {
            expect(res.body).toBeDefined(); //test if response body is defined
            //expect(res.body.status).toBe("success")
            bookID = res.body.id;
            let jsonContent = JSON.stringify({ bookID: res.body.id }); // create a json
            fs.writeFile(
              "data.json",
              jsonContent,
              "utf8",
              function (
                err //write book id into global json file to be used
              ) {
                if (err) {
                  return console.log(err);
                }
                //console.log("POST response body : ", res.body)
                done();
              }
            );
          })
      );
    });
  } catch (err) {
    console.log("Exception : ", err);
  }
});

//GET all books
describe("GET all book details", () => {
  try {
    beforeEach(function () {
      console.log("GET all books details ");
    });

    afterEach(function () {
      console.log("All book details are retrieved");
    });

    test("GET book output", async (done) => {
      await request.request
        .get(`api/books`) //get() of supertest
        //.set('Authorization', `Token ${request.token}`)
        .expect(200)
        .then((response) => {
          // console.log("GET RESPONSE : ", response.body);
          done();
        });
    });
  } catch (err) {
    console.log("Exception : ", err);
  }
});