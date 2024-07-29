const express = require("express");

const app = express();
const port = 3000;

let movies = [
  {
    id: 1,
    title: "The Shawshank Redemption",
    director: "Frank Darabont",
    release_date: "1994-09-22",
  },
  {
    id: 2,
    title: "The Godfather",
    director: "Francis Ford Coppola",
    release_date: "1972-03-24",
  },
  {
    id: 3,
    title: "The Dark Knight",
    director: "Christopher Nolan",
    release_date: "2008-07-18",
  },
];

// get the movie list in the form of JSON
app.get("/movie", (req, res) => {
    res.json(movies)
});
