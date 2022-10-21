import React  from 'react';
import {BrowserRouter , Routes , Route} from 'react-router-dom'
import Home from "./pages/Home";
import AddBook from './pages/AddBook';
import EditBook from './pages/EditBook';
import { useDispatch } from "react-redux"
import { useEffect } from 'react';
import axios from 'axios';



function App() {
  const dispatch = useDispatch();

  useEffect (() => {
    dispatch({ type: "FETC_CATEGORIES_STATE" });
    axios
       .get(" http://localhost:3004/categories")
       .then((res) => {
         dispatch({ type: "FETC_CATEGORIES_SUCCESS", payload: res.data})
       })
        .catch(err =>{
          dispatch({ 
            type: "FETCH_CATEGORIES_FAIL", 
            payload: "Kategorileri cekerken bir hata olustu"})
        })
  },[]);

  return (
  
    <BrowserRouter>
<Routes>
<Route path='/' element={<Home />} />
<Route path='/add-book' element={<AddBook />} />
<Route path='/edit-book/:bookId' element={<EditBook />} />


</Routes>

</BrowserRouter>
    
  )
}

export default App;
