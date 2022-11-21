import React, { useEffect } from "react";
import { useState } from "react";
  


const AddCategoryForm = () => {
  
    useEffect (() => {
        document.title = "Library - Kategory Ekle";
    }, [])
    const [ category, setCategory] = useState("");
    const [ categoryName, setCategoryName] = useState("")
    const handleSubmit = (event) => {
        event.preventDefault();
        if (categoryName === "" ||  category === "") {
          alert("Kategori Adi Bos Birakilamaz");
        }
    }
    return (
    <div> 
        <div className="container my-5">
        <form onSubmit={handleSubmit}>
          <div className="row my-4">
           
            <div className="col">
              <input
                type="text"
                className="form-control text-center"
                placeholder="Kategori Adi"
              
                onChange={(event) => setCategory(event.target.value)}
              />
            </div>
          </div>
         
          <div className="d-flex justify-content-center">
            <button type="submit" className="btn btn-primary w-50">
             Kategori Ekle
            </button>
          </div>
        </form>
      </div>
    
  </div>

    )
}

export default AddCategoryForm