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
    <div className="text-center"> 
      <Button onClick={onBack} variant="secondary">Back</Button>
      {bookDetail?.attributes && (
        <Card style={{ width: '40rem', marginTop: '20px' }} className="mx-auto"> 
          <Card.Body>
            <Card.Title>Title : {bookDetail.attributes.title}</Card.Title>
            <Card.Subtitle className="mb-2 text-muted">Author : {bookDetail.attributes.author}</Card.Subtitle>
            <Card.Text>Description : {bookDetail.attributes.description}</Card.Text>
          </Card.Body>
        </Card>
      )}
    </div>
  );
};

export default BookDetail;
