import React, { useEffect } from "react";
import Header from "../component/header";
import { useSelector } from "react-redux";
import ListCategories from "../component/ListCategories"

const CategoriesList = () => {
    const { categoriesState } = useSelector((state) => state);
    console.log("categoriesSate", categoriesState)
    
    return (
        <div>
        <Header />
        <ListCategories />
        </div>
    )
}

export default CategoriesList