import React, { useEffect }from "react"
import AddBookForm from "../component/AddBookForm"
import Header from "../component/header"


const AddBook =(props) => {
    useEffect(() => {
        document.title = "Kitaplik - Kitap Ekle";
    }, []);
    return (
        <div>
            <Header />
            <AddBookForm />
        
        </div>
        
    )
}

export default AddBook