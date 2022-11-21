import React  from 'react';
import {BrowserRouter , Routes , Route} from 'react-router-dom'
import Home from "./pages/Home";
import AddBook from './pages/AddBook';
import EditBook from './pages/EditBook';
import { useDispatch } from "react-redux"
import { useEffect } from 'react';
import axios from 'axios';
import CategoriesList from "./pages/categoriesList"
import AddCategories from './pages/AddCategories';



function App() {
  const dispatch = useDispatch();

  useEffect (() => {
    //categories
    dispatch({ type: "FETCH_CATEGORIES_START" });
    axios
       .get(" http://localhost:3004/categories")
       .then((res) => {
         dispatch({ type: "FETCH_CATEGORIES_SUCCESS", payload: res.data });
       })
        .catch((err) => {
          dispatch({ 
            type: "FETCH_CATEGORIES_FAIL", 
            payload: "Kategorileri cekerken bir hata olustu",
          });
        });

        //books
        dispatch({ type: "FETCH_BOOKS_START" });
    axios
       .get("http://localhost:3004/books")
       .then((res) => {
         dispatch({ type: "FETCH_BOOKS_SUCCESS", payload: res.data});
       })
        .catch((err) => {
          dispatch({ 
            type: "FETCH_BOOKS_FAIL", 
            payload: "Kitaplari cekerken bir hata olustu",
          });
          
        });
  },[]);

  return (
  
    <BrowserRouter>
<Routes>
<Route path='/' element={<Home />} />
<Route path='/add-book' element={<AddBook />} />
<Route path='/edit-book/:bookId' element={<EditBook />} />
<Route path='/categories' element={<CategoriesList />} />
<Route path='/add-category' element={<AddCategories />} />

</Routes>

</BrowserRouter>
    
  )
}

export default App;
