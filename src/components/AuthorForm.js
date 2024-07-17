// src/components/AuthorForm.js
import React from 'react';
import { useFormik } from 'formik';
import * as Yup from 'yup';
import { TextField, Button, Paper, Typography } from '@mui/material';

const AuthorForm = ({ initialValues, onSubmit }) => {
  const formik = useFormik({
    initialValues,
    validationSchema: Yup.object({
      name: Yup.string().required('Required'),
      birthDate: Yup.date().required('Required'),
      biography: Yup.string().required('Required'),
    }),
    onSubmit: (values) => {
      onSubmit(values);
    },
  });

  return (
    <Paper className="container">
      <Typography variant="h4">Author Form</Typography>
      <form onSubmit={formik.handleSubmit}>
        <div className="form-field">
          <TextField
            fullWidth
            id="name"
            name="name"
            label="Name"
            value={formik.values.name}
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            error={formik.touched.name && Boolean(formik.errors.name)}
            helperText={formik.touched.name && formik.errors.name}
          />
        </div>
        <div className="form-field">
          <TextField
            fullWidth
            id="birthDate"
            name="birthDate"
            label="Birth Date"
            type="date"
            InputLabelProps={{
              shrink: true,
            }}
            value={formik.values.birthDate}
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            error={formik.touched.birthDate && Boolean(formik.errors.birthDate)}
            helperText={formik.touched.birthDate && formik.errors.birthDate}
          />
        </div>
        <div className="form-field">
          <TextField
            fullWidth
            id="biography"
            name="biography"
            label="Biography"
            multiline
            rows={4}
            value={formik.values.biography}
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            error={formik.touched.biography && Boolean(formik.errors.biography)}
            helperText={formik.touched.biography && formik.errors.biography}
          />
        </div>
        <Button color="primary" variant="contained" fullWidth type="submit">
          Submit
        </Button>
      </form>
    </Paper>
  );
};

export default AuthorForm;
