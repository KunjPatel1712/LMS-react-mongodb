import React from 'react'
import { useState } from 'react'
import axios from 'axios'
import { useEffect } from 'react'

const Bookall = () => {
    
    const [books, setbooks]= useState()
   
 const fetchBooks = async () => {
    try {
      const response = await axios.get("http://localhost:5000/api/lms/getallbook");
      setbooks(response.data);
    
    } catch (err) {
      alert(err.message || "Error fetching books");
     
    }
  };

 useEffect(()=>{
    fetchBooks()
 })

  return ( 
   <>

   </>
  )
}

export default Bookall