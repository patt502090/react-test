import React, { useState, useEffect } from 'react';
import axios from 'axios';
import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';

const BookDetail = ({ book, onBack }) => {
  const [bookDetail, setBookDetail] = useState({});

  useEffect(() => {
    axios.get(`http://localhost:1337/api/books/${book.id}`)
      .then(response => {
        setBookDetail(response.data.data);
      })
      .catch(error => {
        console.error('Error fetching book detail:', error);
      });
  }, [book]);

  return (
    <div>
      <Button onClick={onBack} variant="secondary">Back</Button>
      {bookDetail && bookDetail.attributes && (
        <Card style={{ width: '18rem', marginTop: '20px' }}>
          <Card.Body>
            <Card.Title>{bookDetail.attributes.title}</Card.Title>
            <Card.Subtitle className="mb-2 text-muted">{bookDetail.attributes.author}</Card.Subtitle>
            <Card.Text>{bookDetail.attributes.description}</Card.Text>
          </Card.Body>
        </Card>
      )}
    </div>
  );
};

export default BookDetail;
