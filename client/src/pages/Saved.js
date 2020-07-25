import React, { useState, useEffect } from "react";
import { DeleteBtn } from "../components/Buttons";
import Jumbotron from "../components/Jumbotron";
import API from "../utils/API";
import { Link } from "react-router-dom";
import { Col, Row, Container } from "../components/Grid";
import { ResultCard } from "../components/List";

function Saved() {
  // Setting our component's initial state
  const [savedBooks, setsavedBooks] = useState([])

  // Load all books and store them with setBooks
  useEffect(() => {
    loadBooks()
  }, [])

  // Loads all books and sets them to books
  function loadBooks() {
    API.getBooks()
      .then(res =>
        setsavedBooks(res.data)
      )
      .catch(err => console.log(err));
  };

  // Deletes a book from the database with a given id, then reloads books from the db
  function deleteBook(id) {
    API.deleteBook(id)
      .then(res => loadBooks())
      .catch(err => console.log(err));
  }

  return (
    <Container fluid>
      <Row>
        <Col size="md-2" />
        <Col size="md-8 sm-12">
          <Jumbotron>
            <h1>Saved Books</h1>
          </Jumbotron>
        </Col>
        <Col size="md-2" />
        <Col size="md-1" />
        <Col size="md-10 sm-12">
          {savedBooks.length ? (
            <div>
              {savedBooks.map(book => {
                return (
                  <ResultCard
                    key={book.id}
                    title={book.title}
                    authors={book.authors}
                    googleId={book.googleId}
                    image={book.image}
                    description={book.description}
                    link={book.link}
                  >
                    <DeleteBtn onClick={() => deleteBook(book._id)} />
                  </ResultCard>

                )
              })}
            </div>
          ) : (
              <></>
            )}
        </Col>
        <Col size="md-1" />

      </Row>
    </Container>
  );
}


export default Saved;