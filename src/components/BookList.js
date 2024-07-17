// src/components/BookList.js
import React from 'react';
import { List, ListItem, ListItemText, ListItemSecondaryAction, IconButton } from '@mui/material';
import { Edit, Delete } from '@mui/icons-material';
import { useNavigate } from 'react-router-dom';

const BookList = ({ books, onEdit, onDelete }) => {
  const navigate = useNavigate();

  const handleEdit = (book) => {
    onEdit(book);
    navigate('/books/edit');
  };

  return (
    <div className="container">
      <h2>Book List</h2>
      <List>
        {books.map((book) => (
          <ListItem key={book.isbn} className="list-item">
            <ListItemText
              primary={book.title}
              secondary={`Author: ${book.author} | ISBN: ${book.isbn} | Published: ${book.publicationDate}`}
            />
            <ListItemSecondaryAction>
              <IconButton edge="end" onClick={() => handleEdit(book)}>
                <Edit />
              </IconButton>
              <IconButton edge="end" onClick={() => onDelete(book.isbn)}>
                <Delete />
              </IconButton>
            </ListItemSecondaryAction>
          </ListItem>
        ))}
      </List>
    </div>
  );
};

export default BookList;
