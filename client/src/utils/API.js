import axios from "axios";


export default {
  // Generic Google Books Search
  searchGbooks: function (query) {
    const URI = `https://www.googleapis.com/books/v1/volumes?q=${query}`
    console.log(URI)
    // axios.get("/api/recipes", { params: { q: query } })
    return axios.get(URI).then(res => { return res.data })
  },
  // Gets all books
  getBooks: function () {
    return axios.get("/api/books");
  },
  // Gets the book with the given id
  getBook: function (id) {
    return axios.get("/api/books/" + id);
  },
  // Deletes the book with the given id
  deleteBook: function (id) {
    return axios.delete("/api/books/" + id);
  },
  // Saves a book to the database
  insertBook: function (bookData) {
    return axios.post("/api/books", bookData);
  }
};
