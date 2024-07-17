// src/components/BookForm.js
import React from 'react';
import { useFormik } from 'formik';
import * as Yup from 'yup';
import { TextField, Button, Paper, Typography } from '@mui/material';

const BookForm = ({ initialValues, onSubmit }) => {
  const formik = useFormik({
    initialValues,
    validationSchema: Yup.object({
      title: Yup.string().required('Required'),
      author: Yup.string().required('Required'),
      isbn: Yup.string().required('Required'),
      publicationDate: Yup.date().required('Required'),
    }),
    onSubmit: (values) => {
      onSubmit(values);
    },
  });

  return (
    <Paper className="container">
      <Typography variant="h4">Book Form</Typography>
      <form onSubmit={formik.handleSubmit}>
        <div className="form-field">
          <TextField
            fullWidth
            id="title"
            name="title"
            label="Title"
            value={formik.values.title}
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            error={formik.touched.title && Boolean(formik.errors.title)}
            helperText={formik.touched.title && formik.errors.title}
          />
        </div>
        <div className="form-field">
          <TextField
            fullWidth
            id="author"
            name="author"
            label="Author"
            value={formik.values.author}
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            error={formik.touched.author && Boolean(formik.errors.author)}
            helperText={formik.touched.author && formik.errors.author}
          />
        </div>
        <div className="form-field">
          <TextField
            fullWidth
            id="isbn"
            name="isbn"
            label="ISBN"
            value={formik.values.isbn}
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            error={formik.touched.isbn && Boolean(formik.errors.isbn)}
            helperText={formik.touched.isbn && formik.errors.isbn}
          />
        </div>
        <div className="form-field">
          <TextField
            fullWidth
            id="publicationDate"
            name="publicationDate"
            label="Publication Date"
            type="date"
            InputLabelProps={{
              shrink: true,
            }}
            value={formik.values.publicationDate}
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            error={formik.touched.publicationDate && Boolean(formik.errors.publicationDate)}
            helperText={formik.touched.publicationDate && formik.errors.publicationDate}
          />
        </div>
        <Button color="primary" variant="contained" fullWidth type="submit">
          Submit
        </Button>
      </form>
    </Paper>
  );
};

export default BookForm;
