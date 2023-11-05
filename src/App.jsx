import React from 'react'
import Sidebar from './components/sidebar'
import Create from './components/create'
import './App.css'
import  NotesContext  from './context/NotesContext'
import Edit from './components/edit'
import { BrowserRouter,Routes,Route, Navigate } from 'react-router-dom'
function App() {
  return (
    <div>
       <BrowserRouter>
       <Routes>
        <Route path='create' element={
          <NotesContext>
          <>  <Sidebar /><Create /></>
        </NotesContext>
        }/>
        <Route path='edit/:id' element={
          <NotesContext>
         <><Edit /></>
        </NotesContext>
        }/>
        <Route path='*' element={<Navigate to={'/create'}/>}/>
          </Routes>
    </BrowserRouter>
    </div>
 
  )
}

export default App
