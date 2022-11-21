import React, { useEffect} from "react";
import { useSelector } from "react-redux";
import Loading from "./Loading";
import { Link } from "react-router-dom";

const ListCategories = () => {
    useEffect (() => {
        document.title = "Library - Kategori Ekle"
    }, []) 
    const { categoriesState } = useSelector((state) => state)
    console.log("catState", categoriesState)
    if (categoriesState.success !== true) {
        return <Loading />;
    }
    return (

        <div className="container my-5">
            <div className="my-4 mx-4 d-flex justify-content-end">
                <Link to="/add-category" className="btn btn-primary">
                    Kategori Ekle
                </Link>
            </div>
            <div>
                <table className="table">
                    <thead>
                        <tr>
                            <th scope="col">Kategori Adi</th>

                            <th className="text-center d-flex justify-content-start" scope="col">
                                Islem{" "}
                            </th>
                        </tr>
                    </thead>
                    <tbody>
                        {categoriesState.categories.map((category) => {

                            return (
                                <tr key={category.id}>
                                    <td>{category.name}</td>
                                    <td>
                                        <div className="d-grid gap-2 d-md-block">
                                            <button
                                                className="btn btn- btn-sm btn-outline-danger mx-1"
                                                type="button"
                                                onClick={() => {
                                                    //   setShowModel(true);                       
                                                    //   setSilinecekKitap(book.id);
                                                    //   setSilinecekKitapName(book.name)
                                                }}
                                            >
                                                Delete
                                            </button>
                                            <Link
                                                // to="/edit-book"
                                                to={`edit-book/${category.id}`}
                                                className="btn btn-outline-primary btn-sm"
                                                type="button"

                                            >
                                                Edit
                                            </Link>
                                        </div>
                                    </td>
                                </tr>
                            );
                        })}
                    </tbody>
                </table>


            </div>
        </div>


    )
}

export default ListCategories



// {
//     showModel === true && (
//       <Modal
//       aciklama={`${silinecekKitapName} adli eseri silmek istediginizden emin misiniz` }
//       title={silinecekKitapName}
//       onConfirm={() => deleteBook(silinecekKitap)}
//      onCancel={() => setShowModel(false)}
//      />
// )}