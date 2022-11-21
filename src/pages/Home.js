import React, { useEffect} from "react";
import Header from "../component/header";
import ListBooks from "../component/ListBooks";
import EditBook from "./EditBook";


const Home = (props) => {
    useEffect (() => {
        document.title = "Library - Ana sayfa"
    }, [])
    return (
        <div>
        <Header />   
         
        <ListBooks />
       </div>
    )
}
export default Home
