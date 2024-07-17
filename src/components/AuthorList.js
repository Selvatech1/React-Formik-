// src/components/AuthorList.js
import React from 'react';
import { List, ListItem, ListItemText, ListItemSecondaryAction, IconButton } from '@mui/material';
import { Edit, Delete } from '@mui/icons-material';
import { useNavigate } from 'react-router-dom';

const AuthorList = ({ authors, onEdit, onDelete }) => {
  const navigate = useNavigate();

  const handleEdit = (author) => {
    onEdit(author);
    navigate('/authors/edit');
  };

  const handleDelete = (id) => {
    onDelete(id);
  };

  return (
    <div className="container">
      <h2>Author List</h2>
      <List>
        {authors.map((author) => (
          <ListItem key={author.id} className="list-item">
            <ListItemText
              primary={author.name}
              secondary={`Birth Date: ${author.birthDate} | Biography: ${author.biography}`}
            />
            <ListItemSecondaryAction>
              <IconButton edge="end" onClick={() => handleEdit(author)}>
                <Edit />
              </IconButton>
              <IconButton edge="end" onClick={() => handleDelete(author.id)}>
                <Delete />
              </IconButton>
            </ListItemSecondaryAction>
          </ListItem>
        ))}
      </List>
    </div>
  );
};

export default AuthorList;
