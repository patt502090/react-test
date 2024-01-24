import React, { useState, useEffect } from 'react';
import axios from 'axios';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import 'bootstrap/dist/css/bootstrap.min.css';

const BookList = ({ onSelectBook }) => {
  const [books, setBooks] = useState([]);

  useEffect(() => {
    axios.get('http://localhost:1337/api/books')
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
        <Card key={book.id} style={{ width: '18rem', marginBottom: '20px' }} className="mx-auto">
          <Card.Body onClick={() => onSelectBook(book)}>
            {console.log(book)}
            <Card.Title>{book.attributes.title}</Card.Title>
            <Card.Text>{book.attributes.author}</Card.Text>
            <Button variant="primary">View Details</Button>
          </Card.Body>
        </Card>
      ))}
    </div>
  );
};

export default BookList;
