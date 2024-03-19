//include fs module 
const fs = require("fs");

//create json data

const books = [
  {
    title:' Clean Architecture',
    author:'Robert C. Martin'
  },
  {
    title:' The Art of Computer Programming',
    author:'Donald Knuth'
  },
  {
    title:' The Mythical Man-Month',
    author:'Frederick P. Brooks'
  },
  {
    title:' Soft Skills',
    author:'John Sonmez'
  }
]
//conver json obj to string
const data = JSON.stringify(books);

//write seperate json file
fs.writeFile("./data.json", data, "utf8", (error) => {
    if (error) {
      console.log(error);
    } else {
      console.log("writeFile complete");
    }
  });

//fetch data from json file
// to read data

fs.readFile("./data.json", "utf8", (error, json) => {
    if (error) {
      console.log(error);
      return;
    }
    try {
      const books = JSON.parse(json);
      books.forEach((book) => {
        console.log(`${book.title} by ${book.auther}`);
      });
    } catch (error) {
      console.log(error);
    }
  });



