import React, { useContext } from 'react'
import '../components/create.css'
import { NotesDataContext } from '../context/NotesContext'
import Form from 'react-bootstrap/Form';
import { useNavigate} from 'react-router-dom';
import { Formik } from 'formik';
function create() {
  
let {data,setData}=useContext(NotesDataContext);
const navigate = useNavigate();


let handleDelete= (index) =>{
  let newArray=[...data]//deepcopy
  newArray.splice(index,1)
  setData(newArray)
}

  return <>
  <div className='window container-fluid '>
     <Formik
  initialValues={
    {
      title:'',
      content:''
    }
  }
  onSubmit={(values)=>{
    let newArray = [...data]//immutable deep copy
    newArray.push(values)
    setData(newArray)//state update
  }}
>
  {({ handleBlur, handleSubmit, handleChange }) => (
    <Form onSubmit={handleSubmit}>
      <div className='entry-box container-fluid card '>
        <div className='content d-flex'>
          <h3>Add a Note</h3>
          <Form.Control
            className='note-title'
            type='text'
            name='title' // Add name attribute
            placeholder='Enter Title'
            onBlur={handleBlur}
            onChange={handleChange}
          />
          <Form.Control
            className='note-content'
            as='textarea'
            name='content' // Add name attribute
            placeholder='Take a note...'
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

    
    <div className='tiles container-fluid'> 
          <div className='mynotes d-flex '>
           < i className="file fa-regular fa-file-lines fa-xl"></i>
            <span>My Notes</span>
          </div>
          <h4>Recently viewed</h4>
          <div className='notes-card-container container-fluid d-flex '>
          
         
           
            {
                data.map((e,i)=>{
                  return <>
                  <div className='notes-card' key={i}>
                        <div className='notes-card-title '>
                            <h1>{e.title}</h1>
                          <div>
                            <button className='edit-btn' onClick={()=>{
                              navigate(`/edit/${i}`)
                            }} > <i className=" fa-solid fa-pen fa-md"></i></button> 
                            <button className='delete-btn' onClick={handleDelete}> <i className="fa-solid fa-trash-can fa-md "></i></button>
                          </div> 
                        </div>
                        <div className='notes-card-body'>
                            <p>{e.content }</p> 
                        </div>
                        <div className='notes-card-end'>
                            <span>{e.endnote}</span> 
                        </div>
                 </div>
                  </>
                })
             
            }
            
         

          </div>
          

          
    </div>
    </div>
  </> 

          }
export default create 
