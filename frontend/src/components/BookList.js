import React, { useState, useEffect } from 'react';
import axios from 'axios';
import Card from 'react-bootstrap/Card';
import 'bootstrap/dist/css/bootstrap.min.css';

const BookList = ({ onSelectBook }) => {
  const [books, setBooks] = useState([]);

  useEffect(() => {
    axios.get('http://localhost:1337/api/books?populate=*')
      .then(response => {
        console.log('Data from API:', response.data);
        setBooks(response.data.data);
      })
      .catch(error => console.error('Error fetching books:', error));
  }, []);

  return (
    <div className="text-center">
      <h1>Book List</h1>

      {books.map(book => (
        <Card
          key={book.id}
          style={{ width: '18rem', marginBottom: '20px', cursor: 'pointer', transition: 'background-color 0.3s' }}
          className="mx-auto"
          onClick={() => onSelectBook(book)}
        >
          <Card.Body>
            <Card.Title>{book.attributes.title}</Card.Title>

            <Card.Text>{book.attributes.author}</Card.Text>
            <Card.Text>{book.attributes.description}</Card.Text>
          </Card.Body>
        </Card>
      ))}
    </div>
  );
};

export default BookList;
