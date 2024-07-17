// src/App.js
import React, { useState } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Dashboard from './components/Dashboard';
import BookList from './components/BookList';
import AuthorList from './components/AuthorList';
import BookForm from './components/BookForm';
import AuthorForm from './components/AuthorForm';
import { v4 as uuidv4 } from 'uuid'; // Import UUID

const App = () => {
  const [books, setBooks] = useState([]);
  const [authors, setAuthors] = useState([]);
  const [selectedBook, setSelectedBook] = useState(null);
  const [selectedAuthor, setSelectedAuthor] = useState(null);

  const handleAddBook = (book) => {
    setBooks([...books, book]);
  };

  const handleEditBook = (book) => {
    setBooks(books.map(b => (b.isbn === book.isbn ? book : b)));
    setSelectedBook(null); // Clear selected book after editing
  };

  const handleDeleteBook = (isbn) => {
    setBooks(books.filter((book) => book.isbn !== isbn));
  };

  const handleAddAuthor = (author) => {
    author.id = uuidv4(); // Assign unique ID to new author
    setAuthors([...authors, author]);
  };

  const handleUpdateAuthor = (author) => {
    setAuthors(authors.map(a => (a.id === author.id ? author : a)));
    setSelectedAuthor(null); // Clear selected author after editing
  };

  const handleDeleteAuthor = (id) => {
    setAuthors(authors.filter((author) => author.id !== id));
  };

  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path="/" element={<Dashboard />}>
          <Route path="books" element={<BookList books={books} onEdit={setSelectedBook} onDelete={handleDeleteBook} />} />
          <Route path="books/add" element={<BookForm initialValues={{ title: '', author: '', isbn: '', publicationDate: '' }} onSubmit={handleAddBook} />} />
          <Route path="books/edit" element={<BookForm initialValues={selectedBook || { title: '', author: '', isbn: '', publicationDate: '' }} onSubmit={handleEditBook} />} />
          <Route path="authors" element={<AuthorList authors={authors} onEdit={setSelectedAuthor} onDelete={handleDeleteAuthor} />} />
          <Route path="authors/add" element={<AuthorForm initialValues={{ name: '', birthDate: '', biography: '' }} onSubmit={handleAddAuthor} />} />
          <Route path="authors/edit" element={<AuthorForm initialValues={selectedAuthor || { name: '', birthDate: '', biography: '' }} onSubmit={handleUpdateAuthor} />} />
        </Route>
      </Routes>
    </Router>
  );
};

export default App;
