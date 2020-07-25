import React, { useState, useEffect } from "react";
import { SaveBtn, ViewBtn } from "../components/Buttons";
import Jumbotron from "../components/Jumbotron";
import API from "../utils/API";
import { Link } from "react-router-dom";
import { Col, Row, Container } from "../components/Grid";
import { List, ListItem, ResultCard } from "../components/List";
import { Input, FormBtn } from "../components/Form";

function Search() {
    const [bookResults, setBookResults] = useState([])
    const [search, setSearch] = useState({})

    function handleInputChange(event) {
        const { name, value } = event.target;
        // setSearch({ ...search, [name]: value })
        setSearch({ [name]: value })
    };

    function handleFormSubmit(event) {
        event.preventDefault();
        if (search.query) {
            API.searchGbooks(search.query)
                .then(res => {
                    console.log(res)
                    setBookResults(res.items)
                })
                .then(setSearch({}))
                .catch(err => console.log(err));
        }

    };

    function saveBook(book) {
        console.log(book)
        API.insertBook(book)
    }

    return (
        <Container fluid>
            <Row>
                <Col size="md-2" />
                <Col size="md-8 sm-12">
                    <Jumbotron>
                        <h1>Search Google Books</h1>
                    </Jumbotron>
                    <form>
                        <Input
                            onChange={handleInputChange}
                            name="query"
                            placeholder="Search Google Books"
                        />
                        <FormBtn
                            disabled={!(search.query)}
                            onClick={handleFormSubmit}
                        >
                            Search Google
              </FormBtn>
                    </form>
                </Col>
                <Col size="md-2" />
                <Col size="md-1" />
                <Col size="md-10 sm-12">
                    {bookResults.length ? (
                        <div>
                            {bookResults.map(book => {
                                return (
                                    <ResultCard
                                        key={book.id ? book.id : ""}
                                        title={book.volumeInfo.title ? book.volumeInfo.title : ""}
                                        authors={book.volumeInfo.authors ? book.volumeInfo.authors : ""}
                                        googleId={book.id ? book.id : ""}
                                        image={book.volumeInfo.imageLinks ? book.volumeInfo.imageLinks.thumbnail : ""}
                                        description={book.volumeInfo.description ? book.volumeInfo.description : ""}
                                        link={book.volumeInfo.infoLink ? book.volumeInfo.infoLink : ""}
                                    >
                                        <SaveBtn onClick={() => saveBook({
                                            title: book.volumeInfo.title,
                                            authors: book.volumeInfo.authors,
                                            googleId: book.id,
                                            image: book.volumeInfo.imageLinks ? book.volumeInfo.imageLinks.thumbnail : "",
                                            description: book.volumeInfo.description,
                                            link: book.volumeInfo.infoLink
                                        })} />
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


export default Search;

