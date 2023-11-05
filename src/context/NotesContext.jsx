import React,{useState} from 'react'
export const NotesDataContext=React.createContext(null)
function NotesContext({children}) {   

  const date = new Date(); // Create a Date object with the current date.

  const month = (date.getMonth() + 1).toString().padStart(2, '0'); // Adding 1 because getMonth() returns values from 0 to 11.
  const day = date.getDate().toString().padStart(2, '0');
  const year = date.getFullYear();

  let [data,setData] =useState([
    {
      title:"morning class",
      content:"English assesment,Tamil assesment",
      endnote:`${day}/${month}/${year}` ,
    },
    {
      title:"Module Builder",
      content:"Need to access all the modules in the package",
      endnote:`${day}/${month}/${year}`
    }
  ])

return <NotesDataContext.Provider value={{data,setData}}>
  {children}
</NotesDataContext.Provider>
}
export default NotesContext