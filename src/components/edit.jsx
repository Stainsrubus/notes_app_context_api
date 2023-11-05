import React, { useContext, useState, useEffect } from 'react';
import '../components/create.css';
import { NotesDataContext } from '../context/NotesContext';
import Form from 'react-bootstrap/Form';
import { useNavigate, useParams } from 'react-router-dom';
import { Formik } from 'formik';
const Edit = ()=>{

  const params = useParams();
  let { data, setData } = useContext(NotesDataContext);
  const [initialValues, setInitialValues] = useState({
    title: '',
    content: '',
  });
  let navigate = useNavigate();

  const getData = (index) => {
    let newValues = { ...initialValues }
    newValues.title = data[index].title
    newValues.content = data[index].content
    setInitialValues(newValues)
  };

  useEffect(() => {
    if (Number(params.id) < data.length) {
      getData(Number(params.id));
    } else {
      navigate('/create')
    }
  }, []);

  return (
    <div className='window container-fluid '>
     <Formik
        initialValues={initialValues}
        enableReinitialize={true}
        onSubmit={(values) => {
          let newArray = [...data]; // immutable deep copy
          newArray.splice(params.id, 1, values)
          setData(newArray); // state update
          navigate('/create');
        }}
>
  {({ values, handleBlur, handleSubmit, handleChange }) => (
    <Form onSubmit={handleSubmit}>
      <div className='entry-box container-fluid card '>
        <div className='content d-flex'>
          <h3>Add a Note</h3>
          <Form.Control
            className='note-title'
            type='text'
            name='title' // Add name attribute
            placeholder='Enter Title'
            value={values.title}
            onBlur={handleBlur}
            onChange={handleChange}
          />
          <Form.Control
            className='note-content'
            as='textarea'
            name='content' // Add name attribute
            placeholder='Take a note...'
            value={values.content}
            onBlur={handleBlur}
            onChange={handleChange}
          />
        </div>
        <button className='btn btn-primary' type='submit'>
          Submit
        </button>
      </div>
    </Form>
  )}
</Formik>

    </div>
  );
}

export default Edit;
