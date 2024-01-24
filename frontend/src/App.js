import React, { useState } from 'react';
import BookList from './components/BookList';
import BookDetail from './components/BookDetail';

;

const App = () => {
  const [selectedBook, setSelectedBook] = useState(null);

  const handleSelectBook = (book) => {
    setSelectedBook(book);
  };

  const handleBack = () => {
    setSelectedBook(null);
  };

  return (
    <div>
      {selectedBook ? (
        <BookDetail book={selectedBook} onBack={handleBack} />
      ) : (
        <BookList onSelectBook={handleSelectBook} />
      )}
    </div>
  );
};

export default App;
